import { ArrowDown, CalendarDays, Plane } from "lucide-react";
import { tripSummary } from "../data/tripData.js";

const heroImage =
  "https://images.unsplash.com/photo-1526958977630-bc61b30a2009?auto=format&fit=crop&w=2200&q=85";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/25 to-cream" />

      <div className="section-shell relative flex min-h-[calc(100vh-4rem)] flex-col justify-end pb-10 pt-16 sm:pb-14">
        <div className="max-w-4xl pb-8 text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-xl">
            <CalendarDays size={17} />
            26 Jun 2026 – 4 Jul 2026
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-7xl lg:text-8xl">
            Melbourne & Sydney Winter Trip 2026
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-2xl">
            City Walk · Coffee · Beach · Shopping · University
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-medium text-white/90 sm:text-base">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              <Plane size={17} />
              中国 → Melbourne → Sydney → 中国
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#timeline"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              View Timeline
              <ArrowDown size={18} />
            </a>
            <a
              href="#guide"
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/25"
            >
              Explore Travel Guide
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tripSummary.map((item) => (
            <div
              key={item.label}
              className="rounded-[8px] border border-white/45 bg-white/70 p-5 shadow-soft backdrop-blur-xl"
            >
              <p className="text-3xl font-semibold text-navy">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-ink/65">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
