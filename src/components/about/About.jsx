import { motion } from "framer-motion";
import Navbar from "../shared/Navbar";
import heroImage from '../../assets/hero.png'

const About = () => {
  return (
    <section className="min-h-screen bg-[#f5e5d4] overflow-hidden relative">
      <Navbar />

      <div className="px-6 lg:px-16 flex flex-col lg:grid lg:grid-cols-[42%_58%] gap-12 lg:items-center min-h-[calc(100vh-120px)] lg:min-h-screen pb-12 lg:pb-0">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[540px] mb-8 lg:mb-25 relative z-10 w-full"
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
            className="font-serif text-5xl sm:text-6xl lg:text-[70px] xl:text-[80px] leading-[1.15] lg:leading-[1.05] tracking-[-0.03em] max-w-[620px] lowercase"
          >
            {"hi hi.".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          damping: 12,
                          stiffness: 100,
                        },
                      },
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <p className="mt-8 lg:mt-10 text-black leading-[1.8] text-[15px] lg:text-[17px] font-sans font-medium tracking-wide">
            i am a new york based designer with an affinity for storytelling and the
            intersection between business and empathy. i am an incoming strategy
            intern at a design agency! i have previous experience at both boutique
            branding agencies and established digital consultancies. previously, i
            graduated from uc san diego studying cognitive science + design interaction.
          </p>

          <div className="mt-12 lg:mt-16">
            <h3 className="font-serif italic text-xl lg:text-2xl mb-6">get in touch</h3>
            <ul className="space-y-3 font-sans text-[13px] tracking-[0.15em] uppercase font-semibold">
              <li>
                <a href="#" className="hover:opacity-60 transition-opacity">email</a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60 transition-opacity">linkedin</a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60 transition-opacity">resume</a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            relative
            w-[calc(100%+3rem)]
            -ml-6
            h-[50vh]
            lg:w-[55%]
            lg:ml-0
            lg:absolute
            lg:top-0
            lg:right-0
            lg:h-screen
            overflow-hidden
            mt-4 lg:mt-0
          "
        >
          <img
            src={heroImage}
            alt="About"
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
    </section>
  );
};

export default About;
