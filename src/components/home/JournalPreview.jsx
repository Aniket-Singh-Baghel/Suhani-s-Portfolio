const journalPosts = [
  {
    category: "Design Journey",
    title: "Finding My Creative Voice Through Fashion",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80",
  },
  {
    category: "Inspiration",
    title: "How Traditional Textiles Influence My Work",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200&q=80",
  },
  {
    category: "Process",
    title: "From Sketchbook To Final Garment",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
  },
];

const JournalPreview = () => {
  return (
    <section className="bg-white py-14 border-t border-[#E5DAC8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-[#1E1A17] uppercase tracking-[0.08em]">
            From The Journal
          </h2>

          <div className="w-20 h-px bg-[#C9B89C] mx-auto mt-5 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-[5px] w-2 h-2 bg-[#C9B89C] rotate-45"></div>
          </div>
        </div>

        {/* Articles */}
        <div className="grid lg:grid-cols-3 gap-12">
          {journalPosts.map((post, index) => (
            <article key={index} className="flex items-start gap-5">
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-[170px] h-[170px] object-cover flex-shrink-0"
              />

              {/* Content */}
              <div>
                <h3 className="font-serif text-2xl text-[#1E1A17] leading-tight">
                  {post.title}
                </h3>

                <p className="mt-3 text-[#5E554B] leading-relaxed">
                  {post.description}
                </p>

                <button className="mt-6 uppercase tracking-[2px] text-sm border-b border-[#1E1A17] pb-1 hover:opacity-70 transition">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="uppercase tracking-[3px] text-sm border-b border-[#1E1A17] pb-2">
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default JournalPreview;
