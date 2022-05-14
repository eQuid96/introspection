import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export type Vec3 = [number, number, number];
export type MeshType = {
  name: string;
  //TODO: Implement logics
  material?: string;
  position?: Vec3;
  rotation?: Vec3;
  scale?: Vec3;
};

type GLTFModel = {
  materials: { [key: string]: THREE.Material };
  nodes: { [key: string]: THREE.Mesh };
};
export default function Mesh(props: MeshType) {
  const gltf = useGLTF(getGltfPath(props)) as unknown as GLTFModel;
  return (
    <group
      position={props.position}
      rotation={props.rotation}
      scale={props.scale}
    >
      {Object.keys(gltf.nodes).map((node) => (
        <mesh key={gltf.nodes[node].uuid} geometry={gltf.nodes[node].geometry}>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
      ))}
    </group>
  );
}

function getGltfPath(mesh: MeshType) {
  const meshName = mesh.name.split("gltf");
  return `./assets/${meshName[0]}.gltf`;
}
