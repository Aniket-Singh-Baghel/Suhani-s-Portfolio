import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CollectionRow = ({ item, isOpen, onClick }) => {
  const rowRef = useRef(null);
  return (
    <>
      {/* Row */}

      <div
        ref={rowRef}
        onClick={onClick}
        className="
          cursor-pointer
          border-b
          border-[#DDD4C7]
          hover:bg-[#F3ECE2]
          transition-all
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[70px_260px_1fr_150px]
            gap-8
            items-start
            p-6
            lg:p-8
          "
        >
          {/* Number */}

          <div className="flex items-center gap-3 pt-2">
            <div className="w-6 h-px bg-[#B7B7A4]" />

            <span className="font-serif text-2xl text-[#4A4F3D]">
              {item.number}
            </span>
          </div>

          {/* Thumbnail */}

          <img
            src={item.cover}
            alt={item.title}
            className="
              w-full
              h-[170px]
              object-cover
            "
          />

          {/* Content */}

          <div className="pt-1">
            <h3 className="font-serif text-4xl text-[#2D2926]">{item.title}</h3>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#7D8668]">
              {item.category} • {item.year}
            </p>

            <p className="mt-5 max-w-[520px] text-[#5A5248] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* CTA */}

          <div className="flex items-center justify-end gap-5 pt-6">
            <span className="uppercase tracking-[0.2em] text-xs text-[#5A624A]">
              View Details
            </span>

            <span
              className={`
                text-3xl
                text-[#3F4633]
                transition-transform
                duration-300
                ${isOpen ? "rotate-45" : ""}
              `}
            >
              +
            </span>
          </div>
        </div>
      </div>

      {/* Expanded Content */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="overflow-hidden"
          >
            <div
              className="
                bg-[#F5EFE6]
                border-b
                border-[#DDD4C7]
                p-8
                lg:p-10
              "
            >
              {/* Top Grid */}

              <div className="grid lg:grid-cols-[1fr_1.2fr_2fr] gap-8">
                {/* About */}

                <div>
                  <h5 className="text-xs uppercase tracking-[0.15em] text-[#7D6F61] mb-6">
                    About The Series
                  </h5>

                  <p className="text-[#5A5248] leading-relaxed">{item.about}</p>
                </div>

                {/* Moodboard */}

                <div>
                  <h5 className="text-xs uppercase tracking-[0.15em] text-[#7D6F61] mb-6">
                    Moodboard
                  </h5>

                  <div className="grid grid-cols-2 gap-3">
                    {item.moodboard.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        className="
                          w-full
                          h-[160px]
                          object-cover
                        "
                      />
                    ))}
                  </div>
                </div>

                {/* Sketches */}

                <div>
                  <h5 className="text-xs uppercase tracking-[0.15em] text-[#7D6F61] mb-6">
                    Sketches
                  </h5>

                  <div className="grid grid-cols-2 gap-3">
                    {item.sketches.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        className="
                          w-full
                          h-[160px]
                          object-cover
                        "
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Final Section */}

              <div className="mt-12">
                <h5 className="text-xs uppercase tracking-[0.15em] text-[#7D6F61] mb-6">
                  {item.finalTitle}
                </h5>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {item.finals.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="
                        w-full
                        aspect-[4/5]
                        object-cover
                      "
                    />
                  ))}
                </div>
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      rowRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });

                      setTimeout(() => {
                        onClick();
                      }, 300);
                    }}
                    className="
      flex
      items-center
      gap-3
      text-[#3F4633]
      uppercase
      tracking-[0.15em]
      text-sm
      hover:text-[#2D2926]
      transition-colors
    "
                  >
                    Close Collection ↑
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CollectionRow;
