import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Container } from "./ContactStyles";

const Contact = () => (
  <Section id="contact">
    <Container className="container flex">
      <div
        className="header waypoint animated slide-in-left"
        data-animation="slide-in-left"
      >
        CONTACT
      </div>
      <div
        className="header-bar waypoint animated slide-in-right"
        data-animation="slide-in-right"
        data-delay=".25s"
        style={{ animationDelay: "0.25s" }}
      ></div>
      <div
        className="highlight waypoint animated slide-in-right"
        data-animation="slide-in-right"
        data-delay=".5s"
        style={{ animationDelay: "0.5s" }}
      >
        Have a question or want to work together?
      </div>
      <form
        className="waypoint animated pop-in"
        data-animation="pop-in"
        data-delay=".5s"
        id="contact-form"
        style={{ animationDelay: "0.5s" }}
      >
        <input placeholder="Name" type="text" name="name" required />
        <input placeholder="Enter email" type="email" name="email" required />
        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
        ></textarea>
        <div id="success">
          <div>
            Your message was sent successfully. Thanks!
            <span id="close" className="mdi mdi-close"></span>
          </div>
        </div>
        <input className="button" type="submit" id="submit" value="SUBMIT" />
      </form>
    </Container>
  </Section>
);

export default Contact;
