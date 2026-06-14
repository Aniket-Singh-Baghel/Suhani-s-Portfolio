import { useNavigate } from "react-router-dom";

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className="
            border
            border-[#DDD4C7]
           bg-[#ECE6DA]
            px-8
            md:px-16
            py-14
            md:py-16
          "
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}

            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#7D8668]">
                Let's Connect
              </span>

              <h2 className="mt-4 font-serif text-4xl md:text-6xl text-[#2D2926] leading-tight">
                Interested in
                <br />
                collaborating?
              </h2>

              <p className="mt-5 text-[#5A5248] text-lg leading-relaxed max-w-lg">
                Whether it's a fashion collection, illustration project or
                creative collaboration, I'd love to hear about it.
              </p>
            </div>

            {/* Button */}

            <div className="flex md:justify-center">
              <button
              onClick={() => navigate("/contact")}
                className="
    group
    px-12
    py-5
    bg-[#3F4633]
    border
    border-[#3F4633]
    text-[#F7F1E8]
    uppercase
    tracking-[0.15em]
    text-sm
    transition-all
    duration-300
    hover:bg-[#2D2926]
    hover:border-[#2D2926]
    cursor-pointer
  "
              >
                <span className="flex items-center gap-4">
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
