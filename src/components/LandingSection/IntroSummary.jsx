import { styled } from "styled-components";
import FactCarousel from "../FactCarousel/FactCarousel";
import factlist from "../FactCarousel/FactList";

const Sectional = styled.section`
  position: relative;
  z-index: 1;
  margin-top: 200px;
  margin-left: 10%;
  margin-right: 5%;
  padding: 0;
  width: 35%;
  height: 90vh;
`;

const IntroBold = styled.p`
  position: relative;
  padding: 0 0 50px 0;
  z-index: 1;
  font-family: "Inter", Helvetica, sans-serif;
  font-size: 36px;
`;

const YellowTextEffect = styled.span`
  color: var(--element-border-hover-select);
`;

const IntroText = styled.p`
  position: relative;
  padding-top: 0;
  z-index: 1;
  font-family: "Roboto Mono", Helvetica, sans-serif;
  font-size: 16px;
`;

export default function IntroSummary() {
  return (
    <Sectional>
      <IntroBold>
        Hi, I&apos;m Adam, a&nbsp;
        <YellowTextEffect>junior full-stack web developer</YellowTextEffect>
        &nbsp;with a passion for creating innovative solutions.
      </IntroBold>
      <IntroText>
        After transitioning from a 15-year career in architecture, I completed
        coding bootcamps in Berlin and now specialize in developing clean and
        user-friendly web applications.
      </IntroText>
      <br />
      <IntroText>
        Currently, I&apos;m working on a project for a tour company, where I
        create software to manage their vehicles and improve customer
        experiences. With a passion for staying up-to-date with the latest web
        development trends and technologies, I bring a fresh perspective to
        every project.
      </IntroText>
      <FactCarousel facts={factlist} />
    </Sectional>
  );
}
