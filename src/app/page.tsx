import Benefits from '@/components/Benefits';
import Plans from '@/components/Plans';
import Hero from '@/components/Hero';
import Description from '@/components/Description';
import OthersServices from '@/components/OthersServices';
import YoutubeChannel from '@/components/YoutubeChannel';
import RateUs from '@/components/RateUs';
import Testimonials from '@/components/Testimonials';
import FrecuentQuestions from '@/components/FrecuentQuestions';
import Footer from '@/components/Footer';

const App = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Benefits />
      <Plans />
      <OthersServices />
      <YoutubeChannel />
      <Testimonials />
      <FrecuentQuestions />
      <RateUs />
      <Footer />
    </div>
  );
};

export default App;
