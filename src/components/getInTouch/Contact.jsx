import {
  FiMail,
  FiInstagram,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

import Nav from "../navbar/Nav";
import dummy from "./dummy.png";
import portFolio from "./resume.pdf";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-[#F2E5CE] overflow-hidden">

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
          bg-[#C6D9A6]
          opacity-25
          rounded-br-full
        "
        />
      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="relative z-50">
          <Nav />
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-[55%_45%] gap-4 items-center py-4 lg:py-4">

          {/* Left Content */}
          <div className="max-w-[620px] lg:-mt-4  ">

            <p className="uppercase tracking-[0.25em] text-[#94A36F] text-sm font-medium mb-4">
              Get In Touch
            </p>

            <h1
              className="
              font-serif
              text-[3rem]
              sm:text-[5rem]
              md:text-[6rem]
              lg:text-[6.5rem]
              leading-[0.95]
              tracking-tight
              text-[#232323]
            "
            >
              Let's Create
              <br />
              Something
              <br />
              Meaningful.
            </h1>
            
            <div className="w-px h-10 bg-[#B8B08B] my-2"></div>
            <p className="max-w-[520px] text-[#232323]/70 text-lg leading-relaxed">
              Open to editorial projects, fashion campaigns,
              creative collaborations and design opportunities.
            </p>
          </div>

          <div className="lg:flex justify-end mt-8 lg:mt-0">

            <div
              className="
              overflow-hidden
              rounded-t-[250px]
              border
              border-white/50
              w-[420px]
              h-[620px]
              shadow-xl
            "
            >
              <img
                src={dummy}
                alt="Fashion Editorial"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

        {/* Contact Section Label */}
        <div className="text-center mb-12 mt-10">
          <p className="uppercase tracking-[0.25em] text-[#94A36F] text-xs font-extrabold">
            Connect With Me
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
        <a
            href="mailto:suhanisinghbaghel0309@gmail.com"
            className="
            group
            border
            border-[#d9ceb8]
            p-10
            min-h-[240px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            transition-all
            duration-300
            hover:bg-white/30
            hover:-translate-y-2
          "
          >
            <FiMail
              size={36}
              className="text-[#94A36F]"
            />

            <h3 className="mt-8 uppercase tracking-[0.2em] text-sm">
              Email
            </h3>

            <p className="mt-5 text-[#232323]/70 break-all">
              Contact Via Email
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/suhani-singh-baghel-5a3ab3309?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="
            group
            border
            border-[#d9ceb8]
            p-10
            min-h-[240px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            transition-all
            duration-300
            hover:bg-white/30
            hover:-translate-y-2
          "
          >
            <FiLinkedin
              size={36}
              className="text-[#94A36F]"
            />

            <h3 className="mt-8 uppercase tracking-[0.2em] text-sm">
              LinkedIn
            </h3>

            <p className="mt-5 text-[#232323]/70">
              Contact Via LinkedIn
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/fashionfolio__?utm_source=qr&igsh=MWliOWwxdDl0emtiMg=="
            target="_blank"
            rel="noreferrer"
            className="
            group
            border
            border-[#d9ceb8]
            p-10
            min-h-[240px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            transition-all
            duration-300
            hover:bg-white/30
            hover:-translate-y-2
          "
          >
            <FiInstagram
              size={36}
              className="text-[#94A36F]"
            />

            <h3 className="mt-8 uppercase tracking-[0.2em] text-sm">
              Instagram
            </h3>

            <p className="mt-5 text-[#232323]/70">
              Contact Via Instagram
            </p>
          </a>

        </div>

        {/* Download Portfolio */}
        <div className="flex justify-center mt-20 mb-24">

          <a
            href={portFolio}
            download
            className="
            flex
            items-center
            gap-6
            px-10
            py-8
            border
            border-[#9BB082]
            bg-white/20
            backdrop-blur-sm
            hover:bg-[#9BB082]/10
            transition-all
            duration-300
          "
          >
            <FiDownload
              size={28}
              className="text-[#94A36F]"
            />

            <div>
              <h3 className="uppercase tracking-[0.2em] text-sm font-medium">
                Download Portfolio
              </h3>

              <p className="mt-2 text-[#232323]/70">
                Selected works, editorial concepts and design projects
              </p>
            </div>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;