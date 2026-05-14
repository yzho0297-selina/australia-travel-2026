import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Timeline from "./components/Timeline.jsx";
import TravelGuide from "./components/TravelGuide.jsx";

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <TravelGuide />
      </main>
      <footer className="border-t border-ink/10 bg-white/55 px-6 py-10 text-center text-sm text-ink/60">
        Made for our Australia Trip 2026
      </footer>
    </div>
  );
}

export default App;
