const JournalEntry = ({
  entry,
  reverse,
  activeEntry,
  setActiveEntry,
}) => {
  const isActive =
    activeEntry?.id === entry.id;

  return (
    <article
      className={`
        py-10
        border-t
        border-[#C8CCB8]
        transition-all
        duration-500

        ${
          activeEntry && !isActive
            ? "opacity-40"
            : "opacity-100"
        }
      `}
    >
      <div
        className={`
          grid
          lg:grid-cols-2
          gap-16
          items-center

          ${
            reverse
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }
        `}
      >
        <div>
          <p
            className="
              text-[#75815F]
              tracking-[0.25em]
              uppercase
              text-sm
              mb-6
            "
          >
            {entry.id}
          </p>

          <h2
            className="
              font-serif
              text-[#4F5A44]
              text-3xl
              md:text-5xl
              leading-tight
              mb-4
            "
          >
            {entry.title}
          </h2>

          <p className="text-[#75815F]">
            {entry.date}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span
              className="
                uppercase
                tracking-[0.2em]
                text-xs
                text-[#75815F]
              "
            >
              {isActive
                ? "Close Study"
                : "Open Study"}
            </span>

            <button
              onClick={() =>
                isActive
                  ? setActiveEntry(null)
                  : setActiveEntry(entry)
              }
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#75815F]

                flex
                items-center
                justify-center

                text-[#75815F]

                transition-all
                duration-300

                hover:bg-[#75815F]
                hover:text-[#E4E5D6]
              "
            >
              {isActive ? "−" : "→"}
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[16px]">
          <img
            src={entry.image}
            alt={entry.title}
            className="
              w-full
              h-[350px]
              object-cover
              transition-all
              duration-700
              hover:scale-105
            "
          />
        </div>
      </div>
    </article>
  );
};

export default JournalEntry;