import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { ComputerModel } from "./Model";

export const ComputerThree: React.FC<any> = ({ setStart }) => {
  const modelRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    modelRef.current.rotation.y = clock.getElapsedTime() / 10;
  });

  useEffect(() => {
    setTimeout(() => {
      setStart(false);
    }, 200);
  }, []);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow intensity={2} position={[10, 5, 3]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <ComputerModel modelRef={modelRef} scale={2} position={[0, -1, 0]} />
      <ContactShadows position={[0, -1, 0]} scale={[30, 25]} opacity={0.4} />
    </group>
  );
};
