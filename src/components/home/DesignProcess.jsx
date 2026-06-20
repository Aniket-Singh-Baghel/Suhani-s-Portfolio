import insImage from './insp.png'
import mdBoard from './mdBoard.png'
import sketches from './sketches.png'
import fabric from './fabric.png'
import pattern from './pattern.png'
import finalLook from './final-look.png'
const processSteps = [
  {
    title: "Inspiration",
    image:insImage,
  },
  {
    title: "Moodboard",
    image: mdBoard,
  },
  {
    title: "Sketches",
    image: sketches,
  },
  {
    title: "Fabric",
    image: fabric,
  },
  {
    title: "Pattern",
    image:pattern,
  },
  {
    title: "Final Look",
    image:
      finalLook,
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:-mt-8 -mt-4 gap-5">
          {processSteps.map((step, index) => (
            <div key={index}>
              <p className="uppercase text-center tracking-[2px] text-xs text-[#8B7D6B] mb-4">
                {step.title}
              </p>
              <div className="overflow-hidden border border-[#E5DAC8]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[220px] object-cover hover:scale-105 transition duration-700"
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
