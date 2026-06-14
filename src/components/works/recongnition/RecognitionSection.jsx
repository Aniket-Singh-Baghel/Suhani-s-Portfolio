import { Award, Shirt, Star } from "lucide-react";

const recognitions = [
  {
    icon: Award,
    label: "Successfully Participated",
    title: "Fevicryl Workshop",
    year: "2025",
  },

  {
    icon: Shirt,
    label: "Academic Fashion Showcase",
    title: "Participant",
    year: "2024",
  },

  {
    icon: Star,
    label: "Certificate of Participation",
    title: "Design Workshop",
    year: "2024",
  },
];

const RecognitionSection = () => {
  return (
    <section className="bg-white -mt-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top Border */}

        <div className="border-t border-[#DDD4C7] pt-12">
          <div className="grid lg:grid-cols-[180px_1fr] gap-10">
            {/* Heading */}
            <div className="mb-4">
              <p className="uppercase tracking-[0.3em] text-xs text-[#7D8668]">
                Recognition
              </p>

              <h2 className="mt-4 font-serif text-5xl md:text-4xl text-[#3F4633]">
                Milestones
              </h2>
            </div>

            {/* Recognition Row */}

            <div className="grid md:grid-cols-3">
              {recognitions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`
                      flex
                      items-center
                      gap-6
                      px-6
                      py-4
                      ${
                        index !== recognitions.length - 1
                          ? "border-r border-[#DDD4C7]"
                          : ""
                      }
                    `}
                  >
                    {/* Icon */}

                    <Icon
                      size={52}
                      strokeWidth={1.2}
                      className="text-[#6B705C] shrink-0"
                    />

                    {/* Content */}

                    <div>
                      <p className="text-sm text-[#7D6F61]">{item.label}</p>

                      <h3 className="font-serif text-3xl text-[#2D2926] leading-tight">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[#6B705C]">{item.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
