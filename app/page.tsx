import { BackgroundMesh } from "@/components/background-mesh";
import { Buttons, type VariantEntry } from "@/components/buttons";

const variants: VariantEntry[] = [
  { variant: "letters", name: "1. Staggered Letter Lift" },
  { variant: "liquid", name: "2. Single Liquid Bubble" },
  { variant: "magnetic", name: "3. Magnetic" },
  { variant: "compression", name: "4. Cursor Compression" },
];

// // Canvas = the bg box itself
// const canvasWidth = "1600px";
// const canvasHeight = "839px";

// // Preview box, independent of canvas size
// const boxWidth = "1152px";
// const boxHeight = "600px";

// Canvas = the bg box itself
const canvasWidth = "700px";
const canvasHeight = "439px";

// Preview box, independent of canvas size
const boxWidth = "602px";
const boxHeight = "380px";

export default function PreviewPage() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-auto">
      <div
        className="relative"
        style={{ width: canvasWidth, height: canvasHeight, maxWidth: "100%" }}
      >
        <BackgroundMesh />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            // className="rounded-3xl border border-white/10 bg-black/80 p-8 backdrop-blur-xl flex items-center justify-center"
            className="rounded-3xl border border-white/10 bg-white p-8 backdrop-blur-xl flex items-center justify-center"
            style={{ width: boxWidth, height: boxHeight, maxWidth: "100%" }}
          >
            <Buttons variants={variants} />
          </div>
        </div>
      </div>
    </main>
  );
}