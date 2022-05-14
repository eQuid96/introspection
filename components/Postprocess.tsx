import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";

export default function Postprocess() {
  const { bloomThreshold, bloomIntensity } = useControls({
    bloomThreshold: { value: 0.0, min: 0.0, max: 1.0 },
    bloomIntensity: { value: 0.26, min: 0.0, max: 1.0 },
  });
  return (
    <EffectComposer>
      <Bloom intensity={bloomIntensity} luminanceThreshold={bloomThreshold} />
    </EffectComposer>
  );
}
