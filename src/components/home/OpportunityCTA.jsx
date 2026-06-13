import { useNavigate } from "react-router-dom";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#171310] text-[#F7F1E8]">
      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.04em]">
                Open To Opportunities
              </h2>

              <p className="mt-2 text-white/70">
                Available for internships, collaborations and new beginnings.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white/30 px-10 py-4 uppercase tracking-[3px] text-sm hover:bg-white hover:text-[#171310] transition cursor-pointer"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-4xl tracking-[0.08em]">SUHANI</h3>

            <p className="uppercase tracking-[3px] text-xs mt-2 text-white/60">
              Fashion Designer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-white">Quick Links</h4>

            <div className="grid grid-cols-2 gap-y-3 text-white/70">
              <button
                onClick={() => navigate("/works")}
                className="text-left hover:text-white transition cursor-pointer"
              >
                Works
              </button>

              <button
                onClick={() => navigate("/journal")}
                className="text-left hover:text-white transition cursor-pointer"
              >
                Journal
              </button>

              <button
                onClick={() => navigate("/collections")}
                className="text-left hover:text-white transition cursor-pointer"
              >
                Collections
              </button>

              <button
                onClick={() => navigate("/about")}
                className="text-left hover:text-white transition cursor-pointer"
              >
                About
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="text-left hover:text-white transition cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-5 text-white">Let's Connect</h4>

            <a
              href="mailto:suhanisinghbaghel0309@gmail.com"
              className="block text-white/70 hover:text-white transition mb-5 break-all"
            >
              suhanisinghbaghel0309@gmail.com
            </a>

            <div className="flex items-center gap-5 text-white/70">
              <a
                href="https://www.instagram.com/fashionfolio__?utm_source=qr&igsh=MWliOWwxdDl0emtiMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="https://pinterest.com/your_pinterest_username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="Pinterest"
              >
                <span>P</span>
              </a>

              <a
                href="https://behance.net/your_behance_username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition font-semibold"
                aria-label="Behance"
              >
                Be
              </a>

              <a
                href="https://www.linkedin.com/in/suhani-singh-baghel-5a3ab3309?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-white/60 leading-relaxed">
              © 2026 Suhani.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
