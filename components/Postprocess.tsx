import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
import { KernelSize } from "postprocessing";

export default function Postprocess() {
  const { bloomThreshold, bloomIntensity } = useControls({
    bloomThreshold: { value: 0.0, min: 0.0, max: 1.0 },
    bloomIntensity: { value: 0.55, min: 0.0, max: 1.0 },
  });
  return (
    <EffectComposer multisampling={8}>
      <Bloom
        kernelSize={KernelSize.HUGE}
        intensity={bloomIntensity}
        luminanceThreshold={bloomThreshold}
        luminanceSmoothing={0.4}
      />
    </EffectComposer>
  );
}
