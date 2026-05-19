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
import ImageWithOperaLoader from "./ImageWithOperaLoader.jsx";

const editorialSerif =
  '"Abadi", "Abadi MT Condensed Light", "Abadi MT", "Aptos", "Arial", "Hannotate SC", "Yuanti SC", "Kaiti SC", "STKaiti", "KaiTi", "Noto Serif CJK SC", sans-serif';

const placeImageQueries = {
  "12:00 到达墨尔本": "Melbourne airport arrivals terminal",
  "Check in（住在 City CBD）": "Melbourne CBD hotel city view",
  "Monash University Clayton Campus": "Monash University Clayton campus architecture",
  "Chadstone Shopping Centre": "Chadstone shopping centre Melbourne",
  "Yarra River / Southbank Dinner Walk": "Yarra River Southbank Melbourne night",
  "Melbourne Central": "Melbourne Central clock tower shopping",
  "Chinatown Melbourne": "Melbourne Chinatown street",
  "Flinders Street Station": "Flinders Street Station Melbourne",
  "圣保罗教堂": "St Pauls Cathedral Melbourne",
  "维多利亚州立图书馆": "State Library Victoria reading room",
  "皇家拱廊": "Royal Arcade Melbourne",
  "Myer购物商场": "Melbourne Bourke Street Mall department store",
  "David Jones购物商场": "Melbourne luxury department store",
  "St Kilda Beach Sunset": "St Kilda Beach Melbourne sunset",
  "St Kilda Pier Penguins": "St Kilda Pier penguins Melbourne",
  Fitzroy: "Fitzroy Melbourne street art cafes",
  "Brunswick Street": "Brunswick Street Fitzroy Melbourne",
  "Carlton Gardens": "Carlton Gardens Melbourne Royal Exhibition Building",
  "University of Melbourne": "University of Melbourne campus",
  "墨尔本周边小镇一日游": "Victoria Australia small town day trip",
  "小镇街区散步": "Australian small town main street",
  "小镇咖啡 / Brunch": "Australian cafe brunch",
  "自然风景 / Lookout": "Victoria Australia lookout nature view",
  "中午前往悉尼": "Melbourne to Sydney flight airplane window",
  "抵达悉尼并 Check in": "Sydney CBD hotel city view",
  "Sydney Harbour Bridge Night View": "Sydney Harbour Bridge night",
  "Sydney Opera House Night View": "Sydney Opera House night",
  "Sydney Opera House Interior Tour": "Sydney Opera House interior",
  "Hyde Park": "Hyde Park Sydney",
  "Royal Botanic Garden Sydney": "Royal Botanic Garden Sydney harbour view",
  "Queen Victoria Building": "Queen Victoria Building Sydney interior",
  "Town Hall": "Sydney Town Hall",
  "Sydney Chinatown": "Sydney Chinatown night",
  "悉尼周边小镇": "New South Wales coastal town",
  "徒步路线": "Sydney hiking trail nature",
  野餐: "Australia picnic park",
  "小镇自由活动": "New South Wales small town cafe street",
  "Ferry to Watsons Bay": "Sydney ferry harbour Watsons Bay",
  "Watsons Bay": "Watsons Bay Sydney",
  "Coastal Walk to Bondi": "Sydney coastal walk ocean cliffs",
  "Bondi Beach": "Bondi Beach Sydney",
  "Bondi Junction Dinner": "Bondi Junction Sydney restaurant",
  "早上 8:00 从悉尼离开澳大利亚": "Sydney airport departures",
  返回中国: "airplane window clouds flight"
};

const getPlaceImageQuery = (place) =>
  place.imageQuery ||
  placeImageQueries[place.name] ||
  place.imageKeyword ||
  place.name;

const getImageSeed = (value) =>
  Array.from(value).reduce((total, character) => total + character.charCodeAt(0), 0);

const getPlaceImageUrl = (place) =>
  place.image ||
  `https://source.unsplash.com/featured/1600x900/?${encodeURIComponent(
    getPlaceImageQuery(place)
  )}&sig=${getImageSeed(place.name)}`;

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
            ? "rotate-90 text-[#4F5373]"
            : "text-[#4F5373]/40 group-hover:translate-x-1 group-hover:text-[#7A7693]"
        }`}
      />
    </button>
  );
}

function PlaceExpansion({ place }) {
  return (
    <div className="rounded-[28px] py-2">
      <div className="group flex items-center justify-center overflow-visible rounded-3xl">
        <ImageWithOperaLoader
          src={getPlaceImageUrl(place)}
          alt={place.name}
          className="h-auto max-h-[72vh] max-w-full rounded-3xl object-contain shadow-[0_22px_58px_rgba(106,74,140,0.18)] transition duration-700 ease-out group-hover:scale-[1.01]"
          wrapperClassName="min-h-[240px] w-full items-center justify-center md:min-h-[360px]"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = getFallbackImageUrl(place);
          }}
        />
      </div>

      <div className="px-1 pb-1 pt-5 md:px-2 md:pt-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/45 px-4 py-2 text-sm font-semibold text-[#4F5373]">
          <MapPin size={15} />
          {place.city}
        </div>

        <h4 className="mt-4 text-2xl font-semibold leading-tight tracking-normal text-[#4F5373] md:text-3xl">
          {place.name}
        </h4>
        <p className="mt-3 text-base leading-7 text-[#5F5A7A] md:text-lg md:leading-8">
          {place.description}
        </p>

        <div className="mt-5 rounded-2xl bg-white/35 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#7A7693]">
            <Sparkles size={17} />
            推荐理由 / 打卡重点
          </div>
          <p className="mt-3 text-base leading-7 text-[#5F5A7A]">
            {place.highlight}
          </p>
        </div>
      </div>
    </div>
  );
}

function DayCard({ day }) {
  const [expandedNames, setExpandedNames] = useState([]);

  return (
    <article className="dream-glass-card w-full rounded-[32px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(106,74,140,0.24)] md:p-8 lg:p-10">
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
        {day.places.map((place, index) => {
          const isExpanded = expandedNames.includes(place.name);

          return (
            <div key={place.name} className="space-y-4">
              <PlaceButton
                place={place}
                index={index}
                isActive={isExpanded}
                onClick={() =>
                  setExpandedNames((currentNames) => {
                    if (currentNames.includes(place.name)) {
                      return currentNames.filter((name) => name !== place.name);
                    }

                    return [...currentNames, place.name];
                  })
                }
              />

              {isExpanded ? <PlaceExpansion place={place} /> : null}
            </div>
          );
        })}
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
            点击任意行程即可在当前位置展开照片，再次点击即可收起。
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
