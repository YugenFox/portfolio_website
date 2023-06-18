import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  Img,
} from "./AboutStyles";
import { HobbiesData } from "../../constants/constants";

const About = () => (
  <Section id="about">
    <SectionDivider />
    <br />
    <SectionTitle>About</SectionTitle>
    <SectionText>
      I love to learn, collaborate, seek mentorship, and help others when it
      comes to software! However, when I'm not on the computer I love:
    </SectionText>
    <GridContainer>
      {HobbiesData.map((item,index) =>(
        <BlogCard key={index}>
          <Img src={item.image}/>
          <TitleContent>
            <HeaderThree title>{item.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{item.text}</CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
    {/* <GridContainer>
      {HobbiesData.map(({ }) => (
        <BlogCard key="id">
          <Img src='#' />
          <TitleContent>
            <HeaderThree title></HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo></CardInfo>
        </BlogCard>
      ))}
    </GridContainer> */}
  </Section>
);

export default About;
