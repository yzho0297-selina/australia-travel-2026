import { BookOpen, CalendarDays } from "lucide-react";
import homeBg from "../assets/home-background-Sydney-station-view.jpg";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-[-1.5rem] scale-105 bg-cover bg-center blur-[2px]"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundPosition: "center center"
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(183,168,214,0.34) 0%, rgba(252,174,193,0.28) 34%, rgba(173,217,243,0.24) 68%, rgba(255,255,255,0.76) 100%)"
        }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#FCD1DB]/95 via-[#FCD1DB]/55 to-transparent" />

      <div className="relative flex min-h-screen items-center justify-center px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-normal text-white drop-shadow-[0_8px_30px_rgba(95,56,127,0.5)] sm:text-7xl lg:text-8xl">
            Melbourne &amp; Sydney
            <span className="block">Winter Trip 2026</span>
          </h1>

          <div className="mt-12 flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            <a
              href="/timeline"
              className="group flex h-40 w-full max-w-[220px] flex-col items-center justify-center rounded-[2rem] bg-white/55 text-[#4F5373] shadow-[0_24px_70px_rgba(93,59,124,0.24)] ring-1 ring-white/60 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_rgba(93,59,124,0.34)] sm:w-[210px]"
            >
              <CalendarDays
                size={42}
                className="transition duration-300 group-hover:scale-105"
              />
              <span className="mt-5 text-2xl font-semibold">查看旅行</span>
            </a>

            <a
              href="/guide"
              className="group flex h-40 w-full max-w-[220px] flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#FCAEC1]/90 via-[#DDB8EE]/90 to-[#ADD9F3]/90 text-white shadow-[0_24px_70px_rgba(93,59,124,0.3)] ring-1 ring-white/45 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_rgba(93,59,124,0.4)] sm:w-[210px]"
            >
              <BookOpen
                size={42}
                className="transition duration-300 group-hover:scale-105"
              />
              <span className="mt-5 text-2xl font-semibold">查看攻略</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
