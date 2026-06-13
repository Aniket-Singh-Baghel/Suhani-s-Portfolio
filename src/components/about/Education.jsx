const Education = () => {
  return (
    <section className="py-14 bg-[#EBEBEB] border-t border-[#E5DAC8]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid lg:grid-cols-[40%_60%] gap-16">

          {/* LEFT */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#9BB082]
              text-sm
              font-semibold
              mb-5
            "
            >
              Education & Certifications
            </p>

            <h2
              className="
              font-serif
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-[1]
              text-[#232323]
            "
            >
              Learning
              <br />
              Through Design
              <br />
              and Practice.
            </h2>

          </div>

          {/* RIGHT */}

          <div className="relative pr-2">

            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#D8CDB8]" />

            <div className="pl-10 pb-14 relative">

              <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#9BB082]" />

              <p className="uppercase tracking-[0.25em] text-xs text-[#9BB082] mb-4">
                2023 — 2026
              </p>

              <h3 className="font-serif text-3xl text-[#232323] mb-4">
                Bachelor of Fashion Design (University of Allahabad, prayagraj)
              </h3>

              <p className="text-[#232323]/70 leading-8">
                Developing expertise in fashion illustration,
                garment construction, textiles, pattern making,
                styling and creative direction.
              </p>

            </div>
             <div className="pl-10 relative">

    <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#9BB082]" />

    <p className="uppercase tracking-[0.25em] text-xs text-[#9BB082] mb-4">
      Certification
    </p>

    <h3 className="font-serif text-3xl text-[#232323] mb-4">
      Fevicryl Workshop
    </h3>

    <p className="text-[#232323]/70 leading-8">
      Successfully participated in the Fevicryl Workshop,
      gaining hands-on exposure to creative surface
      decoration techniques and artistic experimentation.
    </p>

  </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;