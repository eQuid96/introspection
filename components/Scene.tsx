import { Center, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Mesh from "./Mesh";
import Postprocess from "./Postprocess";
import { useControls } from "leva";
import Debugger from "./Debugger";
export default function Scene() {
  const { starRadius, starCount, starSpeed, rotation } = useControls({
    starRadius: 90,
    starCount: 2500,
    starSpeed: 1,
    rotation: [0, 3.12, -0.26],
  });
  return (
    <Canvas>
      <Debugger></Debugger>
      <color attach="background" args={["black"]}></color>
      <ambientLight />
      <Postprocess></Postprocess>
      <Center>
        <Mesh name="Intro" rotation={rotation} scale={[2, 2, 2]}></Mesh>
      </Center>
      <Stars
        radius={starRadius}
        depth={50}
        count={starCount}
        factor={4}
        saturation={0}
        fade
        speed={starSpeed}
      />
    </Canvas>
  );
}
