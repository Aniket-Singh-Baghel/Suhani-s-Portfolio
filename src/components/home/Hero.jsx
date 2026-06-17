import heroImage from "./hero-model.png";
import Nav from "../navbar/Nav";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#F7F1E8] overflow-x-hidden">
      {/* Decorative Shape */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[220px]
          h-[220px]
          sm:w-[300px]
          sm:h-[300px]
          lg:w-[500px]
          lg:h-[500px]
          bg-[#d5c1ac]
          opacity-25
          rounded-br-full
          pointer-events-none
        "
      />

      {/* Navbar */}
      <div className="relative z-50 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-10">
        <Nav />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:pl-10 lg:pr-0">
        <div className="grid lg:grid-cols-2 items-center min-h-[calc(100vh-90px)] gap-10 lg:gap-12">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[4px] text-xs sm:text-sm text-[#8B7D6B] mb-5">
              Fashion Design Graduate
            </p>

            <h1 className="font-serif text-4xl sm:text-[4.2rem] lg:text-[5rem] leading-[1.1] sm:leading-[1.05] text-[#1E1A17] mt-8 lg:mt-0">
              Designing
              <br />
              Stories Through
              <br />
              Fabric & Form
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#5E554B] max-w-xl leading-relaxed">
              Exploring heritage, craftsmanship, and contemporary silhouettes
              through thoughtful design and creative experimentation.
            </p>

            <button className="mt-8 sm:mt-10 px-8 py-4 font-bold bg-[#9bb082] text-white tracking-wider uppercase text-sm hover:opacity-90 transition cursor-pointer">
              Explore My Work
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={heroImage}
              alt="Suhani Fashion Designer"
               className="
    w-full
    h-[50vh]
    sm:h-[75vh]
    lg:h-[90vh]
    object-cover
    object-top lg:object-right
  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
