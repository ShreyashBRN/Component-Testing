// export function BackgroundMesh() {
//   return (
//     <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
//       <div className="absolute -top-1/4 -left-1/4 h-[900px] w-[900px] rounded-full bg-blue-600 blur-[160px] mix-blend-screen opacity-70" />
//       <div className="absolute -top-[5%] left-[30%] h-[700px] w-[700px] rounded-full bg-yellow-300 blur-[170px] mix-blend-screen opacity-40" />
//       <div className="absolute top-[10%] -left-[10%] h-[800px] w-[800px] rounded-full bg-purple-700 blur-[160px] mix-blend-screen opacity-60" />
//       <div className="absolute -bottom-1/4 -right-1/4 h-[900px] w-[900px] rounded-full bg-cyan-400 blur-[160px] mix-blend-screen opacity-70" />
//       <div className="absolute bottom-[10%] right-[20%] h-[600px] w-[600px] rounded-full bg-sky-500 blur-[160px] mix-blend-screen opacity-50" />
//     </div>
//   );
// }


// export function BackgroundMesh() {
//   return (
//     <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
//       <div className="absolute -top-1/4 -left-1/4 h-[900px] w-[900px] rounded-full bg-blue-600 blur-[160px] mix-blend-screen opacity-70" />
//       <div className="absolute -top-[5%] left-[30%] h-[700px] w-[700px] rounded-full bg-yellow-300 blur-[170px] mix-blend-screen opacity-40" />
//       <div className="absolute top-[10%] -left-[10%] h-[800px] w-[800px] rounded-full bg-purple-700 blur-[160px] mix-blend-screen opacity-60" />
//       <div className="absolute -bottom-1/4 -right-1/4 h-[900px] w-[900px] rounded-full bg-cyan-400 blur-[160px] mix-blend-screen opacity-70" />
//       <div className="absolute bottom-[10%] right-[20%] h-[600px] w-[600px] rounded-full bg-sky-500 blur-[160px] mix-blend-screen opacity-50" />
//     </div>
//   );
// }


// export function BackgroundMesh() {
//   return (
//     <div className="absolute inset-0 -z-10 bg-black overflow-hidden [container-type:size]">
//       <div className="absolute -top-1/4 -left-1/4 h-[62cqw] w-[62cqw] rounded-full bg-blue-600 blur-[11cqw] mix-blend-screen opacity-70" />
//       <div className="absolute -top-[5%] left-[30%] h-[48cqw] w-[48cqw] rounded-full bg-yellow-300 blur-[12cqw] mix-blend-screen opacity-40" />
//       <div className="absolute top-[10%] -left-[10%] h-[55cqw] w-[55cqw] rounded-full bg-purple-700 blur-[11cqw] mix-blend-screen opacity-60" />
//       <div className="absolute -bottom-1/4 -right-1/4 h-[62cqw] w-[62cqw] rounded-full bg-cyan-400 blur-[11cqw] mix-blend-screen opacity-70" />
//       <div className="absolute bottom-[10%] right-[20%] h-[42cqw] w-[42cqw] rounded-full bg-sky-500 blur-[11cqw] mix-blend-screen opacity-50" />
//     </div>
//   );
// }




export function BackgroundMesh() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        backgroundColor: "#3d3cc0",
        backgroundImage: [
          // pale lime glow, top center
          "radial-gradient(ellipse 24% 40% at 52% 0%, #cddcaa 0%, #cddcaa00 100%)",
          // teal halo around the glow
          "radial-gradient(ellipse 45% 55% at 50% 0%, #4fa9c9 0%, #4fa9c900 100%)",
          // top-left royal blue
          "radial-gradient(ellipse 55% 65% at 5% 5%, #2d63dc 0%, #2d63dc00 100%)",
          // top-right violet
          "radial-gradient(ellipse 40% 55% at 100% 0%, #4c38c4 0%, #4c38c400 100%)",
          // right-middle blue-violet
          "radial-gradient(ellipse 30% 50% at 100% 45%, #3a4fd4 0%, #3a4fd400 100%)",
          // bottom-right cyan
          "radial-gradient(ellipse 38% 50% at 88% 100%, #5ab3d0 0%, #5ab3d000 100%)",
          // bottom-right teal-green accent
          "radial-gradient(ellipse 20% 35% at 72% 100%, #86c4bb 0%, #86c4bb00 100%)",
          // bottom-center violet
          "radial-gradient(ellipse 35% 45% at 45% 100%, #4a36c2 0%, #4a36c200 100%)",
          // bottom-left deep purple
          "radial-gradient(ellipse 45% 55% at 0% 100%, #24156b 0%, #24156b00 100%)",
          // left-middle purple
          "radial-gradient(ellipse 25% 40% at 0% 60%, #4a3cc0 0%, #4a3cc000 100%)",
        ].join(","),
      }}
    />
  );
}