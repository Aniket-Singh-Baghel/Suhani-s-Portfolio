import Nav from "../navbar/Nav";

const JournalHero = () => {
  return (
    <section className="relative z-50">

      <div className="relative z-90 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-10">
        <Nav />
      </div>

      {/* Divider */}
      <div className="border-b border-[#C8CCB8]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 z-50">

        <div className="py-10 md:py-14">

          {/* Small Label */}
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#75815F]
              text-sm
              mb-8
            "
          >
            Journal
          </p>

          {/* Editorial Heading */}
          <h1
            className="
              font-serif
              text-[#4F5A44]
              leading-[1]
              text-[3rem]
              md:text-[5rem]
              lg:text-[4.5rem]
              max-w-[900px]
            "
          >
            Observations,
            <br />
            process and studies.
          </h1>

          {/* Date */}
          <div className="flex items-center gap-4 mt-12">

            <div className="w-12 h-px bg-[#75815F]" />

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[#75815F]
                text-sm
              "
            >
              2024 — Present
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default JournalHero;