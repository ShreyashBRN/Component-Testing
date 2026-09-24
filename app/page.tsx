"use client";
import { BackgroundMesh } from "@/components/background-mesh";
// import { Buttons, type VariantEntry } from "@/components/buttons";
import {
  LiquidScrollProgress,
  type LiquidScrollProgressSection,
} from "@/components/liquid-scroll-progress";
import { JellyToolbar, type JellyToolbarItem } from "@/components/jelly-toolbar";
import {
      MessageSquare,
      Inbox,
      Settings,
      Eye,
      Send,
      Menu as MenuIcon,
    } from "lucide-react";
    import Pagination, { type PaginationVariant } from "@/components/pagination";
    // import { Buttons, type VariantEntry } from "@/components/buttons";
    // import OtpShowcase, { OtpInput } from "@/components/otp-input"
    import { OtpInput, type OtpVariant } from "@/components/otp-input";

    import {
  ElasticDropdown,
  type ElasticDropdownOption,
  UserIcon,
  UserFilledIcon,
  BriefcaseIcon,
  BriefcaseFilledIcon,
  PaletteIcon,
  PaletteFilledIcon,
  CodeIcon,
  CodeFilledIcon,
  FinanceIcon,
  FinanceFilledIcon,
} from "@/components/elastic-dropdown"

import { useState } from "react";
import { DragDropReorder } from "@/components/drag-drop-reorder";
import type { ReorderItem } from "@/components/drag-drop-reorder";
import { Image, Code2, TerminalSquare, CloudUpload, RefreshCw } from "lucide-react";

// const variants: VariantEntry[] = [
//   { variant: "letters", name: "1. Staggered Letter Lift" },
//   { variant: "liquid", name: "2. Single Liquid Bubble" },
//   { variant: "magnetic", name: "3. Magnetic" },
//   { variant: "compression", name: "4. Cursor Compression" },
// ];

const sections: LiquidScrollProgressSection[] = [
  { title: "Introduction" },
  { title: "Implementation" },
  { title: "Customization" },
  { title: "Usage" },
];

const items: JellyToolbarItem[] = [
      { label: "Chat", icon: MessageSquare, shortcut: "C" },
      { label: "Inbox", icon: Inbox, shortcut: "I" },
      { label: "Settings", icon: Settings, shortcut: "S" },
      { label: "Preview", icon: Eye, shortcut: "P" },
      { label: "Send", icon: Send, shortcut: "E" },
      { label: "Menu", icon: MenuIcon, shortcut: "M" },
    ];

    // const variants: PaginationVariant[] = ["pills", "outline", "compact", "input"];

//     const variants: VariantEntry[] = [
//   { variant: "letters", name: "Staggered Letter Lift" },
//   { variant: "liquid", name: "Single Liquid Bubble" },
//   { variant: "magnetic", name: "Magnetic" },
//   { variant: "compression", name: "Cursor Compression" },
//   // remove or reorder any entry above to change what the grid shows
// ];


const variants: OtpVariant[] = ["classic", "underline", "pill", "filled"];

const options: ElasticDropdownOption[] = [
  { value: "personal", label: "Personal", icon: UserIcon, filledIcon: UserFilledIcon },
  { value: "work", label: "Work", icon: BriefcaseIcon, filledIcon: BriefcaseFilledIcon },
  { value: "design", label: "Design", icon: PaletteIcon, filledIcon: PaletteFilledIcon },
  { value: "development", label: "Development", icon: CodeIcon, filledIcon: CodeFilledIcon },
  { value: "finance", label: "Finance", icon: FinanceIcon, filledIcon: FinanceFilledIcon },
];


const initialItems: ReorderItem[] = [
  { id: "design", title: "Design", description: "Create beautiful experiences", icon: Image, color: "pink" },
  { id: "develop", title: "Develop", description: "Build with modern tools", icon: Code2, color: "blue" },
  { id: "test", title: "Test", description: "Ensure everything works", icon: TerminalSquare, color: "neutral" },
  { id: "deploy", title: "Deploy", description: "Launch to the world", icon: CloudUpload, color: "violet" },
  { id: "iterate", title: "Iterate", description: "Make it better", icon: RefreshCw, color: "orange" },
];




// // Canvas = the bg box itself
// const canvasWidth = "1600px";
// const canvasHeight = "839px";

// // Preview box, independent of canvas size
// const boxWidth = "1152px";
// const boxHeight = "600px";

// Canvas = the bg box itself
const canvasWidth = "1300px";
const canvasHeight = "839px";

// Preview box, independent of canvas size
const boxWidth = "1152px";
const boxHeight = "780px";

// export default function PreviewPage() {
//   return (
//     <main className="flex min-h-screen items-center justify-center overflow-auto">
//       <div
//         className="relative"
//         style={{ width: canvasWidth, height: canvasHeight, maxWidth: "100%" }}
//       >
//         <BackgroundMesh />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             // className="rounded-3xl border border-white/10 bg-black/80 p-8 backdrop-blur-xl flex items-center justify-center"
//             className="rounded-3xl border border-white/10 bg-white p-8 backdrop-blur-xl flex items-center justify-center"
//             style={{ width: boxWidth, height: boxHeight, maxWidth: "100%" }}
//           >
//             {/* <Buttons variants={variants} /> */}
//             {/* <LiquidScrollProgress sections={sections} />; */}
//             {/* <JellyToolbar items={items} />; */}
//             {/* <Pagination variants={variants} />; */}
//             {/* <OtpInput variants={variants} />; */}
//             {/* <ElasticDropdown placeholder="Project" options={options} /> */}
//           </div>
//         </div>
//       </div>
//     </main>
//   );


// }

export default function DragDropReorderPreview() {
  const [items, setItems] = useState<ReorderItem[]>(initialItems);
 
  return (
    <div className="flex w-full min-h-screen items-center justify-center p-4 ">
  <DragDropReorder items={items} onReorder={setItems} />
</div>
  );
}