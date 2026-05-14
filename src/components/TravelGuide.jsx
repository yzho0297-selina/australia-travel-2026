import { useMemo, useState } from "react";
import {
  Coffee,
  GraduationCap,
  Map,
  ShoppingBag,
  Sparkles,
  Waves
} from "lucide-react";
import { guideThemes } from "../data/tripData.js";

const iconMap = {
  Coffee,
  Waves,
  ShoppingBag,
  GraduationCap,
  Map
};

function TravelGuide() {
  const [activeTheme, setActiveTheme] = useState("All");
  const filters = ["All", ...guideThemes.map((theme) => theme.name)];
  const visibleThemes = useMemo(() => {
    if (activeTheme === "All") return guideThemes;
    return guideThemes.filter((theme) => theme.name === activeTheme);
  }, [activeTheme]);

  return (
    <section id="guide" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
              Travel Guide
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-navy sm:text-5xl">
              Pick a mood, then pick a place
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              按 Coffee、Beach、Shopping、University 和 City Walk 五个主题整理，朋友想看哪类就先看哪类。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveTheme(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTheme === filter
                    ? "bg-navy text-white shadow-soft"
                    : "border border-ink/10 bg-cream text-ink/70 hover:border-navy/20 hover:text-navy"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleThemes.map((theme) => {
            const Icon = iconMap[theme.icon] || Sparkles;

            return (
              <article
                key={theme.name}
                className="rounded-[8px] border border-ink/10 bg-cream/75 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[8px] ${theme.color}`}
                    >
                      <Icon size={23} />
                    </div>
                    <h3 className="text-2xl font-semibold text-ink">
                      {theme.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 min-h-14 text-sm leading-6 text-ink/70">
                  {theme.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {theme.places.map((place) => (
                    <span
                      key={place}
                      className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-sm font-medium text-ink/70"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TravelGuide;
