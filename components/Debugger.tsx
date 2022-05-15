import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";

export type DebuggerProps = {
  devMode: boolean;
};

function Debugger(devMode: DebuggerProps) {
  return (
    <>
      {devMode ? (
        <OrbitControls makeDefault></OrbitControls>
      ) : (
        <Leva hidden={true}></Leva>
      )}
    </>
  );
}

export default Debugger;
