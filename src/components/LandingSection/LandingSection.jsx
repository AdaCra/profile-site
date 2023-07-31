import { styled } from "styled-components";
import FactCarousel from "../FactCarousel/FactCarousel";
import factlist from "../FactCarousel/FactList";
const Sectional = styled.section`
  position: relative;
  z-index: 1;
  margin: 0 10%;
  padding: 0;
  width: 35%;
`;

const IntroBold = styled.p`
  position: relative;
  padding: 200px 0 50px 0;

  z-index: 1;
  font-family: "Inter", Helvetica, sans-serif;
  font-size: 2.5em;
`;
const YellowTextEffect = styled.span`
  color: var(--element-border-hover-select);
`;
const IntroText = styled.p`
  position: relative;
  padding-top: 0;
  z-index: 1;
  font-family: "Roboto Mono", Helvetica, sans-serif;
  font-size: 1.1em;
`;

const SpacerDiv = styled.div`
  height: 50%;
`;
export default function Introduction() {
  return (
    <Sectional>
      <div></div>
      <div>
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
      </div>
      <SpacerDiv></SpacerDiv>
    </Sectional>
  );
}
