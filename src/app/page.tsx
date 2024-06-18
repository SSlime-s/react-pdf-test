import dynamic from "next/dynamic";

const PDF = dynamic(() => import("@/features/pdf").then((mod) => mod.PDF), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PDF />
    </main>
  );
}
