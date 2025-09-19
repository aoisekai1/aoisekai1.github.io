"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Firework() {
  const count = 80;
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = 2 * Math.PI * Math.random();
      const r = 2 + Math.random() * 0.5;
      arr.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(arr);
  }, [count]);

  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.3;
      ref.current.material.size =
        0.15 +
        Math.abs(Math.sin(clock.getElapsedTime() * 2)) * 0.15;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#fbbf24"
        size={0.2}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function FloatingCube({ position, color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.3;
      ref.current.rotation.y = clock.getElapsedTime() * 0.5;
      ref.current.position.y =
        position[1] +
        Math.sin(clock.getElapsedTime() + position[0]) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position} castShadow receiveShadow>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
    </mesh>
  );
}

function FloatingSphere({ position, color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.x =
        position[0] +
        Math.sin(clock.getElapsedTime() + position[1]) * 0.3;
      ref.current.position.y =
        position[1] +
        Math.cos(clock.getElapsedTime() + position[0]) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position} castShadow receiveShadow>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
    </mesh>
  );
}

function CodeLine({ start, end, color }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  return (
    <line>
      <bufferGeometry attach="geometry" setFromPoints={points} />
      <lineBasicMaterial color={color} linewidth={2} />
    </line>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <Firework />
      {/* Backend cubes */}
      <FloatingCube position={[-2, 1, 0]} color="#6366f1" />
      <FloatingCube position={[2, -1, 0]} color="#f59e42" />
      <FloatingCube position={[0, 2, -1]} color="#10b981" />
      {/* Frontend spheres */}
      <FloatingSphere position={[-1.5, -2, 1]} color="#3b82f6" />
      <FloatingSphere position={[1.5, 2, -1]} color="#fbbf24" />
      <FloatingSphere position={[0, -2, 2]} color="#ef4444" />
      {/* Code lines */}
      <CodeLine start={[-2, 1, 0]} end={[-1.5, -2, 1]} color="#fff" />
      <CodeLine start={[2, -1, 0]} end={[1.5, 2, -1]} color="#fff" />
      <CodeLine start={[0, 2, -1]} end={[0, -2, 2]} color="#fff" />
    </Canvas>
  );
}
