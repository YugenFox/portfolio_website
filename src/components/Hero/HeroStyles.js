import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ImgHeadshot = styled.img`
  width: 300px;
  height: 340px;
  border-radius: 25px;
  object-fit: cover;

  margin-bottom: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 200px;
    height: 220px;
    border-radius: 25px;
    object-fit: cover;

    margin-bottom: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 200px;
    height: 220px;
    border-radius: 25px;
    object-fit: cover;

    margin: 0 auto 2rem auto;
  }
`;
