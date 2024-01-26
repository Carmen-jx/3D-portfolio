

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import scene from "../assets/3d/shiba.glb";

export function Shiba({ isTyping, ...props }) {
  const { nodes, materials } = useGLTF(scene);
  const groupRef = useRef();

  // Rotate the model while typing
  useFrame(() => {
    if (isTyping && groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Group18985_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh

        geometry={nodes.Box002_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object001_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(scene);
