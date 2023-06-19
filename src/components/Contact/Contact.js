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

/* Below is for form to work */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // npm i @emailjs/browser
// need to import from .env.local
// # For emailjs email form in Contact
const YOUR_SERVICE_ID = "service_7ha4py8";
const YOUR_TEMPLATE_ID = "template_c88nrhc";
// #Account>API Keys-Public key
const YOUR_PUBLIC_KEY = "WXsCWIXjnidgKKIXm";

const Contact = () => {
  const form = useRef();
  console.log(form)

  const sendEmail = (e) => {
    console.error("test error");
    console.log("send email clicked");
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle>CONTACT</SectionTitle>
      <ContactBar />
      <ContactSubtext>Have a question or want to work together?</ContactSubtext>
      <FormContainer ref={form} onSubmit={sendEmail}>
        <Input placeholder="Name" type="text" name="user_name" required />
        <Input
          placeholder="Enter email"
          type="email"
          name="user_email"
          required
        />
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
        <SubmitButton type="submit" value="Send">
          Submit
        </SubmitButton>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
