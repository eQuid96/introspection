import { Center, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Intro from "./Intro";
import Postprocess from "./Postprocess";
import { useControls } from "leva";
import Debugger from "./Debugger";
export default function Scene({ props }: any) {
  const { starRadius, starCount, starSpeed } = useControls({
    starRadius: 90,
    starCount: 2500,
    starSpeed: 1,
  });
  return (
    <Canvas dpr={[1, 1.5]}>
      <Debugger devMode={props.devMode}></Debugger>
      <color attach="background" args={["black"]}></color>
      <ambientLight />
      <Center>
        <Intro></Intro>
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
      <Postprocess />
    </Canvas>
  );
}
