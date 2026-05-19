import { useRef, useState } from "react";
import airportStep1 from "../uploaded-pictures/airport-step1.png";
import airportStep2 from "../uploaded-pictures/airport-step2.png";
import airportStep3 from "../uploaded-pictures/airport-step3.png";
import airportStep4 from "../uploaded-pictures/airport-step4.png";
import beforeLand from "../uploaded-pictures/before-land.png";
import claimLuggage from "../uploaded-pictures/claim-luggage.png";

const arrivalSteps = [
  {
    title: "落地前：填入境卡",
    body: "在落地之前，空姐通常会发放入境卡。需要自己带一只笔，把它按图中提示填好。",
    note: "建议把护照、入境卡放在随手能拿到的位置。",
    images: [beforeLand],
    imageAlt: "入境卡示意图",
    placeholderLabel: "入境卡示意图"
  },
  {
    title: "找到SmartGate 打印黄色小票",
    body: "下飞机后跟着 Arrivals 方向走，找到 SmartGate 自助通关机器（如图）。把护照打开插入机器，机器会拍照。拍照时记得摘掉眼镜、帽子、口罩，刘海不要挡住脸。机器有中文界面，会问几个简单问题，一般情况全选否。",
    note: "完成后机器会打印一张黄色小票。",
    emphasis: true,
    images: [airportStep1, airportStep2],
    imageAlt: "SmartGate 机器示意图",
    placeholderLabel: "SmartGate 机器示意图"
  },
  {
    title: "刷脸过关",
    body: "拿到黄色小票后，往 ePassport 走。到闸机前看摄像头刷脸，记得摘掉口罩、帽子和眼镜。听到“嘀”一声后闸机打开即可通过。",
    note: "到这已经成功完成最难的部分！如果遇到问题去闸机右手边人工通道。",
    images: [airportStep3],
    imageAlt: "ePassport 闸机示意图",
    placeholderLabel: "ePassport 闸机示意图"
  },
  {
    title: "取行李",
    body: "过关后跟着 Baggage Claim 方向走，看屏幕上自己航班对应的行李转盘号。机场推车是免费的。建议提前在行李箱上做明显标记，避免拿错。",
    note: "如果行李迟迟没出来，记得查看是否行李转盘是否更换。",
    images: [claimLuggage],
    imageAlt: "行李转盘示意图",
    placeholderLabel: "行李转盘示意图"
  },
  {
    title: "交卡出关",
    body: "取完行李后，准备好入境卡和黄色小票。没有需要申报的物品就走绿色通道；有申报物品，或者不确定要不要申报，就走红色通道。排队过程中把两张纸交给工作人员，他会指引你后面往哪里走。如果被问问题，诚实回答即可；如果抽查行李，配合检查就好。",
    note: "到这里就完成了最后一步！出来就可以看到大大的MELBOURNE",
    emphasis: true,
    images: [airportStep4],
    imageAlt: "红绿通道示意图",
    placeholderLabel: "红绿通道示意图"
  }
];

const transportCards = [
  {
    title: "SkyBus",
    body: "机场到市区可以坐 SkyBus，现场买票即可，价格大约 25 澳币一人。"
  },
  {
    title: "Google Maps",
    body: "在澳洲导航用 Google Map。"
  },
  {
    title: "Myki 墨尔本公交卡",
    body: "墨尔本使用 Myki，一张卡可以坐火车、电车和公交。墨尔本 CBD 市区内电车免费，公交车和火车收费。每日封顶大约 11 澳币。"
  },
  {
    title: "Opal 悉尼交通",
    body: "悉尼使用 Opal ，可用于轻轨、地铁、火车和轮渡。每周封顶大约 50 澳币，到上限之后不再继续扣费。"
  }
];

