import { motion } from "framer-motion";
import FeaturedEditorials from "./FeaturedEditorials";
import { useNavigate } from "react-router-dom";
import heroImage from './heroImage.png'

const PortfolioIntro = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[#f5e5d4] px-6 lg:px-16 overflow-hidden relative">
      <nav className="relative z-30 flex flex-col md:flex-row justify-between items-center py-8 gap-6 md:gap-0">
        <h2 onClick={() => navigate('/')} className="font-serif tracking-[0.25em] text-xl cursor-pointer">
          SUHANI SINGH
        </h2>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-12 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <li>Works</li>
          <li>Collections</li>
          <li>About</li>
          <li>Journal</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex flex-col lg:grid lg:grid-cols-[42%_58%] gap-12 lg:items-center min-h-[calc(100vh-120px)] lg:min-h-screen pb-12 lg:pb-0">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[540px] mb-8 lg:mb-25 relative z-10 w-full"
        >
          <p className="uppercase font-extrabold text-[#728454] tracking-[0.25em] text-xs lg:text-sm mb-4 lg:mb-8">
            Selected Works
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] xl:text-[60px] leading-[1.15] lg:leading-[1.05] tracking-[-0.03em] max-w-[620px]">
            A Curated Archive  of
            <br />
            Fashion Concepts
            <br />
            and Editorial Visions
          </h1>

          <p className="mt-6 lg:mt-8 max-w-md text-[#5A5A5A] leading-relaxed text-sm lg:text-base">
            Exploring silhouettes, textures,
            runway narratives, and couture-inspired concepts.
          </p>
          <button className="mt-6 lg:mt-8 font-extrabold text-[#728454] flex items-center gap-4 border-b border-[#9AB17A] pb-2 uppercase tracking-[0.25em] text-[10px] lg:text-xs cursor-pointer w-fit">
            Explore The Works
            <span>→</span>
          </button>
        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            relative
            w-full
            h-[50vh]
            lg:absolute
            lg:top-0
            lg:right-0
            lg:w-[55%]
            lg:h-screen
            overflow-hidden
            mt-4 lg:mt-0
          "
        >
          <img
            src={heroImage}
            alt="Fashion Editorial"
            className="
            absolute
            top-0
            right-0
            h-full
            w-full
            object-cover
            object-center lg:object-right-top
    "
          />
        </motion.div>

      </div>
      <FeaturedEditorials />
    </section>
  );
};

export default PortfolioIntro;