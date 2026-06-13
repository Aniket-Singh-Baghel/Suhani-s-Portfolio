import Hero from "./Hero";
import FeaturedWorks from "./FeaturedWorks";
import CollectionPreview from "./CollectionPreview";
import DesignProcess from "./DesignProcess";
import AboutPreview from "./AboutPreview";
import JournalPreview from "./JournalPreview";
import OpportunityCTA from "./OpportunityCTA";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <FeaturedWorks />
        <CollectionPreview />
        <DesignProcess />
        <AboutPreview />
        <JournalPreview />
          <OpportunityCTA />
      </main>
    </>
  );
};

export default Home;