const survivalCards = [
  {
    title: "电话卡",
    body: "短期旅行如果只是日常导航和聊天，国际漫游或 eSIM 也可以；如果想更稳定，可以考虑本地电话卡。",
    className: "md:col-span-2"
  },
  {
    title: "支付方式",
    body: "Apple Pay，可以提前绑定 Visa 卡。现金也建议准备一些，部分中餐馆使用现金可能有折扣，而且没有银行卡手续费。"
  },
  {
    title: "小费和 surcharge",
    body: "澳洲没有强制小费文化，但周末或公共假期吃饭可能会有 surcharge，一般在 2%–10% 不等。"
  },
  {
    title: "商店关门时间",
    body: "墨尔本购物中心工作日通常晚上 7 点左右关门；悉尼 CBD 商场可能开到晚上 10 点左右。非 CBD 的街区商铺一般下午 5–6 点就会关门。",
    className: "md:col-span-2"
  }
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A7693]">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-4xl font-semibold tracking-normal text-[#4F5373] sm:text-5xl">
        {title}
      </h3>
      {description ? (
        <p className="mt-4 text-lg leading-[1.9] text-[#5F5A7A]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function StepVisual({ step }) {
  const images = step.images || (step.image ? [step.image] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const pinchDistanceRef = useRef(null);
  const pinchScaleRef = useRef(1);
  const hasMultipleImages = images.length > 1;

  const resetZoom = () => {
    setImageScale(1);
    pinchDistanceRef.current = null;
    pinchScaleRef.current = 1;
  };

  const getTouchDistance = (touches) => {
    const [firstTouch, secondTouch] = touches;
    return Math.hypot(
      secondTouch.clientX - firstTouch.clientX,
      secondTouch.clientY - firstTouch.clientY
    );
  };

  const handleFullscreenClose = () => {
    setIsFullscreenOpen(false);
    resetZoom();
  };

  const handleFullscreenOpen = () => {
    resetZoom();
    setIsFullscreenOpen(true);
  };

  const handleTouchStart = (event) => {
    if (event.touches.length !== 2) return;
    pinchDistanceRef.current = getTouchDistance(event.touches);
    pinchScaleRef.current = imageScale;
  };

  const handleTouchMove = (event) => {
    if (event.touches.length !== 2 || !pinchDistanceRef.current) return;
    event.preventDefault();
    const nextDistance = getTouchDistance(event.touches);
    const nextScale =
      pinchScaleRef.current * (nextDistance / pinchDistanceRef.current);
    setImageScale(Math.min(Math.max(nextScale, 1), 4));
  };

  const handleTouchEnd = () => {
    pinchDistanceRef.current = null;
    pinchScaleRef.current = imageScale;
  };

  const goToPreviousImage = (event) => {
    event?.stopPropagation();
    resetZoom();
    setCurrentImageIndex((index) =>
      index === 0 ? images.length - 1 : index - 1
    );
  };

  const goToNextImage = (event) => {
    event?.stopPropagation();
    resetZoom();
    setCurrentImageIndex((index) =>
      index === images.length - 1 ? 0 : index + 1
    );
  };

  if (images.length > 0) {
    return (
      <>
        <div className="relative flex w-full items-center justify-center">
          <button
            type="button"
            onClick={handleFullscreenOpen}
            className="flex w-full cursor-zoom-in items-center justify-center"
            aria-label={`全屏查看${step.imageAlt}`}
          >
            <img
              src={images[currentImageIndex]}
              alt={`${step.imageAlt} ${currentImageIndex + 1}`}
              className="h-auto w-full rounded-2xl object-contain shadow-soft"
            />
          </button>

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={goToPreviousImage}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/65 text-2xl leading-none text-[#4F5373] shadow-sm backdrop-blur-xl transition hover:bg-white/85"
                aria-label="上一张图片"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/65 text-2xl leading-none text-[#4F5373] shadow-sm backdrop-blur-xl transition hover:bg-white/85"
                aria-label="下一张图片"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/45 px-3 py-2 backdrop-blur-xl">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      resetZoom();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === currentImageIndex
                        ? "bg-[#4F5373]"
                        : "bg-white/70"
                    }`}
                    aria-label={`查看第 ${index + 1} 张图片`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        {isFullscreenOpen ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2f2942]/80 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${step.imageAlt} 全屏预览`}
            onClick={handleFullscreenClose}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "none" }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-2xl leading-none text-[#4F5373] shadow-soft backdrop-blur-xl transition hover:bg-white"
              onClick={handleFullscreenClose}
              aria-label="关闭全屏图片"
            >
              ×
            </button>

            {hasMultipleImages ? (
              <button
                type="button"
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/65 text-3xl leading-none text-[#4F5373] shadow-soft backdrop-blur-xl transition hover:bg-white"
                aria-label="上一张图片"
              >
                ‹
              </button>
            ) : null}

            <img
              src={images[currentImageIndex]}
              alt={`${step.imageAlt} ${currentImageIndex + 1}`}
              className="max-h-[92vh] max-w-[92vw] object-contain shadow-[0_28px_90px_rgba(0,0,0,0.28)] transition-transform duration-150"
              onClick={(event) => event.stopPropagation()}
              onDoubleClick={(event) => {
                event.stopPropagation();
                resetZoom();
              }}
              style={{
                transform: `scale(${imageScale})`,
                transformOrigin: "center center"
              }}
            />

            {hasMultipleImages ? (
              <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/65 text-3xl leading-none text-[#4F5373] shadow-soft backdrop-blur-xl transition hover:bg-white"
                aria-label="下一张图片"
              >
                ›
              </button>
            ) : null}

            {hasMultipleImages ? (
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/45 px-3 py-2 backdrop-blur-xl">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      resetZoom();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white/45"
                    }`}
                    aria-label={`查看第 ${index + 1} 张图片`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </>
    );
  }

  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-[#FCAEC1]/45 via-white/45 to-[#ADD9F3]/55 p-6 text-center shadow-soft ring-1 ring-white/35">
      <span className="max-w-[12rem] text-xl font-semibold leading-relaxed text-[#4F5373]/80">
        {step.placeholderLabel}
      </span>
    </div>
  );
}

function TravelGuide() {
  return (
    <section
      id="guide"
      className="pastel-page-bg pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="dream-glass-card rounded-[32px] p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A7693]">
              Travel Guide
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-normal text-[#4F5373] sm:text-6xl">
              你会用得上的攻略
            </h2>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Section 01" title="下飞机后通关流程" />

          <div className="mt-8 space-y-6">
            {arrivalSteps.map((step, index) => {
              return (
                <article
                  key={step.title}
                  className="dream-glass-card rounded-[32px] p-5 sm:p-6 lg:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.9fr)] lg:items-center lg:gap-8">
                    <div>
                      <div className="flex items-start gap-4">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FCAEC1] via-[#D9B6EE] to-[#ADD9F3] text-base font-semibold text-[#4F5373] shadow-soft">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-3xl font-semibold text-[#4F5373]">
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      <p className="mt-5 text-lg leading-[1.9] text-[#5F5A7A]">
                        {step.body}
                      </p>

                      <div
                        className={`mt-5 rounded-2xl p-5 text-lg leading-[1.9] ${
                          step.emphasis
                            ? "bg-[#FCAEC1]/28 text-[#4F5373]"
                            : "bg-[#ADD9F3]/30 text-[#5F5A7A]"
                        }`}
                      >
                        {step.note}
                      </div>
                    </div>

                    <StepVisual step={step} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Section 02" title="🚆 从机场到市区" />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {transportCards.map((card) => (
                <article
                  key={card.title}
                  className="dream-glass-card rounded-[28px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(106,74,140,0.22)] sm:p-6"
                >
                  <h4 className="text-3xl font-semibold text-[#4F5373]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-lg leading-[1.9] text-[#5F5A7A]">
                    {card.body}
                  </p>
                </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Section 03" title="📱 到澳洲后常用信息" />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {survivalCards.map((card) => (
                <article
                  key={card.title}
                  className={`dream-glass-card rounded-[28px] p-5 sm:p-6 ${
                    card.className || ""
                  }`}
                >
                  <h4 className="text-3xl font-semibold text-[#4F5373]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-lg leading-[1.9] text-[#5F5A7A]">
                    {card.body}
                  </p>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelGuide;
