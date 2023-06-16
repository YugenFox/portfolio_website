import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
      {/* Welcome To <br />
        My Personal Portfolio */}
        Hi, I'm Kaleb your next software engineer. (add 3 flags)
      </SectionTitle>
      <SectionText>Multicultural Software Engineer who loves working with unique people to make exceptional products.</SectionText>
      <Button onClick={() => window.location = 'https://google.com/should prob make this jump to my projects part of page'}>Learn More - (fix link)</Button>
    </LeftSection>
  </Section>
);

export default Hero;
