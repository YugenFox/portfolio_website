// Inspired by contact form from http://findmatthew.com/
import styled from "styled-components";
import { Section, SectionSubText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

export const ContactContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactBar = styled.div`
  background: #fff;
  margin: 25px 0 40px 0;
  width: 110px;
  height: 4px;
`;

export const ContactSubtext = styled(SectionSubText)`
  color: #04c2c9;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px auto 0 auto;
`;

export const Input = styled.input`
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  margin-bottom: 3px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  /* margin-bottom: 3px; */
  margin-bottom: .5rem;
  outline: none;
  padding: 10px 15px;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  /* no styles seemed to work */
  /* margin-top: 2rem; */
  /* width: 50px;
  height: 50px; */
`;
