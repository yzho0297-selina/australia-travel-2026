import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Timeline from "./components/Timeline.jsx";
import TravelGuide from "./components/TravelGuide.jsx";

function App() {
  const pathname = window.location.pathname;
  const isGuidePage = pathname === "/guide";
  const isTimelinePage = pathname === "/timeline";
  const currentPage = isGuidePage
    ? "guide"
    : isTimelinePage
      ? "timeline"
      : "home";

  return (
    <div className="min-h-screen bg-[#f9eef7] text-ink">
      <Navbar currentPage={currentPage} />
      <main>
        {isGuidePage ? (
          <TravelGuide />
        ) : isTimelinePage ? (
          <Timeline />
        ) : (
          <Hero />
        )}
      </main>
      {currentPage === "home" ? null : (
        <footer className="border-t border-white/35 bg-white/20 px-6 py-10 text-center text-sm text-[#7A7693] backdrop-blur-xl">
          Made for our Australia Trip 2026
        </footer>
      )}
    </div>
  );
}

export default App;
