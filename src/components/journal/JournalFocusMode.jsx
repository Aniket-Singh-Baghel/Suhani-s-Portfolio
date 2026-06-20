const JournalFocusMode = ({
  entry,
  onClose,
}) => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
      "
    >
      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/20
          backdrop-blur-md
        "
      />

      <div
        className="
          relative
          w-[92vw]
          max-w-[1200px]
          h-[90vh]

          bg-[#EAEBDD]

          rounded-[32px]

          overflow-y-auto

          shadow-[0_30px_80px_rgba(0,0,0,0.15)]

          z-10
        "
      >
        <button
          onClick={onClose}
          className="
            sticky
            top-6
            ml-auto
            mr-6

            w-12
            h-12

            rounded-full

            border
            border-[#75815F]

            flex
            items-center
            justify-center

            text-[#75815F]

            bg-[#EAEBDD]

            hover:bg-[#75815F]
            hover:text-white

            transition-all
            duration-300

            z-20
          "
        >
          ✕
        </button>

        <div className="px-8 md:px-16 pb-16">
          <img
            src={entry.image}
            alt={entry.title}
            className="
              w-full
              h-[500px]
              object-cover
              rounded-[20px]
              mb-16
            "
          />

          <h2
            className="
              font-serif
              text-[#4F5A44]
              text-5xl
              md:text-7xl
              leading-none
              mb-4
            "
          >
            {entry.title}
          </h2>

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-sm
              text-[#75815F]
              mb-16
            "
          >
            {entry.date}
          </p>

          <section className="mb-20">
            <h3
              className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-[#75815F]
                mb-5
              "
            >
              Observation
            </h3>

            <p className="text-[#5F6755] leading-9 text-lg">
              {entry.observation}
            </p>
          </section>

          <section className="mb-20">
            <h3
              className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-[#75815F]
                mb-5
              "
            >
              Process
            </h3>

            <p className="text-[#5F6755] leading-9 text-lg">
              {entry.process}
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {entry.gallery.slice(0, 2).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="
                  w-full
                  h-[450px]
                  object-cover
                  rounded-[16px]
                "
              />
            ))}
          </div>

          <section className="mb-20">
            <h3
              className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-[#75815F]
                mb-5
              "
            >
              Material Studies
            </h3>

            <p className="text-[#5F6755] leading-9 text-lg">
              {entry.materials}
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {entry.gallery.slice(2, 5).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="
                  w-full
                  h-[320px]
                  object-cover
                  rounded-[16px]
                "
              />
            ))}
          </div>

          <section className="mb-20">
            <h3
              className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-[#75815F]
                mb-5
              "
            >
              Studio Notes
            </h3>

            <p className="text-[#5F6755] leading-9 text-lg">
              {entry.notes}
            </p>
          </section>

          <section>
            <h3
              className="
                uppercase
                tracking-[0.25em]
                text-sm
                text-[#75815F]
                mb-5
              "
            >
              Reflection
            </h3>

            <p className="text-[#5F6755] leading-9 text-lg">
              {entry.reflection}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JournalFocusMode;