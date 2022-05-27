import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import studio from "@theatre/studio";
export type DebuggerProps = {
  devMode: boolean;
};

function Debugger(devMode: DebuggerProps) {
  if (devMode) {
    studio.initialize();
  }
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
