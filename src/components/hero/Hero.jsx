import React from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import leafImage from './Leaf.png'
import designerIcon from './designer-icon.png'
import modelImage from './model4.png'
import heroImage from './png.png'

function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#F2E5CE] flex items-center justify-start font-sans antialiased px-8 sm:px-12 md:px-20 lg:px-32 py-12">

      {/* 2. STABLE BACKGROUND SHAPES (z-0) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-10 -left-10 w-[70vw] h-[20vh] sm:w-[28vw] sm:h-[28vh] origin-top-left">
          <div
            className="w-full h-full bg-[#C6D9A6] opacity-30 sm:opacity-40"
            style={{
              borderRadius: '0% 0% 100% 0% / 0% 0% 100% 0%'
            }}
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-[70vw] h-[20vh] sm:w-[28vw] sm:h-[28vh] origin-bottom-left">
          <div className="w-full h-full bg-[#9BB082] opacity-30 sm:opacity-40"
            style={{ borderRadius: '0% 100% 0% 0% / 0% 100% 0% 0%' }} />
        </div>
        <div className="absolute -bottom-16 -right-16 w-[70vw] h-[45vh] sm:w-[58vw] sm:h-[54vh] origin-bottom-right flex items-end justify-end">
          <div className="absolute inset-0 w-full h-full border-t-2 border-l-2 border-white/40 filter blur-[0.5px]"
            style={{ borderRadius: '100% 0% 0% 0% / 100% 0% 0% 0%' }} />
          <div className="w-full h-full bg-[#E2D4AF] opacity-85 mix-blend-multiply"
            style={{ borderRadius: '100% 0% 0% 0% / 100% 0% 0% 0%' }} />
        </div>
      </div>

      {/* 3. THE FLOATING ANIMATED FABRIC TEXTURE & LEAF LAYER (z-10) */}
      {/* <motion.div
        className="absolute -right-5 -bottom-5 w-[75vw] h-[50vh] sm:w-[45vw] sm:h-[60vh] bg-contain bg-right-bottom bg-no-repeat pointer-events-none z-10 opacity-[0.1] sm:opacity-[0.14] mix-blend-multiply origin-bottom-right"
        style={{
          backgroundImage: `url(${leafImage})`,
          filter: 'grayscale(100%) brightness(20%) contrast(150%) blur(5px)'
        }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
          scale: [1.1, 1.12, 1.08, 1.1],
          rotate: [0, 1, -1, 0]
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity
        }}
      /> */}

      {/* 4. BIG HERO IMAGE ON THE RIGHT (z-20) */}
      <div className="absolute top-16 right-0 sm:top-auto sm:right-10 sm:bottom-0 z-99 w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[60vw] max-w-[750px] flex justify-end items-start sm:items-end pointer-events-none opacity-40 sm:opacity-100">

        {/* FRAMER MOTION WRAPPER: Handles the smooth slide-in on page load */}
        <motion.div
          className="relative w-full overflow-visible flex justify-end -mt-40"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: -20, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Fashion Model Presentation"
            className="
           relative
            z-10
            h-[100%]
            max-w-none
            translate-x-24
            translate-y-16
            sm:translate-x-32
            opacity-80
            blur-[1px]
"
          />

        </motion.div>

      </div>
      {/* 5. BALANCED TEXT POSITIONING (z-30) */}
      <div className="relative z-30 w-full max-w-[850px] pl-2 sm:pl-0 pointer-events-none -translate-y-8 lg:-translate-y-12">
        <div className="pointer-events-auto inline-block">

          {/* Subtitle Label */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-6 md:mb-8 opacity-80">
            <img
              src={designerIcon}
              alt="Designer Icon"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            <p className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-[13px] md:text-[14px] font-medium text-[#2B2B2B] m-0 leading-none pt-[2px]">
              Creative Fashion Designer
            </p>
          </div>

          {/* Main Typography Header */}
          <h1 className="font-serif text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] font-normal text-[#232323] leading-[1.0] sm:leading-[0.95] tracking-tight mb-6 sm:mb-8 break-words">
            Suhani Singh
          </h1>

          {/* Core Description Statement */}
          <p className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[21px] text-[#2B2B2B]/75 font-light max-w-[540px] mb-8 sm:mb-12 leading-relaxed tracking-wide">
            Designing silhouettes that move between art and rebellion.
          </p>

          {/* RESPONSIVE BUTTON ROW */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={() => navigate("/portfolio")}
              className="rounded-full bg-[#C3CC9B] text-[#232323] font-medium tracking-wide transition-all duration-300 hover:bg-[#7D8B64] hover:border-[#7D8B64] hover:shadow-md hover:text-white active:scale-95 cursor-pointer px-8 py-3.5 sm:py-4 text-center text-[13px] sm:text-[14px] border border-[#232323]"
              style={{ lineHeight: '1' }}
            >
              View Portfolio
            </button>

            <button
              className="rounded-full bg-transparent text-[#232323] font-medium tracking-wide transition-all duration-300 hover:bg-[#232323] hover:text-[#FAF6EE] active:scale-95 cursor-pointer px-8 py-3.5 sm:py-4 text-center text-[13px] sm:text-[14px] border border-[#232323]"
              style={{ lineHeight: '1' }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero