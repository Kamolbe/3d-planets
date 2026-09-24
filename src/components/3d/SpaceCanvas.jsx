import {
  useEffect,
  useRef,
} from "react";

import * as THREE from "three";

import {
  createSpaceScene,
} from "./SpaceScene";

function SpaceCanvas({
  scrollProgress,
}) {
  const mountRef = useRef(null);

  const stateRef = useRef({
    camera: null,
    renderer: null,
    planets: [],
    satellites: [],
    starLayers: [],
    mouse: {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    },
  });

  useEffect(() => {
    const container =
      mountRef.current;

    if (!container) return;

    const width =
      container.clientWidth;

    const height =
      container.clientHeight;

    const scene =
      new THREE.Scene();

    const camera =
      new THREE.PerspectiveCamera(
        60,
        width / height,
        0.1,
        1000
      );

    camera.position.set(
      0,
      0,
      25
    );

    const renderer =
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference:
          "high-performance",
      });

    renderer.setSize(
      width,
      height
    );

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        2
      )
    );

    renderer.toneMapping =
      THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure =
      1.2;

    container.appendChild(
      renderer.domElement
    );

    const {
      planets,
      satellites,
      starLayers,
    } = createSpaceScene(
      THREE,
      scene
    );

    stateRef.current = {
      ...stateRef.current,
      camera,
      renderer,
      planets,
      satellites,
      starLayers,
    };

    const mouseMove = (event) => {
      const x =
        (event.clientX /
          window.innerWidth) *
          2 -
        1;

      const y =
        -(event.clientY /
          window.innerHeight) *
          2 +
        1;

      stateRef.current.mouse.targetX =
        x * 0.8;

      stateRef.current.mouse.targetY =
        y * 0.8;
    };

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    const clock =
      new THREE.Clock();

    let animationId;

    const animate = () => {
      animationId =
        requestAnimationFrame(
          animate
        );

      const delta =
        clock.getDelta();

      planets.forEach((planet) => {
        planet.mesh.rotation.y +=
          planet.rotSpeed;
      });

      satellites.forEach(
        (satellite) => {
          satellite.angle +=
            satellite.speed *
            delta;

          const position =
            satellite.parent
              .position;

          satellite.mesh.position.x =
            position.x +
            Math.cos(
              satellite.angle
            ) *
              satellite.radius;

          satellite.mesh.position.z =
            position.z +
            Math.sin(
              satellite.angle
            ) *
              satellite.radius;

          satellite.mesh.position.y =
            position.y +
            Math.sin(
              satellite.angle * 0.5
            ) *
              2;
        }
      );

      const mouse =
        stateRef.current.mouse;

      mouse.x +=
        (mouse.targetX -
          mouse.x) *
        0.05;

      mouse.y +=
        (mouse.targetY -
          mouse.y) *
        0.05;

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    const resize = () => {
      const w =
        container.clientWidth;

      const h =
        container.clientHeight;

      camera.aspect =
        w / h;

      camera.updateProjectionMatrix();

      renderer.setSize(
        w,
        h
      );
    };

    window.addEventListener(
      "resize",
      resize
    );

    return () => {
      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "mousemove",
        mouseMove
      );

      window.removeEventListener(
        "resize",
        resize
      );

      renderer.dispose();

      if (
        renderer.domElement.parentNode
      ) {
        renderer.domElement.parentNode.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  useEffect(() => {
    const {
      camera,
      starLayers,
      mouse,
    } = stateRef.current;

    if (!camera) return;

    const sp = scrollProgress;

    const targetX =
      Math.sin(
        sp * Math.PI * 2
      ) *
        3 +
      mouse.x * 2;

    const targetY =
      -sp * 32 +
      mouse.y * 2;

    const targetZ =
      25 -
      sp * 55;

    camera.position.x +=
      (targetX -
        camera.position.x) *
      0.1;

    camera.position.y +=
      (targetY -
        camera.position.y) *
      0.1;

    camera.position.z +=
      (targetZ -
        camera.position.z) *
      0.1;

    if (sp < 0.25) {
      camera.lookAt(
        2,
        camera.position.y - 0.5,
        camera.position.z - 20
      );
    } else if (sp < 0.55) {
      camera.lookAt(
        -6,
        camera.position.y - 1,
        camera.position.z - 20
      );
    } else if (sp < 0.8) {
      camera.lookAt(
        4,
        camera.position.y - 2,
        camera.position.z - 20
      );
    } else {
      camera.lookAt(
        0,
        camera.position.y,
        camera.position.z - 30
      );
    }

    starLayers.forEach(
      (layer) => {
        layer.points.position.y =
          sp *
          40 *
          layer.speedFactor;

        layer.points.position.x =
          mouse.x *
          3 *
          layer.speedFactor;
      }
    );
  }, [scrollProgress]);

  return (
    <div className="space-canvas">
      <div
        ref={mountRef}
        className="space-canvas-mount"
      />

      <div className="space-glow" />
    </div>
  );
}

export default SpaceCanvas;