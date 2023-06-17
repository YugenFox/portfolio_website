import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      {/* Welcome To <br />
        My Personal Portfolio */}
        Hi, I'm Kaleb Day
        {/* Hi, I'm Kaleb your next software engineer. (add 3 flags) Some words cut off on tablet size 700-800px ish */}
      </SectionTitle>
      <SectionText>Multicultural Software Engineer who loves working with unique people to make exceptional products.</SectionText>
      <Button onClick={() => window.location = 'https://google.com/should prob make this jump to my projects part of page'}>Learn More - (Fix Link)</Button>
    </LeftSection>
  </Section>
);

export default Hero;
