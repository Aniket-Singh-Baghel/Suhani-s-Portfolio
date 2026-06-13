const processSteps = [
  {
    title: "Inspiration",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
  },
  {
    title: "Moodboard",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80",
  },
  {
    title: "Sketches",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
  },
  {
    title: "Fabric",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200&q=80",
  },
  {
    title: "Pattern",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80",
  },
  {
    title: "Final Look",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
  },
];

const DesignProcess = () => {
  return (
    <section className="bg-white py-10 border-t border-[#E5DAC8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}

        <div className="text-center mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] text-sm text-[#8B7D6B] mb-4">
            Behind The Work
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#1E1A17]">
            The Design Process
          </h2>

          <p className="mt-3 text-[#5E554B] max-w-2xl mx-auto">
            From inspiration to garment creation, every project follows a
            journey of exploration, experimentation, and refinement.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:-mt-6 gap-5">
          {processSteps.map((step, index) => (
            <div key={index}>
              <p className="uppercase text-center tracking-[2px] text-xs text-[#8B7D6B] mb-3">
                {step.title}
              </p>

              <div className="overflow-hidden border border-[#E5DAC8]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[180px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
