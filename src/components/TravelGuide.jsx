import {
  AlertCircle,
  CheckCircle,
  CreditCard,
  IdCard,
  Info,
  Luggage,
  MapPinned,
  Plane,
  Smartphone,
  Train
} from "lucide-react";

const arrivalSteps = [
  {
    title: "落地前：填入境卡",
    icon: IdCard,
    body: "在落地之前，空姐通常会发放入境卡。把它先填好，下飞机后通关会用到。如果有不确定的问题，可以先按真实情况填写，或者之后问工作人员。",
    note: "建议把护照、入境卡和笔放在随手能拿到的位置。",
    image: "",
    imageAlt: "入境卡示意图",
    placeholderLabel: "入境卡示意图"
  },
  {
    title: "SmartGate 打印黄色小票",
    icon: IdCard,
    body: "下飞机后跟着 Arrivals 方向走，找到 SmartGate 自助通关机器。把护照插入机器，机器会拍照。拍照时记得摘掉眼镜、帽子、口罩，刘海不要挡住脸。机器有中文界面，会问几个简单问题，按实际情况回答即可。一般情况下如果都没有需要申报的问题，可以全选否。",
    note: "完成后机器会打印一张黄色小票，一定要拿好，不要丢。",
    emphasis: true,
    image: "",
    imageAlt: "SmartGate 机器示意图",
    placeholderLabel: "SmartGate 机器示意图"
  },
  {
    title: "刷脸过关",
    icon: CheckCircle,
    body: "拿到黄色小票后，往 ePassport 通道走。到闸机前看摄像头刷脸，记得摘掉口罩、帽子和眼镜。听到“嘀”一声后闸机会打开，就可以通过。",
    note: "如果刷脸失败，不用慌，去旁边人工通道排队即可。",
    image: "",
    imageAlt: "ePassport 闸机示意图",
    placeholderLabel: "ePassport 闸机示意图"
  },
  {
    title: "取行李",
    icon: Luggage,
    body: "过关后跟着 Baggage Claim 方向走，看屏幕上自己航班对应的行李转盘号。机场推车通常是免费的，可以直接拿来用。建议提前在行李箱上做明显标记，避免拿错。",
    note: "如果行李迟迟没出来，先确认航班号和转盘号是否正确。",
    image: "",
    imageAlt: "行李转盘示意图",
    placeholderLabel: "行李转盘示意图"
  },
  {
    title: "交卡出关",
    icon: CheckCircle,
    body: "取完行李后，准备好入境卡和黄色小票。没有需要申报的物品就走绿色通道；有申报物品，或者不确定要不要申报，就走红色通道。排队过程中把两张纸交给工作人员，他会指引你后面往哪里走。如果被问问题，诚实回答即可；如果抽查行李，配合检查就好。",
    note: "出来之后就能看到我们～",
    emphasis: true,
    image: "",
    imageAlt: "红绿通道示意图",
    placeholderLabel: "红绿通道示意图"
  }
];

const transportCards = [
  {
    title: "SkyBus",
    icon: Train,
    body: "机场到市区可以坐 SkyBus，现场买票即可，价格大约 25 澳币一人。适合第一次来、行李多、不想折腾的人。"
  },
  {
    title: "Google Maps",
    icon: MapPinned,
    body: "在澳洲导航直接用 Google Maps 就够了。公交、火车、电车、步行路线都可以查。"
  },
  {
    title: "Myki 墨尔本公交卡",
    icon: CreditCard,
    body: "墨尔本使用 Myki，一张卡可以坐火车、电车和公交。墨尔本 CBD 市区内电车免费，公交车和火车收费。每日封顶大约 11 澳币。"
  },
  {
    title: "Opal 悉尼交通",
    icon: CreditCard,
    body: "悉尼使用 Opal 体系，可用于轻轨、地铁、火车和轮渡。每周封顶大约 50 澳币，到上限之后不再继续扣费。"
  }
];

