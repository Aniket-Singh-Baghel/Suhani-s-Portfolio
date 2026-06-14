import WorksHero from "./WorksHero";
import CollectionSection from "./collections/CollectionsSection"
import RecognitionSection from "./recongnition/RecognitionSection";
import ContactCTA from "./contactCTA/ContactCTA";

const Works = () => {
  return (
    <main className="bg-[#f3ebdf] overflow-hidden">

      <WorksHero />

      <CollectionSection />

      <RecognitionSection />

      <ContactCTA />
    </main>
  );
};

export default Works;