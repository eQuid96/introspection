import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Intro_geo: THREE.Mesh;
  };
};

export default function Intro({ ...props }: JSX.IntrinsicElements["group"]) {
  const { wireframeColor, internalColor, rotation } = useControls({
    wireframeColor: "#FF6CF0",
    internalColor: "#000000",
    rotation: [0, 3.12, -0.26],
  });
  const group = useRef<THREE.Group | null>(null);
  const { nodes } = useGLTF("/assets/intro.gltf") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Intro_geo.geometry} rotation={rotation}>
        <meshBasicMaterial color={internalColor}></meshBasicMaterial>
      </mesh>
      <lineSegments rotation={rotation}>
        <edgesGeometry args={[nodes.Intro_geo.geometry]}></edgesGeometry>
        <meshBasicMaterial color={wireframeColor}></meshBasicMaterial>
      </lineSegments>
    </group>
  );
}

useGLTF.preload("/assets/intro.gltf");
