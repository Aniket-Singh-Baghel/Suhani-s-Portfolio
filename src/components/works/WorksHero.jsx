import Nav from "../navbar/Nav";
import heroImage from "./works-hero.png";

const WorksHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion Illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Top Fade For Navbar */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-[250px]
          bg-gradient-to-b
          from-[#F7F1E8]/95
          via-[#F7F1E8]/50
          to-transparent
          z-[1]
        "
      />

      {/* Left Fade For Hero Content */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#F7F1E8]/85
          via-[#F7F1E8]/45
          to-transparent
          z-[1]
        "
      />

      {/* Soft Radial Glow */}
      <div
        className="
          absolute
          left-[-180px]
          top-1/2
          -translate-y-1/2
          w-[750px]
          h-[750px]
          rounded-full
          bg-[#F7F1E8]/60
          blur-[160px]
          z-[1]
        "
      />

      {/* Navbar */}
      <div className="relative z-20 px-6 md:px-10 lg:px-16">
        <Nav />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100vh-90px)] flex items-center -mt-4 lg:-mt-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="max-w-[620px]">
            <span
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-[#5A624A]
              "
            >
              Portfolio
            </span>

            <h1
              className="
                mt-4
                font-serif
                text-[#3F4633]
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-[9rem]
                leading-[0.9]
              "
            >
              WORKS
            </h1>

            <p
              className="
                mt-6
                text-[#5A624A]
                text-lg
                md:text-xl
                leading-relaxed
                max-w-[500px]
              "
            >
              Selected collections, illustrations and creative explorations
              reflecting a journey through fashion, craftsmanship and visual
              storytelling.
            </p>

            {/* Stats */}
            <div className="flex gap-10 md:gap-16 mt-12">
              <div>
                <h3
                  className="
                    font-serif
                    text-3xl
                    md:text-4xl
                    text-[#3F4633]
                  "
                >
                  04
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#7D8668]
                  "
                >
                  Collections
                </p>
              </div>

              <div>
                <h3
                  className="
                    font-serif
                    text-3xl
                    md:text-4xl
                    text-[#3F4633]
                  "
                >
                  12+
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#7D8668]
                  "
                >
                  Projects
                </p>
              </div>

              <div>
                <h3
                  className="
                    font-serif
                    text-3xl
                    md:text-4xl
                    text-[#3F4633]
                  "
                >
                  4
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#7D8668]
                  "
                >
                  Years
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-2 lg:mt-12">
              <p
                className="
                font-serif
                italic
                text-[#9BB082]
                text-lg
                md:text-3xl
                mt-16
                lg:mt-0
              "
              >
                Scroll Down for the Skills ↓
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksHero;
