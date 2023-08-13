import Benefits from '@/components/Benefits';
import PlansInternet from '@/components/PlansInternet';
import Hero from '@/components/Hero';
import Description from '@/components/Description';
import OthersServices from '@/components/OthersServices';
import Testimonials from '@/components/Testimonials';
import FrecuentQuestions from '@/components/FrecuentQuestions';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import PlansTv from '@/components/PlansTv';

const App = () => {
  return (
    <>
      <Hero />
      <Description />
      <Benefits />
      <PlansInternet />
      <PlansTv />
      <OthersServices />
      <Features />
      <Testimonials />
      <FrecuentQuestions />
      <Footer />
    </>
  );
};

export default App;
