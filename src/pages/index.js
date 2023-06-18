import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      {/* Email Form */}
      <Timeline />
      {/* Maybe make a WhenI'm not at work section instead of Accomplishments. Like 
      -Indoor Bouldering
      -USA Freestyle Soccer competitor
      -Playing Nintendo's Super Smash Bros Melee with friends
       */}
      <Accomplishments />
    </Layout>
  );
};

export default Home;