const survivalCards = [
  {
    title: "电话卡",
    icon: Smartphone,
    body: "可以提前对比国际漫游流量包、随身 Wi-Fi 和澳洲本地电话卡。短期旅行如果只是日常导航和聊天，国际漫游或 eSIM 也可以；如果想更稳定，可以考虑本地电话卡。",
    className: "md:col-span-2"
  },
  {
    title: "支付方式",
    icon: CreditCard,
    body: "悉尼和墨尔本大部分地方都支持 Apple Pay，可以提前绑定 Visa 卡。现金也建议准备一些，部分中餐馆使用现金可能有折扣，而且没有银行卡手续费。"
  },
  {
    title: "小费和 surcharge",
    icon: Info,
    body: "澳洲没有强制小费文化，不需要像美国那样额外给小费。但周末或公共假期吃饭可能会有 surcharge，一般在 2%–10% 不等，属于正常情况。"
  },
  {
    title: "商店关门时间",
    icon: AlertCircle,
    body: "澳洲很多店关门比较早。墨尔本购物中心工作日通常晚上 7 点左右关门；悉尼 CBD 商场可能开到晚上 10 点左右。非 CBD 的街区商铺一般下午 5–6 点就会关门。",
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
  if (step.image) {
    return (
      <img
        src={step.image}
        alt={step.imageAlt}
        className="aspect-[4/3] h-full w-full rounded-2xl object-cover shadow-soft"
      />
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
        <div className="dream-glass-card grid gap-8 rounded-[32px] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A7693]">
              Travel Guide
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-normal text-[#4F5373] sm:text-6xl">
              落地澳洲之后怎么走？
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-[1.9] text-[#5F5A7A] sm:text-2xl">
              第一次来澳洲也不用慌，跟着步骤走就行。出来之后就能看到我们～
            </p>
          </div>

          <div className="flex items-center gap-3 lg:justify-self-end">
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/40 text-[#4F5373] shadow-sm">
              <Plane size={28} />
            </span>
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/40 text-[#7A7693] shadow-sm">
              <IdCard size={28} />
            </span>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Section 01" title="下飞机后通关流程" />

          <div className="mt-8 space-y-6">
            {arrivalSteps.map((step, index) => {
              const Icon = step.icon;

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
                          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/45 text-[#4F5373]">
                            <Icon size={21} />
                          </span>
                          <h4 className="mt-4 text-3xl font-semibold text-[#4F5373]">
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
            {transportCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="dream-glass-card rounded-[28px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(106,74,140,0.22)] sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/45 text-[#4F5373] shadow-sm">
                    <Icon size={21} />
                  </span>
                  <h4 className="mt-5 text-3xl font-semibold text-[#4F5373]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-lg leading-[1.9] text-[#5F5A7A]">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Section 03" title="📱 到澳洲后常用信息" />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {survivalCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className={`dream-glass-card rounded-[28px] p-5 sm:p-6 ${
                    card.className || ""
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/45 text-[#4F5373]">
                    <Icon size={21} />
                  </span>
                  <h4 className="mt-5 text-3xl font-semibold text-[#4F5373]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-lg leading-[1.9] text-[#5F5A7A]">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-[32px] bg-gradient-to-br from-[#FCAEC1]/70 via-[#B7A8D6]/75 to-[#ADD9F3]/75 p-6 text-[#4F5373] shadow-[0_28px_75px_rgba(106,74,140,0.22)] ring-1 ring-white/40 backdrop-blur-xl sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/35">
              <CheckCircle size={24} />
            </span>
            <div>
              <h3 className="text-4xl font-semibold">别紧张，真的不难</h3>
              <p className="mt-4 max-w-4xl text-lg leading-[1.9] text-[#5F5A7A]">
                机场流程看起来很多，但其实跟着 Arrivals、Baggage Claim 和 Exit 的指示走就可以。遇到不确定的问题就问工作人员，诚实回答即可。我们会在外面等你。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelGuide;
