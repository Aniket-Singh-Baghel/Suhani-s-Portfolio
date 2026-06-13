import heroImage from "./hero-model.png";
import Nav from "../navbar/Nav";

const Hero = () => {
  return (
    <section className="bg-[#F7F1E8] min-h-screen">
      {/* Decorative Shapes */}
      <div
          className="
          absolute
          -top-16
          -left-16
          w-[80vw]
          h-[80vw]
          sm:-top-10
          sm:-left-10
          sm:w-[35vw]
          sm:h-[35vw]
          bg-[#d5c1ac]
          opacity-25
          rounded-br-full
        "
        />
      
      {/* Navbar */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-10 lg:px-10">
        <Nav/>
      </div>

      {/* Hero Content */}
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:pl-10 lg:pr-0">
        <div className="grid lg:grid-cols-2 items-center min-h-[calc(100vh-90px)] gap-12 z-10">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-[#8B7D6B] mb-6">
              Fashion Design Graduate
            </p>

            <h1 className="font-serif text-[3.5rem] md:text-[5rem] leading-[1.05] text-[#1E1A17]">
              Designing
              <br />
              Stories Through
              <br />
              Fabric & Form
            </h1>

            <p className="mt-8 text-lg text-[#5E554B] max-w-xl leading-relaxed">
              Exploring heritage, craftsmanship, and contemporary silhouettes
              through thoughtful design and creative experimentation.
            </p>

            <button className="mt-10 px-8 py-4 font-bold bg-[#9bb082] cursor-pointer text-white tracking-wider uppercase text-sm hover:opacity-90 transition">
              Explore My Work
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={heroImage}
              alt="Suhani Fashion Designer"
              className="w-full h-[90vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
