"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#FF6B00"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

export default function AboutThreeVisual() {
  return (
    <div className="h-[400px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
