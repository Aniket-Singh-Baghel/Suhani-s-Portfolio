import collection01 from "./collection01.jpg";
import collection02 from "./collection02.png";
import collection03 from "./collection03.png";
import collection04 from "./collection04.png";

const collectionImages = [
  collection01,
  collection02,
  collection03,
  collection04,
];

const CollectionPreview = () => {
  return (
    <section className="bg-[#F7F1E8] py-10 border-t border-[#E5DAC8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[35%_65%] gap-12 items-start">
          {/* Left Content */}

          <div>
            <p className="uppercase tracking-[4px] text-sm text-[#8B7D6B] mb-5">
              Collection Preview
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-[#1E1A17] leading-tight">
              Draped
              Realms
            </h2>

            <p className="mt-8 text-[#5E554B] leading-relaxed max-w-xl">
              A graduation collection exploring drape as a language of
              transformation. Blending fantasy, tribal accents, contemporary
              couture silhouettes, and selected Indian textile influences, the
              collection moves through multiple visual worlds while celebrating
              texture, movement, and expressive form.
            </p>

            <button className="mt-10 text-[#498006] font-bold cursor-pointer uppercase tracking-[3px] text-sm border-b border-[#1E1A17] pb-2 hover:opacity-70 transition">
              View Collection and Works →
            </button>
          </div>

          {/* Gallery */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collectionImages.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={image}
                  alt={`Look ${index + 1}`}
                  className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition duration-700 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
