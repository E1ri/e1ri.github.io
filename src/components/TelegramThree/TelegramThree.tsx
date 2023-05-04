import { SpringValue } from "@react-spring/three";
import { useFrame, useLoader } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

interface ITelegramThree {}

export const TelegramThree: React.FC<ITelegramThree> = ({}) => {
  const gltf = useLoader(GLTFLoader, "/telegram_3d-icon/scene.gltf");
  const ref = useRef<any>(null);
  const [dummy] = useState(() => new THREE.Object3D());

  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 0.5);
    easing.dampQ(ref.current.quaternion, dummy.quaternion, 0.5, dt);
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.6}
        position={[2.2, 0.2, 1.6]}
        color="white"
      />
      <primitive
        ref={ref}
        position={[0, 0, 0]}
        object={gltf.scene}
        scale={1.17}
      />
    </group>
  );
};
