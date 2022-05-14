import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
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
  const { materialColor, emissiveIntensity, roughness, clearcoat } =
    useControls({
      materialColor: "#FF6CF0",
      emissiveIntensity: {
        value: 1.0,
        min: 0.0,
        max: 2.0,
      },
      roughness: {
        value: 1.0,
        min: 0.0,
        max: 1.0,
      },
      clearcoat: {
        value: 0.68,
        min: 0.0,
        max: 1.0,
      },
    });

  return (
    <group
      position={props.position}
      rotation={props.rotation}
      scale={props.scale}
    >
      {Object.keys(gltf.nodes).map((node) => (
        <mesh key={gltf.nodes[node].uuid} geometry={gltf.nodes[node].geometry}>
          <meshPhysicalMaterial
            roughness={roughness}
            clearcoat={clearcoat}
            wireframe={true}
            color={materialColor}
            emissive={materialColor}
            emissiveIntensity={emissiveIntensity}
          ></meshPhysicalMaterial>
        </mesh>
      ))}
    </group>
  );
}

function getGltfPath(mesh: MeshType) {
  const meshName = mesh.name.split("gltf");
  return `./assets/${meshName[0]}.gltf`;
}
