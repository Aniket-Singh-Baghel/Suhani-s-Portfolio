import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="relative z-30 flex justify-between items-center py-8 px-6 lg:px-16 w-full">
        <h2 onClick={() => navigate('/')} className="font-serif tracking-[0.25em] text-xl cursor-pointer z-50 relative">
          SUHANI SINGH
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center gap-12 text-xs uppercase tracking-[0.2em]">
          <li className="cursor-pointer" onClick={() => navigate('/portfolio')}>Works</li>
          <li className="cursor-pointer">Collections</li>
          <li className="cursor-pointer" onClick={() => navigate('/about')}>About</li>
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
        <div className="flex flex-col h-full pt-8 px-8">
          {/* Close Button */}
          <div className="flex justify-end mb-16">
            <button
              className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="block w-6 h-[2px] bg-black rotate-45 translate-y-[8px]"></span>
              <span className="block w-6 h-[2px] bg-black opacity-0"></span>
              <span className="block w-6 h-[2px] bg-black -rotate-45 -translate-y-[8px]"></span>
            </button>
          </div>
          <ul className="flex flex-col gap-8 text-sm uppercase tracking-[0.2em]">
            <li className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => { setIsSidebarOpen(false); navigate('/portfolio'); }}>Works</li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">Collections</li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => { setIsSidebarOpen(false); navigate('/about'); }}>About</li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">Journal</li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
