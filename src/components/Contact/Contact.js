import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionSubText,
} from "../../styles/GlobalComponents";
import {
  ContactContainer,
  ContactBar,
  ContactSubtext,
  FormContainer,
  Input,
  TextArea,
  SubmitButton,
} from "./ContactStyles";

const Contact = () => (
  <ContactContainer id="contact">
    <SectionTitle>CONTACT</SectionTitle>
    <ContactBar />
    <ContactSubtext>Have a question or want to work together?</ContactSubtext>
    <FormContainer id="contact-form">
      <Input placeholder="Name" type="text" name="name" required />
      <Input placeholder="Enter email" type="email" name="email" required />
      <TextArea
        placeholder="Your Message"
        type="text"
        name="message"
      ></TextArea>
      {/* <div id="success">
          <div>
            Your message was sent successfully. Thanks!
            <span id="close" className="mdi mdi-close"></span>
          </div>
        </div> */}
      <SubmitButton type="submit" id="submit" value="SUBMIT">
        Submit
      </SubmitButton>
    </FormContainer>
  </ContactContainer>
);

export default Contact;
