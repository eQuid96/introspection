import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";

export type DebuggerProps = {
  devMode: boolean;
};

function Debugger(devMode: DebuggerProps) {
  return (
    <>
      {devMode ? (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      ) : (
        <Leva hidden={true}></Leva>
      )}
    </>
  );
}

export default Debugger;
