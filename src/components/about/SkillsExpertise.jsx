import {
  Pencil,
  MessageSquare,
  Search,
  Lightbulb,
  Sparkles,
  Users,
  Palette,
  Briefcase,
} from "lucide-react";

import mannequinImage from "./mannequinImage.png";

const skills = [
  {
    title: "Fashion Illustration",
    icon: Pencil,
  },
  {
    title: "Fashion Communication",
    icon: MessageSquare,
  },
  {
    title: "Trend Research",
    icon: Search,
  },
  {
    title: "Creative Direction",
    icon: Lightbulb,
  },
  {
    title: "Editorial Styling",
    icon: Sparkles,
  },
  {
    title: "Team Collaboration",
    icon: Users,
  },
  {
    title: "Visual Merchandising",
    icon: Palette,
  },
  {
    title: "Fashion Management",
    icon: Briefcase,
  },
];

const SkillsExpertise = () => {
  return (
    <section className="bg-[#FFF5F5] overflow-hidden">
  <div className="grid lg:grid-cols-[42%_58%] min-h-[450px]">

     {/* RIGHT IMAGE */}
    <div className="relative h-[450px] lg:h-auto hidden lg:block  ">
      <img
        src={mannequinImage}
        alt="Fashion Studio"
        className="
          w-full
          h-full
          object-cover
        "
      />
    </div>


    {/* LEFT SIDE */}
    <div className="px-2 md:px-4 lg:px-6 py-8 lg:py-8 flex flex-col justify-center">

      <p
        className="
          uppercase
          tracking-[0.35em]
          text-[#7D8B64]
          text-xs
          md:text-sm
          font-semibold
          text-center
          mb-6
        "
      >
        Skills & Expertise
      </p>

      <div className="grid grid-cols-2 border border-[#C9D7AF]">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
                border-r
                border-b
                border-[#C9D7AF]
                h-[120px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              <Icon
                size={28}
                className="
                  text-[#8A9570]
                  mb-5
                "
              />

              <h3
                className="
                  text-[#232323]
                  text-[14px]
                  md:text-[16px]
                  leading-[1.6]
                  font-light
                  max-w-[200px]
                "
              >
                {skill.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
  );
};

export default SkillsExpertise;