export function createNebula(
  THREE,
  scene
) {
  const geometry =
    new THREE.BufferGeometry();

  const count = 400;

  const positions =
    new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] =
      (Math.random() - 0.5) * 100;

    positions[i * 3 + 1] =
      (Math.random() - 0.5) * 100;

    positions[i * 3 + 2] =
      (Math.random() - 0.5) * 100 - 20;
  }

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );

  const material =
    new THREE.PointsMaterial({
      color: 0x4c1d95,
      size: 1.8,
      transparent: true,
      opacity: 0.25,
      blending:
        THREE.AdditiveBlending,
    });

  const particles =
    new THREE.Points(
      geometry,
      material
    );

  scene.add(particles);

  return particles;
}