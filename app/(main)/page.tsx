import MainSection from "@/components/home/MainSection";
import Panel, { MobilePanel } from "@/components/home/Panel";

export default function Home() {
  return (
    <div className="flex flex-1 justify-between overflow-hidden">
      {/* Mani Section */}
      <MainSection />

      {/* Panel for Dashboard */}
      <Panel />
      {/* for Mobile */}
      <MobilePanel />
    </div>
  );
}
