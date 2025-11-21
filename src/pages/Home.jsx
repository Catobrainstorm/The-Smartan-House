import Hero from '../components/home/Hero';
import SmartanGrid from '../components/home/SmartanGrid';
import CultureSeries from '../components/home/CultureSeries';
import CrucibleSection from '../components/home/CrucibleSection';
import CrucibleStories from '../components/home/CrucibleStories';
import ImpactStories from '../components/home/ImpactStories';
import TeamSection from '../components/home/TeamSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <SmartanGrid />
      <CultureSeries />
      <CrucibleSection />
      <CrucibleStories />
      <ImpactStories />
      <TeamSection />
    </div>
  );
};

export default Home;
