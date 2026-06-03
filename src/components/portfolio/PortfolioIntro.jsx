import { motion } from "framer-motion";
import FeaturedEditorials from "./FeaturedEditorials";
import { useNavigate } from "react-router-dom";
import heroImage from './heroImage.png'

const PortfolioIntro = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[#f5e5d4] px-6 lg:px-16 overflow-hidden">
      <nav className="relative z-30 flex justify-between items-center py-8">
        <h2 onClick={() => navigate('/')} className="font-serif tracking-[0.25em] text-xl cursor-pointer">
          SUHANI SINGH
        </h2>

        <ul className="flex gap-12 text-xs uppercase tracking-[0.2em]">
          <li>Works</li>
          <li>Collections</li>
          <li>About</li>
          <li>Journal</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="grid lg:grid-cols-[42%_58%] gap-12 items-center min-h-screen">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[540px] mb-25"
        >
          <p className="uppercase font-extrabold text-[#728454]  tracking-[0.25em] text-sm text-[#5A5A5A] mb-8">
            Selected Works
          </p>

          <h1 className="font-serif text-[58px] lg:text-[60px] leading-[1.05] tracking-[-0.03em] max-w-[620px]">
            A Curated Archive  of
            <br />
            Fashion Concepts
            <br />
            and Editorial Visions
          </h1>

          <p className="mt-8 max-w-md text-[#5A5A5A] leading-relaxed">
            Exploring silhouettes, textures,
            runway narratives, and couture-inspired concepts.
          </p>
          <button className="mt-8 font-extrabold text-[#728454] flex items-center gap-4 border-b border-[#9AB17A] pb-2 uppercase tracking-[0.25em] text-xs cursor-pointer">
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
    absolute
    top-0
    right-0
    w-[55%]
    h-screen
    overflow-hidden
    order-4 border-red-500
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
            object-right-top
    "
          />
        </motion.div>

      </div>
      <FeaturedEditorials />
    </section>
  );
};

export default PortfolioIntro;