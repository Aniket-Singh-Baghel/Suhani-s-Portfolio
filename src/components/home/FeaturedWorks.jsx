import { useNavigate } from 'react-router-dom';
import workImage01 from './workImage01.jpg' ;
import workImage02 from './workImage02.png';
import workImage03 from './workImage03.png';


const works = [
   {
    title: "Midnight Opulence",
    category: "Luxury Evening Wear Design",
    description:"An exquisite red-and-black evening gown crafted with a structured corset silhouette, crystal embellishments, voluminous architectural accents, and a statement wide-brim hat. Designed to embody timeless glamour, the piece balances dramatic couture elements with refined sophistication.",
      
    image: workImage03,
  },
  {
    title: "Celestial Tide",
    category: "Avant-Garde Couture Collection",
    description:
      "A dramatic ocean-inspired couture ensemble featuring deep sapphire and violet tones, sculptural draping, cascading ruffles, and intricate circular embellishments reminiscent of bioluminescent marine life. The collection merges fantasy aesthetics with high-fashion tailoring, creating a bold statement of movement and elegance.",
    image: workImage01,
  },
  {
    title: "Lavender Reverie",
    category: "Contemporary Ethnic Couture",
    description:
      "A modern interpretation of traditional Indian occasion wear featuring a one-shoulder draped blouse, flowing lehenga silhouette, delicate sequined embroidery, and ethereal lavender tones. The design celebrates graceful femininity while blending contemporary styling with heritage-inspired craftsmanship.",
    image: workImage02,
  },
 
];


const FeaturedWorks = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-white py-7">
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
        <div 
        onClick={()=>navigate('/works')}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 cursor-pointer">

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
                  className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-105"
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
        {/* <div className="text-center mt-7 ">

          <button className="uppercase font-serif tracking-[0.2em] text-sm text-[#498006] font-bold cursor-pointer hover:opacity-70 transition">
            View All Works →
          </button>

        </div> */}

      </div>
    </section>
  );
};

export default FeaturedWorks;