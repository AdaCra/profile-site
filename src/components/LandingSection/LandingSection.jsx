import { styled } from "styled-components";
import IntroSummary from "./IntroSummary";
import IntroPhoto from "./IntroPhoto";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: spaced-between;
`;

export default function Introduction() {
  return (
    <IntroContainer>
      <IntroSummary />
      <IntroPhoto />
    </IntroContainer>
  );
}
