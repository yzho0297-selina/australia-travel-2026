import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Timeline from "./components/Timeline.jsx";
import TravelGuide from "./components/TravelGuide.jsx";

const homeFont =
  '"Bradley Hand", "Bradley Hand ITC", "Comic Sans MS", "Hannotate SC", "Yuanti SC", "Kaiti SC", "STKaiti", "KaiTi", cursive';

const nonHomeFont =
  '"Abadi", "Abadi MT Condensed Light", "Abadi MT", "Aptos", "Arial", "Hannotate SC", "Yuanti SC", "Kaiti SC", "STKaiti", "KaiTi", sans-serif';

function App() {
  const pathname = window.location.pathname;
  const isGuidePage = pathname === "/guide";
  const isTimelinePage = pathname === "/timeline";
  const currentPage = isGuidePage
    ? "guide"
    : isTimelinePage
      ? "timeline"
      : "home";
  const isHomePage = pathname === "/" || pathname === "/home";

  return (
    <div
      className="min-h-screen bg-[#f9eef7] text-ink"
      style={{ fontFamily: isHomePage ? homeFont : nonHomeFont }}
    >
      {isHomePage ? null : <Navbar currentPage={currentPage} />}
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
