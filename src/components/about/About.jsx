import portraitImage from "./portraitImage.png";
import clothImage from "./clothImage.png";
import Nav from "../navbar/Nav";

const About = () => {
  return (
    <section className="bg-[#F7F1E8] overflow-hidden min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <Nav />

        <div className="grid lg:grid-cols-[42%_58%] items-center min-h-[88vh]">

          {/* LEFT SIDE */}
          <div className="pt-12 lg:pt-0">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#97A16D]
              text-xs
              font-semibold
              mb-10
            "
            >
              About
            </p>

            <h1
              className="
              font-serif
              text-[3rem]
              sm:text-[4rem]
              md:text-[5rem]
              lg:text-[5.8rem]
              xl:text-[6rem]
              leading-[0.95]
              text-[#232323]
            "
            >
              Designing garments
              <br />
              that exist between
              <br />

              <span className="italic text-[#9CA06A]">
                art, emotion and
                <br />
                identity.
              </span>
            </h1>

            <div className="flex items-center gap-6 mt-12">

              <div className="w-px h-24 bg-[#D9CFBD]" />

              <div
                className="
                w-20
                h-20
                rounded-full
                border
                border-[#D9CFBD]
                flex
                items-center
                justify-center
                text-[#9CA06A]
                font-serif
                text-xl
              "
              >
                SS
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
            mt-16
            lg:mt-0
            grid
            grid-cols-[78%_22%]
            items-start
          "
          >

            {/* PORTRAIT */}
            <div className="relative">

              <div
                className="
                overflow-hidden
                rounded-t-[350px]
              "
              >
                <img
                  src={portraitImage}
                  alt=""
                  className="
                  w-full
                  h-[520px]
                  md:h-[700px]
                  lg:h-[820px]
                  object-cover
                "
                />
              </div>

            </div>

            {/* FABRIC COLUMN */}
            <div className="pl-4 flex flex-col">

              <img
                src={clothImage}
                alt=""
                className="
                w-full
                h-[300px]
                md:h-[420px]
                lg:h-[520px]
                object-cover
              "
              />

              <div className="mt-10 px-3">

                <div className="text-[#9CA06A] text-6xl leading-none">
                  ❝
                </div>

                <p
                  className="
                  mt-6
                  text-[#232323]
                  text-sm
                  lg:text-[18px]
                  leading-[2]
                "
                >
                  Every garment
                  <br />
                  should tell
                  <br />
                  a story before
                  <br />
                  a word is
                  <br />
                  spoken.
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;