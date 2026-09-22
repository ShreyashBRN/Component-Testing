"use client";
import { BackgroundMesh } from "@/components/background-mesh";
import { Buttons, type VariantEntry } from "@/components/buttons";
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

const variants: VariantEntry[] = [
  { variant: "letters", name: "1. Staggered Letter Lift" },
  { variant: "liquid", name: "2. Single Liquid Bubble" },
  { variant: "magnetic", name: "3. Magnetic" },
  { variant: "compression", name: "4. Cursor Compression" },
];

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

// // Canvas = the bg box itself
// const canvasWidth = "1600px";
// const canvasHeight = "839px";

// // Preview box, independent of canvas size
// const boxWidth = "1152px";
// const boxHeight = "600px";

// Canvas = the bg box itself
const canvasWidth = "1000px";
const canvasHeight = "739px";

// Preview box, independent of canvas size
const boxWidth = "952px";
const boxHeight = "680px";

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
            {/* <Buttons variants={variants} /> */}
            {/* <LiquidScrollProgress sections={sections} />; */}
            <JellyToolbar items={items} />;
          </div>
        </div>
      </div>
    </main>
  );
}