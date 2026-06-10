import { PiPlantLight, PiSparkleLight } from "react-icons/pi";
import { GiSewingNeedle, GiFlowerPot } from "react-icons/gi";

const philosophy = [
  {
    title: "Story",
    icon: PiPlantLight,
    text: "Every collection begins with a story that deserves to be told.",
  },
  {
    title: "Craft",
    icon: GiSewingNeedle,
    text: "Rooted in craftsmanship, detail and thoughtful execution.",
  },
  {
    title: "Experiment",
    icon: PiSparkleLight,
    text: "Exploring new ideas, textures and creative possibilities.",
  },
  {
    title: "Expression",
    icon: GiFlowerPot,
    text: "Designing fashion that communicates identity and emotion.",
  },
];

const DesignPhilosophy = () => {
  return (
    <section className="py-12 border-t border-[#E5DAC8] bg-[#F7F1E8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#9BB082]
              text-sm
              font-semibold
            "
          >
            Design Philosophy
          </p>

          <div className="w-16 h-px bg-[#9BB082] mx-auto mt-5" />
        </div>

        {/* Philosophy Grid */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            mt-10
            border-t
            border-[#E5DAC8]
          "
        >
          {philosophy.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  text-center
                  px-4
                  py-6
                  border-b
                  lg:border-b-0
                  lg:border-r
                  border-[#E5DAC8]
                  flex
                  flex-col
                  items-center
                "
              >
                <Icon
                  size={42}
                  className="
                    text-[#9BB082]
                    mb-8
                  "
                />

                <h3
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    font-semibold
                    text-[#232323]
                    mb-5
                  "
                >
                  {item.title}
                </h3>

                <div className="w-8 h-px bg-[#D8CDB8] mb-6" />

                <p
                  className="
                    text-[#232323]/70
                    leading-8
                    max-w-[240px]
                  "
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DesignPhilosophy;