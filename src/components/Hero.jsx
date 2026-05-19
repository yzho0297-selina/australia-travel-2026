import homeBg from "../assets/home-background-Sydney-station-view.jpg";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundPosition: "center center"
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-screen items-center justify-center px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-5xl flex-col items-center text-center">
          <h1
            className="max-w-5xl text-6xl font-light leading-[0.92] tracking-normal text-white drop-shadow-[0_8px_24px_rgba(49,37,70,0.42)] sm:text-8xl lg:text-9xl"
            style={{
              fontFamily:
                '"Bradley Hand", "Bradley Hand ITC", "Comic Sans MS", "Hannotate SC", "Yuanti SC", "Kaiti SC", "STKaiti", "KaiTi", cursive'
            }}
          >
            Melbourne &amp; Sydney
            <span className="block italic">trip in 2026</span>
          </h1>

          <div className="mt-12 flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            <a
              href="/timeline"
              className="group flex min-h-16 w-full max-w-[230px] items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-white/28 via-[#FCD1DB]/24 to-[#ADD9F3]/22 px-8 py-5 text-xl font-normal text-white shadow-[0_8px_32px_rgba(255,192,203,0.18),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(255,192,203,0.32),inset_0_1px_1px_rgba(255,255,255,0.35)] sm:w-[220px]"
            >
              每日旅行计划
            </a>

            <a
              href="/guide"
              className="group flex min-h-16 w-full max-w-[230px] items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-[#FCAEC1]/42 via-[#B7A8D6]/36 to-[#ADD9F3]/34 px-8 py-5 text-xl font-normal text-white shadow-[0_8px_32px_rgba(255,192,203,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_52px_rgba(183,168,214,0.36),inset_0_1px_1px_rgba(255,255,255,0.4)] sm:w-[220px]"
            >
              落地指南
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
