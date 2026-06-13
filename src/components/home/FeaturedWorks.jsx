const works = [
  {
    title: "Draped Essence",
    category: "Draping Project",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
  },
  {
    title: "Rooted In Nature",
    category: "Sustainable Fashion Project",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
  },
  {
    title: "Modern Heirloom",
    category: "Contemporary Ethnic Wear",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
  },
];


const FeaturedWorks = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-[1400px] mx-auto px-3 md:px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8">

          <h2 className="font-serif text-3xl md:text-5xl text-[#1E1A17] tracking-[0.08em] uppercase">
            Featured Works
          </h2>

          <div className="w-8 h-px bg-[#B8A48A] mx-auto my-2"></div>

          <p className="text-[#6D6255] text-sm md:text-base">
            A glimpse of selected academic projects and explorations.
          </p>

        </div>

        {/* Cards */} 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {works.map((work, index) => (
            <div
              key={index}
              className="group bg-[#f1f1f1] border border-[#E5DAC8] overflow-hidden"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-3 flex items-center justify-between">

                <div>
                  <h3 className="font-serif text-xl uppercase text-[#1E1A17]">
                    {work.title}
                  </h3>

                  <p className="mt-1 text-[#6D6255] text-sm">
                    {work.category}
                  </p>
                </div>

                <span className="text-xl text-[#1E1A17]">
                  →
                </span>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-7 ">

          <button className="uppercase font-serif tracking-[0.2em] text-sm text-[#498006] font-bold cursor-pointer hover:opacity-70 transition">
            View All Works →
          </button>

        </div>

      </div>
    </section>
  );
};

export default FeaturedWorks;