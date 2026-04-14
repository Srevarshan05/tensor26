/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const AntigravityInner = ({
  count = 300,
  magnetRadius = 10,
  ringRadius = 10,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.2,
  lerpSpeed = 0.1,
  color = '#4080ff',
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10
}) => {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const virtualMouse = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const temp = [];
    const width = viewport.width;
    const height = viewport.height;

    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;

      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 20;

      const randomRadiusOffset = (Math.random() - 0.5) * 2;

      temp.push({
        t,
        factor,
        speed,
        xFactor,
        yFactor,
        zFactor,
        mx: x,
        my: y,
        mz: z,
        cx: x,
        cy: y,
        cz: z,
        vx: 0,
        vy: 0,
        vz: 0,
        randomRadiusOffset
      });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { viewport: v, pointer: m } = state;

    lastMousePos.current = { x: m.x, y: m.y };

    if (autoAnimate) {
      virtualMouse.current.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      virtualMouse.current.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.5;
    } else {
      virtualMouse.current.x = m.x;
      virtualMouse.current.y = m.y;
    }

    const mouseX = (virtualMouse.current.x * v.width) / 2;
    const mouseY = (virtualMouse.current.y * v.height) / 2;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      t = particle.t += speed / 2 * waveSpeed;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      particle.mx += (mouseX - particle.mx) * 0.01 * fieldStrength;
      particle.my += (mouseY - particle.my) * 0.01 * fieldStrength;

      const currentDistToMouse = Math.sqrt(
        Math.pow(particle.cx - mouseX, 2) + Math.pow(particle.cy - mouseY, 2)
      );

      const angle = Math.atan2(particle.cy - mouseY, particle.cx - mouseX);
      const projectedTargetX = mouseX + Math.cos(angle) * (ringRadius + particle.randomRadiusOffset);
      const projectedTargetY = mouseY + Math.sin(angle) * (ringRadius + particle.randomRadiusOffset);

      const magnetFactor = Math.max(0, 1 - currentDistToMouse / magnetRadius);

      const targetX = particle.mx + (projectedTargetX - particle.mx) * magnetFactor;
      const targetY = particle.my + (projectedTargetY - particle.my) * magnetFactor;

      particle.cx += (targetX - particle.cx) * lerpSpeed;
      particle.cy += (targetY - particle.cy) * lerpSpeed;
      particle.cz += (0 - particle.cz) * lerpSpeed;

      dummy.position.set(
        particle.cx + (s * xFactor) / 10 * waveAmplitude,
        particle.cy + (s * yFactor) / 10 * waveAmplitude,
        particle.cz + (s * zFactor) / 10 * waveAmplitude * depthFactor
      );

      dummy.rotation.set(s * 5 + i * rotationSpeed, s * 5 + i * rotationSpeed, s * 5 + i * rotationSpeed);

      const currentDistToProjected = Math.sqrt(
        Math.pow(particle.cx - projectedTargetX, 2) + Math.pow(particle.cy - projectedTargetY, 2)
      );

      const distFromRing = Math.abs(currentDistToMouse - ringRadius);
      let scaleFactor = 1 - distFromRing / 10;
      scaleFactor = Math.max(0, Math.min(1, scaleFactor));

      const finalScale = scaleFactor * (0.8 + Math.sin(t * pulseSpeed) * 0.2 * particleVariance) * particleSize;
      dummy.scale.set(finalScale, finalScale, finalScale);

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {particleShape === 'capsule' && <capsuleGeometry args={[0.1, 0.4, 4, 8]} />}
      {particleShape === 'sphere' && <sphereGeometry args={[0.2, 16, 16]} />}
      {particleShape === 'box' && <boxGeometry args={[0.3, 0.3, 0.3]} />}
      {particleShape === 'tetrahedron' && <tetrahedronGeometry args={[0.3]} />}
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
};

const Antigravity = ({ className, ...props }) => {
  return (
    <div className={`w-full h-full ${className}`}>
        <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
            <AntigravityInner {...props} />
        </Canvas>
    </div>
  );
};

export default Antigravity;
