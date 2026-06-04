import { useState } from "react";
import { motion } from "framer-motion";
import FeaturedEditorials from "./FeaturedEditorials";
import { useNavigate } from "react-router-dom";
import heroImage from './heroImage.png'

const PortfolioIntro = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#f5e5d4] px-6 lg:px-16 overflow-hidden relative">
      <nav className="relative z-30 flex justify-between items-center py-8">
        <h2 onClick={() => navigate('/')} className="font-serif tracking-[0.25em] text-xl cursor-pointer z-50 relative">
          SUHANI SINGH
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center gap-12 text-xs uppercase tracking-[0.2em]">
          <li className="cursor-pointer">Works</li>
          <li className="cursor-pointer">Collections</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Journal</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Hamburger Menu Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f5e5d4] z-40 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-32 px-8">
          <ul className="flex flex-col gap-8 text-sm uppercase tracking-[0.2em]">
            <li className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>Works</li>
            <li className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>Collections</li>
            <li className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>About</li>
            <li className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>Journal</li>
            <li className="cursor-pointer" onClick={() => setIsSidebarOpen(false)}>Contact</li>
          </ul>
        </div>
      </div>

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