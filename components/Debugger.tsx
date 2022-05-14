import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";

export default function Debugger() {
  return (
    <>
      {isDev() ? (
        <OrbitControls makeDefault></OrbitControls>
      ) : (
        <Leva hidden={true}></Leva>
      )}
    </>
  );
}

export function isDev() {
  return (
    process.env.NODE_ENV === "development" ||
    process.env.VERCEL_ENV === "preview"
  );
}
