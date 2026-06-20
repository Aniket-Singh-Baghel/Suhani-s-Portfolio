import JournalHero from "./JournalHero";
import leafImage from "./leaf-image.png";
import JournalIndex from "./JournalIndex";
import JournalFocusMode from "./JournalFocusMode";
import { useState } from "react";
// import Contact from "../components/Contact";

const Journal = () => {
  const [activeEntry, setActiveEntry] = useState(null);
  return (
    <main className="relative bg-[#E4E5D6] overflow-hidden">
      <div
        className="
    absolute
    top-[100px]
    right-[-150px]
    w-[500px]
    h-[500px]
    rounded-full
    bg-[#AAB092]
    blur-[120px]
    opacity-20
    pointer-events-none
    z-0
  "
      />

      {/* Real Leaf */}
      <img
        src={leafImage}
        alt=""
        className="
    absolute
    top-[20px]
    lg:-top-[20px]
    right-[-40px]
    w-[500px]
    lg:w-[700px]
    opacity-80
    pointer-events-none
    z-20
  "
      />
        <div className="relative z-10">
        <JournalHero />

        <JournalIndex
          activeEntry={activeEntry}
          setActiveEntry={setActiveEntry}
        />
      </div>

      {activeEntry && (
        <JournalFocusMode
          entry={activeEntry}
          onClose={() => setActiveEntry(null)}
        />
      )}
    </main>
  );
};

export default Journal;
