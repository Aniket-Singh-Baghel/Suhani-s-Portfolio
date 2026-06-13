import flower from "./flower.png";

export default function QuoteSection() {
  return (
    <section className="relative w-full h-[160px] bg-[#f5ebe1] overflow-hidden">
      {/* Right decorative shape */}
      <div className="absolute top-0 right-0 h-full w-[140px] lg:w-[220px] opacity-50">
        <svg
          viewBox="0 0 220 160"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="
              M220 0
              L220 160
              C205 135 190 110 175 95
              C155 75 125 65 95 65
              C60 65 35 40 35 0
              Z
            "
            fill="#9fb286"
          />
        </svg>
      </div>
      <div className="container -mt-10 lg:-mt-0 lg:px-32 h-full flex justify-between items-center relative">
        {/* Quote */}

        <div className="relative z-10 flex items-center h-full flex-1 ml-3 md:ml-0">
          <div className="flex gap-2 md:gap-3">
            <span className="text-[#b79d70] text-sm md:text-xl mt-1 shrink-0">
              ❝
            </span>

            <p
              className="
        text-[#9fb286]
        text-[13px]
        sm:text-[15px]
        md:text-3xl
        leading-tight
        md:leading-[1.3]
        font-bold
        font-serif
        max-w-[220px]
        sm:max-w-[280px]
        md:max-w-none
        italic
      "
            >
              Fashion is the art of <em>expressing</em> who we are without
              saying a word.
            </p>
          </div>
        </div>
        {/* Flower Card */}
        <div
          className="
          absolute
          right-28
          top-[105%]
          -translate-y-1/2
          z-20
          lg:-mr-10
         md:static
        md:translate-y-0
  "
        >
          <div className="bg-[#fdfaf5] md:p-0">
            <img
              src={flower}
              alt=""
              className="
        w-[120px]
        sm:w-[40px]
        md:w-[130px]
      "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
