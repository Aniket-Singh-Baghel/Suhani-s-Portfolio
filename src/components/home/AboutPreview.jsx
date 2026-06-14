import portraitImage from "./about-preview.png";
import {useNavigate} from 'react-router-dom'

import {
  GraduationCap,
  Pencil,
  BookOpen,
} from "lucide-react";

const AboutPreview = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-[#F7F1E8] border-t border-[#E5DAC8] py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-[28%_40%_32%] gap-10 lg:gap-12 items-center">

          {/* Portrait */} 
          <div>
            <img
              src={portraitImage}
              alt="Suhani Singh"
              className="w-full h-[300px] md:h-[400px] lg:h-[360px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pr-10 text-center lg:text-left">

            <p className="uppercase tracking-[3px] text-xs text-[#8B7D6B] mb-2">
              Hello, I'm Suhani →
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-[#1E1A17] leading-tight">
              A passionate designer
              <br />
              with a love for detail.
            </h2>

            <p className="mt-4 text-[#5E554B] leading-relaxed text-lg">
              I believe in creating with purpose — where every stitch
              carries a story and every piece reflects emotion,
              culture, and craftsmanship.
            </p>

            <button
             onClick={() => navigate('/about')}
             className="mt-10 text-[#498006] font-bold cursor-pointer uppercase tracking-[3px] text-sm border-b border-[#1E1A17] pb-2 hover:opacity-70 transition">
              Know More About Me →
            </button>

          </div>

          {/* Right Features */}
          <div className="lg:border-l border-t lg:border-t-0 border-[#E5DAC8] lg:pl-6 lg:-ml-6 pt-10 lg:pt-0">

            <div className="space-y-8 max-w-sm mx-auto lg:max-w-none">

              {/* Education */}
              <div className="flex items-start gap-4">

                <GraduationCap
                  size={30}
                  strokeWidth={1.5}
                  className="text-[#498006] flex-shrink-0 mt-1"
                />

                <div>
                  <h4 className="text-normal text-[#1E1A17]">
                    Fashion Design Graduate
                  </h4>

                  <p className="mt-1 text-[#5E554B]">
                    Class of 2026
                  </p>
                </div>

              </div>

              {/* Design Interest */}
              <div className="flex items-start gap-5">

                <Pencil
                  size={30}
                  strokeWidth={1.5}
                  className="text-[#498006] flex-shrink-0 mt-1"
                />

                <div>
                  <h4 className="text-normal text-[#1E1A17]">
                    Love for Textiles & Craft
                  </h4>

                  <p className="mt-1 text-[#5E554B]">
                    Heritage-Inspired Designs
                  </p>
                </div>

              </div>

              {/* Learning */}
              <div className="flex items-start gap-5">

                <BookOpen
                  size={30}
                  strokeWidth={1.5}
                  className="text-[#498006] flex-shrink-0 mt-1"
                />

                <div>
                  <h4 className="text-normal text-[#1E1A17]">
                    Always Learning
                  </h4>

                  <p className="mt-1 text-[#5E554B]">
                    Exploring, Creating, Evolving
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;