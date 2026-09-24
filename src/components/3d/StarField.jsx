export function createStarField(
  THREE,
  scene,
  count,
  size,
  color,
  depthRange,
  speedFactor
) {
  const geometry =
    new THREE.BufferGeometry();

  const positions = new Float32Array(
    count * 3
  );

  for (let i = 0; i < count; i++) {
    positions[i * 3] =
      (Math.random() - 0.5) * 160;

    positions[i * 3 + 1] =
      (Math.random() - 0.5) * 160;

    positions[i * 3 + 2] =
      (Math.random() - 0.5) *
        depthRange -
      10;
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
      color,
      size,
      transparent: true,
      opacity: 0.85,
      blending:
        THREE.AdditiveBlending,
    });

  const points = new THREE.Points(
    geometry,
    material
  );

  scene.add(points);

  return {
    points,
    speedFactor,
  };
}