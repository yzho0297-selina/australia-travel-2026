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
          ? "bg-navy text-white shadow-lift"
          : "border border-ink/10 bg-white/75 text-ink shadow-sm hover:translate-x-1 hover:border-clay/25 hover:bg-white hover:shadow-md"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold ${
          isActive ? "bg-white/20 text-white" : "bg-cream text-clay"
        }`}
      >
        {number}
      </span>

      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          isActive ? "bg-white/15 text-white" : "bg-mist/60 text-navy"
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
            ? "text-white"
            : "text-ink/30 group-hover:translate-x-1 group-hover:text-clay"
        }`}
      />
    </button>
  );
}

function PlaceDetailPanel({ place }) {
  return (
    <aside className="rounded-[32px] bg-white p-4 shadow-lift md:p-5">
      <div className="group h-[260px] overflow-hidden rounded-3xl bg-mist md:h-[320px]">
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
        <div className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-navy">
          <MapPin size={15} />
          {place.city}
        </div>

        <h4 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-ink md:text-4xl">
          {place.name}
        </h4>
        <p className="mt-4 text-base leading-7 text-ink/70 md:text-lg md:leading-8">
          {place.description}
        </p>

        <div className="mt-6 rounded-2xl bg-cream/90 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-clay">
            <Sparkles size={17} />
            推荐理由 / 打卡重点
          </div>
          <p className="mt-3 text-base leading-7 text-ink/75">
            {place.highlight}
          </p>
        </div>
      </div>
    </aside>
  );
}

function TravelTip({ tip }) {
  return (
    <div className="rounded-2xl bg-cream/80 p-5 text-ink/70">
      <p className="text-base font-semibold text-navy">旅行小贴士</p>
      <p className="mt-2 text-base leading-7">
        {tip || "点击左侧地点，可以快速查看介绍、照片和打卡重点。"}
      </p>
    </div>
  );
}

function DayCard({ day }) {
  const [selectedName, setSelectedName] = useState(day.places[0]?.name);
  const selectedPlace =
    day.places.find((place) => place.name === selectedName) || day.places[0];

  return (
    <article className="w-full rounded-[32px] bg-white/80 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:shadow-lift md:p-8 lg:p-10">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
              {day.day.replace("Day", "DAY")} · {day.date}
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-navy shadow-sm">
              <MapPin size={14} />
              {day.city}
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-ink md:text-4xl">
            {day.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-ink/65 md:text-lg md:leading-8">
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

          <div className="mt-6">
            <TravelTip tip={day.tip} />
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
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
      style={{
        background:
          "radial-gradient(circle at 12% 6%, rgba(198,129,93,0.14), transparent 30rem), radial-gradient(circle at 86% 18%, rgba(191,217,234,0.36), transparent 34rem), linear-gradient(180deg, #F7F1E8 0%, #FBF8F2 48%, #F7F1E8 100%)"
      }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
            Timeline
          </p>
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-navy md:text-7xl">
            Browse the trip day by day
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/68 md:text-xl md:leading-9">
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
