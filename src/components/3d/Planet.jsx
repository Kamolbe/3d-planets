import * as THREE from "three";

export function createPlanetTexture(type) {
  const canvas = document.createElement("canvas");

  canvas.width = 1024;
  canvas.height = 512;

  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  if (type === "aetheria") {
    const gradient = ctx.createLinearGradient(
      0,
      0,
      0,
      canvas.height
    );

    gradient.addColorStop(0, "#06021a");
    gradient.addColorStop(0.5, "#0b0a33");
    gradient.addColorStop(1, "#03010d");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 40; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 80 + 20;

      const landGradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius
      );

      landGradient.addColorStop(0, "#10b981");
      landGradient.addColorStop(0.4, "#06b6d4");
      landGradient.addColorStop(0.8, "#3b82f6");
      landGradient.addColorStop(1, "transparent");

      ctx.fillStyle = landGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
    ctx.lineWidth = 1;

    for (let x = 0; x < canvas.width; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  }

  if (type === "chronos") {
    const gradient = ctx.createLinearGradient(
      0,
      0,
      0,
      canvas.height
    );

    gradient.addColorStop(0, "#1e0533");
    gradient.addColorStop(0.2, "#4c1d95");
    gradient.addColorStop(0.4, "#831843");
    gradient.addColorStop(0.6, "#581c87");
    gradient.addColorStop(0.8, "#2e1065");
    gradient.addColorStop(1, "#110426");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 30; i++) {
      const y = Math.random() * canvas.height;
      const height = Math.random() * 25 + 5;

      const bandGradient = ctx.createLinearGradient(
        0,
        y,
        0,
        y + height
      );

      bandGradient.addColorStop(
        0,
        "rgba(236, 72, 153, 0.4)"
      );

      bandGradient.addColorStop(
        0.5,
        "rgba(168, 85, 247, 0.6)"
      );

      bandGradient.addColorStop(
        1,
        "rgba(99, 102, 241, 0.2)"
      );

      ctx.fillStyle = bandGradient;
      ctx.fillRect(0, y, canvas.width, height);
    }
  }

  if (type === "nebula") {
    ctx.fillStyle = "#050508";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#a855f7";
    ctx.lineWidth = 2;

    for (let i = 0; i < 60; i++) {
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;

      const x2 =
        x1 + (Math.random() - 0.5) * 200;

      const y2 =
        y1 + (Math.random() - 0.5) * 200;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.fillStyle = "#00f0ff";

      ctx.beginPath();
      ctx.arc(x2, y2, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  return canvas;
}

export function createPlanet(
  THREE,
  scene,
  {
    type,
    position,
    radius,
    rotationSpeed = 0.003,
    ring = false,
    atmosphere = false,
  }
) {
  const textureCanvas = createPlanetTexture(type);

  const texture = new THREE.CanvasTexture(
    textureCanvas
  );

  texture.wrapS = THREE.RepeatWrapping;

  const geometry = new THREE.SphereGeometry(
    radius,
    64,
    64
  );

  let materialOptions = {
    map: texture,
    roughness: 0.4,
    metalness: 0.2,
  };

  if (type === "aetheria") {
    materialOptions.emissive = 0x061438;
    materialOptions.emissiveIntensity = 0.3;
  }

  if (type === "nebula") {
    materialOptions.roughness = 0.2;
    materialOptions.metalness = 0.8;
    materialOptions.emissive = 0x581c87;
    materialOptions.emissiveIntensity = 0.4;
  }

  const material = new THREE.MeshStandardMaterial(
    materialOptions
  );

  const planet = new THREE.Mesh(
    geometry,
    material
  );

  planet.position.set(
    position[0],
    position[1],
    position[2]
  );

  scene.add(planet);

  if (atmosphere) {
    const glowGeometry =
      new THREE.SphereGeometry(
        radius + 0.25,
        32,
        32
      );

    const glowMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide,
      });

    const glow = new THREE.Mesh(
      glowGeometry,
      glowMaterial
    );

    planet.add(glow);
  }

  if (ring) {
    const ringGeometry =
      new THREE.TorusGeometry(
        radius + 3,
        0.03,
        16,
        100
      );

    const ringMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.4,
        wireframe: true,
      });

    const orbitalRing = new THREE.Mesh(
      ringGeometry,
      ringMaterial
    );

    orbitalRing.rotation.x =
      Math.PI / 2.5;

    planet.add(orbitalRing);
  }

  return {
    mesh: planet,
    rotSpeed: rotationSpeed,
  };
}