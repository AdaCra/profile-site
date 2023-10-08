import { styled } from "styled-components";
import FactCarousel from "../FactCarousel/FactCarousel";
import factList from "../FactCarousel/FactList";

const Sectional = styled.section`
  position: relative;
  z-index: 1;
  margin-top: 200px;
  margin-left: 10vw;
  margin-right: 5vw;
  padding: 0;
  width: 35vw;
  @media (max-width: 799px) {
    margin-top: 100px;
    width: 80vw;
    margin-right: 10vw;
  }
`;

const IntroBold = styled.p`
  position: relative;
  padding: 0 0 50px 0;
  z-index: 1;
  font-family: "Inter", Helvetica, sans-serif;
  font-size: 36px;
  @media (max-width: 799px) {
    font-size: 25px;
    padding-bottom: 20px;
    text-align: center;
  }
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
  @media (max-width: 799px) {
    font-size: 14px;
    text-align: center;
  }
`;

export default function IntroSummary() {
  return (
    <>
      <hr id="about" />
      <Sectional>
        <IntroBold>
          Hi, I&apos;m Adam, a&nbsp;
          <YellowTextEffect>junior full-stack web developer</YellowTextEffect>
          &nbsp;with a passion for creating innovative solutions.
        </IntroBold>
        <IntroText>
          After transitioning from a 15-year career in architecture, I completed
          two coding boot camps in Berlin and now specialize in developing clean
          and user-friendly web applications.
        </IntroText>
        <br />
        <IntroText>
          Currently, I&apos;m working on a project for a tour company, where I
          create software to manage their vehicles and improve customer
          experiences. With a passion for staying up-to-date with the latest web
          development trends and technologies, I bring a fresh perspective to
          every project.
        </IntroText>
        <FactCarousel facts={factList} />
      </Sectional>
    </>
  );
}
