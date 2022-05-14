import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Intro_geo: THREE.Mesh;
  };
};

export default function Intro({ ...props }: JSX.IntrinsicElements["group"]) {
  const { wireframeColor, internalColor, emissiveIntensity, rotation } =
    useControls({
      wireframeColor: "#FF6CF0",
      internalColor: "#000000",
      emissiveIntensity: {
        value: 0.34,
        min: 0.0,
        max: 2.0,
      },
      rotation: [0, 3.12, -0.26],
    });
  const group = useRef<THREE.Group | null>(null);
  const standarMat = new THREE.MeshStandardMaterial({
    color: internalColor,
  });

  const wireframe = new THREE.MeshStandardMaterial({
    wireframe: true,
    color: wireframeColor,
    emissive: wireframeColor,
    emissiveIntensity: emissiveIntensity,
  });
  const { nodes } = useGLTF("/assets/intro.gltf") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Intro_geo.geometry}
        rotation={rotation}
        material={standarMat}
      />
      <mesh
        geometry={nodes.Intro_geo.geometry}
        rotation={rotation}
        material={wireframe}
      />
    </group>
  );
}

useGLTF.preload("/assets/intro.gltf");
