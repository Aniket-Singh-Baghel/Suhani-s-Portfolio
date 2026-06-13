const collectionImages = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
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

            <h2 className="font-serif text-5xl text-[#1E1A17] leading-tight">
              Threads of
              <br />
              Heritage
            </h2>

            <p className="mt-8 text-[#5E554B] leading-relaxed">
              A graduation collection inspired by Indian craft traditions,
              celebrating embroidery, texture, and timeless silhouettes
              through a contemporary lens.
            </p>

            <button className="mt-10 mt-10 text-[#498006] font-bold cursor-pointer uppercase tracking-[3px] text-sm border-b border-[#1E1A17] pb-2 hover:opacity-70 transition">
              View Collection →
            </button>

          </div>

          {/* Gallery */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {collectionImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Look ${index + 1}`}
                  className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
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