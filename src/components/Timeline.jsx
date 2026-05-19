import {
  ChevronRight,
  Coffee,
  MapPin,
  Plane,
  ShoppingBag,
  Sparkles,
  Waves
} from "lucide-react";
import { useState } from "react";
import { itinerary } from "../data/tripData.js";

const editorialSerif =
  '"Abadi", "Abadi MT Condensed Light", "Abadi MT", "Aptos", "Arial", "Hannotate SC", "Yuanti SC", "Kaiti SC", "STKaiti", "KaiTi", "Noto Serif CJK SC", sans-serif';

const getPlaceImageUrl = (place) =>
  place.image ||
  `https://source.unsplash.com/featured/1600x900/?${encodeURIComponent(
    place.imageKeyword || place.name
  )}`;

const getFallbackImageUrl = (place) =>
  `https://placehold.co/1600x900/f3efe7/1f2937?text=${encodeURIComponent(
    place.name
  )}`;

const getMoodLine = (day) => {
  const city = day.city.includes("Sydney")
    ? "Sydney, Australia"
    : "Melbourne, Australia";
  return `${city} · Winter · ${day.tags.join(" · ")}`;
};

const getPlaceIcon = (place) => {
  const text = `${place.name} ${place.imageKeyword || ""}`.toLowerCase();

  if (text.includes("flight") || text.includes("airport") || text.includes("到达")) {
    return Plane;
  }
  if (text.includes("shopping") || text.includes("chadstone") || text.includes("myer")) {
    return ShoppingBag;
  }
  if (text.includes("coffee") || text.includes("cafe") || text.includes("brunch")) {
    return Coffee;
  }
  if (text.includes("beach") || text.includes("bay") || text.includes("coast")) {
    return Waves;
  }
  return MapPin;
};

function PlaceButton({ place, index, isActive, onClick }) {
  const Icon = getPlaceIcon(place);
  const number = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all duration-300 md:px-5 ${
        isActive
          ? "bg-gradient-to-r from-[#FCAEC1]/95 via-[#D9B6EE]/95 to-[#ADD9F3]/95 text-[#4F5373] shadow-[0_18px_45px_rgba(106,74,140,0.26)]"
          : "border border-white/45 bg-white/30 text-[#4F5373] shadow-sm backdrop-blur-xl hover:translate-x-1 hover:bg-white/45 hover:shadow-[0_16px_38px_rgba(106,74,140,0.18)]"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold ${
          isActive ? "bg-white/35 text-[#4F5373]" : "bg-white/45 text-[#7A7693]"
        }`}
      >
        {number}
      </span>

      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          isActive ? "bg-white/30 text-[#4F5373]" : "bg-[#ADD9F3]/45 text-[#4F5373]"
        }`}
      >
        <Icon size={18} />
      </span>

      <span className="min-w-0 flex-1 text-base font-semibold leading-6 md:text-lg md:leading-7">
        {place.name}
      </span>

      <ChevronRight
        size={20}
        className={`shrink-0 transition duration-300 ${
          isActive
            ? "text-[#4F5373]"
            : "text-[#4F5373]/40 group-hover:translate-x-1 group-hover:text-[#7A7693]"
        }`}
      />
    </button>
  );
}

function PlaceDetailPanel({ place }) {
  return (
    <aside className="dream-glass-card rounded-[32px] p-4 md:p-5">
      <div className="group h-[260px] overflow-hidden rounded-3xl bg-[#ADD9F3]/40 md:h-[320px]">
        <img
          src={getPlaceImageUrl(place)}
          alt=""
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = getFallbackImageUrl(place);
          }}
        />
      </div>

      <div className="px-2 pb-2 pt-6 md:px-3 md:pb-3 md:pt-7">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/45 px-4 py-2 text-sm font-semibold text-[#4F5373]">
          <MapPin size={15} />
          {place.city}
        </div>

        <h4 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-[#4F5373] md:text-4xl">
          {place.name}
        </h4>
        <p className="mt-4 text-base leading-7 text-[#5F5A7A] md:text-lg md:leading-8">
          {place.description}
        </p>

        <div className="mt-6 rounded-2xl bg-white/35 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#7A7693]">
            <Sparkles size={17} />
            推荐理由 / 打卡重点
          </div>
          <p className="mt-3 text-base leading-7 text-[#5F5A7A]">
            {place.highlight}
          </p>
        </div>
      </div>
    </aside>
  );
}

function DayCard({ day }) {
  const [selectedName, setSelectedName] = useState(day.places[0]?.name);
  const selectedPlace =
    day.places.find((place) => place.name === selectedName) || day.places[0];

  return (
    <article className="dream-glass-card w-full rounded-[32px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(106,74,140,0.24)] md:p-8 lg:p-10">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-lg font-medium uppercase tracking-[0.28em] text-[#7A7693] md:text-xl">
              {day.day.replace("Day", "DAY")} · {day.date}
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/40 px-3 py-1.5 text-sm font-semibold text-[#4F5373] shadow-sm">
              <MapPin size={14} />
              {day.city}
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-[#4F5373] md:text-4xl">
            {day.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-[#5F5A7A] md:text-lg md:leading-8">
            {getMoodLine(day)}
          </p>

          <div className="mt-8 space-y-4">
            {day.places.map((place, index) => (
              <PlaceButton
                key={place.name}
                place={place}
                index={index}
                isActive={place.name === selectedPlace.name}
                onClick={() => setSelectedName(place.name)}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <PlaceDetailPanel place={selectedPlace} />
        </div>
      </div>
    </article>
  );
}

function Timeline() {
  return (
    <section
      id="timeline"
      className="pastel-page-bg relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32"
      style={{ fontFamily: editorialSerif }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7A7693]">
            Timeline
          </p>
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[#4F5373] md:text-7xl">
            每日行程一览
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F5A7A] md:text-xl md:leading-9">
            左侧快速切换每天的地点，右侧立即查看照片、介绍和打卡重点。
          </p>
        </div>

        <div className="mt-14 space-y-8 md:mt-20 md:space-y-10">
          {itinerary.map((day) => (
            <DayCard key={`${day.day}-${day.date}`} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
