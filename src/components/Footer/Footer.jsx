import { styled } from "styled-components";

const FooterText = styled.p`
  font-family: "Roboto Mono", Helvetica, sans-serif;
  font-size: 10px;
  font-style: italic;
  text-align: right;
  padding: 10px 10%;
`;
export default function Footer() {
  return (
    <>
      <FooterText>
        Made with Next.JS, Style Component, & love, 2023&copy;
      </FooterText>
    </>
  );
}
