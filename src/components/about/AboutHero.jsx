import portraitImage from "./portraitImage.png";
import Nav from "../navbar/Nav";

const AboutHero = () => {
  return (
    <section className="relative bg-[#F7F1E8] overflow-hidden min-h-screen">
      {/* Decorative Shape */}
      <div className="absolute top-0 left-0 w-[180px] h-[180px] lg:w-[260px] lg:h-[260px] bg-[#C6D9A6] opacity-20 rounded-br-full z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <Nav />

        <div className="flex flex-col lg:grid lg:grid-cols-[48%_52%] items-center min-h-[85vh] gap-20">
          {/* LEFT CONTENT */}
          <div className="w-full">
            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#9BB082]
              text-normal
              sm:text-xl
              font-semibold
              mb-4
            "
            >
              About
            </p>

            <h1
              className="
                        font-serif
                        text-[2rem]
                        sm:text-[3rem]
                        md:text-[3.5rem]
                        lg:text-[4rem]
                        xl:text-[3.5rem]
                        leading-[0.95]
                        tracking-[-0.04em]
                        text-[#232323]
                        max-w-[700px]
            "
            >
              Designing garments <br /> that exist between
              <br />
              <span className="italic text-[#9BB082]">
                art, emotion and
                identity.
              </span>
            </h1>

            {/* INTRO */}
            <div className="mt-10 flex gap-6">

              <div className="w-px bg-[#D8CDB8] shrink-0" />

              <p
                className="
                max-w-full
                text-[#232323]/75
                text-[15px]
                md:text-[17px]
                leading-8
              "
              >
                I am Suhani Singh, a fashion designer and visual storyteller exploring the intersection of craftsmanship, culture and contemporary fashion. My work draws inspiration from textiles, human emotions and the narratives woven into everyday experiences. Through design, research and creative exploration, I aim to create meaningful fashion stories that connect aesthetics with purpose.
              </p>

            </div>

            {/* SIGNATURE */}
            <div className="flex items-center gap-6 mt-2 lg:mt-6">

              <div
                className="
                w-12
                h-12
                rounded-full
                border
                border-[#D8CDB8]
                flex
                items-center
                justify-center
                font-serif
                text-xl
                text-[#9BB082]
              "
              >
                SS
              </div>

              <p
                className="
                font-serif
                italic
                text-[#9BB082]
                text-lg
                md:text-3xl
              "
              >
                Scroll Down for the Skills ↓
              </p>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end w-full -mt-18 lg:-mt-0">
            <div
              className="
              relative
              overflow-hidden
              rounded-t-[220px]
              sm:rounded-t-[260px]
              lg:rounded-t-[340px]
              w-full
              max-w-[560px]
            "
            >
              <img
                src={portraitImage}
                alt="Suhani Singh"
                className="
                w-full
                h-[420px]
                sm:h-[520px]
                md:h-[620px]
                lg:h-[580px]
                object-cover
                object-center
              "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
