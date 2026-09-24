import {
  createPlanet,
} from "./Planet";

import {
  createStarField,
} from "./StarField";

import {
  createNebula,
} from "./Nebula";

export function createSpaceScene(
  THREE,
  scene
) {
  const planets = [];
  const satellites = [];
  const starLayers = [];

  scene.fog = new THREE.FogExp2(
    0x060214,
    0.008
  );

  // LIGHTS

  const ambientLight =
    new THREE.AmbientLight(
      0x2d1b69,
      1.2
    );

  scene.add(ambientLight);

  const mainSun =
    new THREE.DirectionalLight(
      0x00f0ff,
      2.5
    );

  mainSun.position.set(
    20,
    20,
    20
  );

  scene.add(mainSun);

  const secondaryLight =
    new THREE.PointLight(
      0xa855f7,
      3,
      100
    );

  secondaryLight.position.set(
    -20,
    -10,
    -10
  );

  scene.add(secondaryLight);

  const coreLight =
    new THREE.PointLight(
      0x3b82f6,
      2,
      50
    );

  scene.add(coreLight);

  // PLANET 1

  const planet1 = createPlanet(
    THREE,
    scene,
    {
      type: "aetheria",
      position: [6, 1, 5],
      radius: 4.5,
      rotationSpeed: 0.003,
      ring: true,
      atmosphere: true,
    }
  );

  planets.push({
    ...planet1,
    basePos: [6, 1, 5],
  });

  // SATELLITE

  const satelliteGeometry =
    new THREE.SphereGeometry(
      0.2,
      16,
      16
    );

  const satelliteMaterial =
    new THREE.MeshBasicMaterial({
      color: 0x00ffff,
    });

  const satellite =
    new THREE.Mesh(
      satelliteGeometry,
      satelliteMaterial
    );

  scene.add(satellite);

  satellites.push({
    mesh: satellite,
    parent: planet1.mesh,
    radius: 7.5,
    speed: 0.8,
    angle: 0,
  });

  // PLANET 2

  const planet2 = createPlanet(
    THREE,
    scene,
    {
      type: "chronos",
      position: [-12, -8, -18],
      radius: 6,
      rotationSpeed: 0.002,
    }
  );

  planets.push({
    ...planet2,
    basePos: [-12, -8, -18],
  });

  const ringGeometry =
    new THREE.RingGeometry(
      8,
      12,
      64
    );

  const ringMaterial =
    new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });

  const ring =
    new THREE.Mesh(
      ringGeometry,
      ringMaterial
    );

  ring.rotation.x =
    Math.PI / 2.2;

  planet2.mesh.add(ring);

  // PLANET 3

  const planet3 = createPlanet(
    THREE,
    scene,
    {
      type: "nebula",
      position: [8, -18, -38],
      radius: 3.2,
      rotationSpeed: 0.005,
    }
  );

  planets.push({
    ...planet3,
    basePos: [8, -18, -38],
  });

  // STARS

  starLayers.push(
    createStarField(
      THREE,
      scene,
      300,
      0.22,
      0x00f0ff,
      60,
      1.8
    )
  );

  starLayers.push(
    createStarField(
      THREE,
      scene,
      1200,
      0.14,
      0xe0e7ff,
      120,
      1
    )
  );

  starLayers.push(
    createStarField(
      THREE,
      scene,
      3500,
      0.08,
      0xa855f7,
      200,
      0.4
    )
  );

  // NEBULA

  const nebulaParticles =
    createNebula(
      THREE,
      scene
    );

  return {
    planets,
    satellites,
    starLayers,
    nebulaParticles,
  };
}