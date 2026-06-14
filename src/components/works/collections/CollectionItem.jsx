import { motion, AnimatePresence } from "framer-motion";

const CollectionItem = ({
  collection,
  isActive,
  onToggle,
}) => {
  return (
    <div className="border-t border-[#B7B7A4]/40 py-12">

      {/* Header */}

      <div
        onClick={onToggle}
        className="cursor-pointer"
      >
        <div className="grid lg:grid-cols-[100px_1fr] gap-8">

          <div>
            <span className="text-[#7D8668] font-serif text-3xl">
              {collection.number}
            </span>
          </div>

          <div>

            <h3 className="font-serif text-4xl md:text-5xl text-[#2D2926]">
              {collection.title}
            </h3>

            <p className="mt-3 text-[#5A624A]">
              {collection.category} • {collection.year}
            </p>

            <p className="mt-6 max-w-[650px] text-[#4B4034] leading-relaxed">
              {collection.description}
            </p>

            <button className="mt-8 text-[#3F4633] uppercase tracking-[0.2em] text-sm">
              {isActive
                ? "Close Collection"
                : "View Collection"}
            </button>

          </div>

        </div>
      </div>

      {/* Expandable Area */}

      <AnimatePresence>

        {isActive && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="overflow-hidden"
          >
            <div className="mt-12">

              {/* Cover Image */}

              <div className="overflow-hidden rounded-2xl">

                <img
                  src={collection.cover}
                  alt={collection.title}
                  className="w-full h-[500px] object-cover"
                />

              </div>

              {/* Gallery */}

              {collection.gallery.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mt-8">

                  {collection.gallery.map(
                    (image, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-2xl"
                      >
                        <img
                          src={image}
                          alt=""
                          className="w-full h-[350px] object-cover"
                        />
                      </div>
                    )
                  )}

                </div>
              )}

            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
};

export default CollectionItem;