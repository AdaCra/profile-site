import { styled } from "styled-components";
import IntroSummary from "../Intro/IntroSummary";
import IntroPhoto from "../Intro/IntroPhoto";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;

  @media (max-width: 799px) {
    flex-direction: column;
    align-content: center;
    justify-items: space-between;
`;

export default function Introduction() {
  return (
    <IntroContainer>
      <IntroSummary />
      <IntroPhoto />
    </IntroContainer>
  );
}
