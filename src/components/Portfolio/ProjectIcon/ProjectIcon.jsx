import Image from "next/image";
import { styled } from "styled-components";

const PortfolioImageDiv = styled.section`
  margin: 25px 0;
  padding: 0;
  width: 100%;
  border-radius: 10px;
  background-color: var(--element-background);
  border: 2px solid var(--text-color-highlight);

  &:hover {
    background-color: var(--element-background-hover);
  }
`;
const PortfolioImageWrapper = styled.div`
  padding: 10%;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: relative !important;
  object-fit: cover;
`;

const SummaryP = styled.p`
  position: relative;
  margin-top: 10px;
  padding-top: 0;
  z-index: 1;
  font-family: "Roboto Mono", Helvetica, sans-serif;
  font-size: 16px;
 
  
`;

export default function ProjectIcon({ Title, Summary, HRef, Stack }) {
  return (
    <section>
      <h3>{Title}</h3>
      <SummaryP>{Summary}</SummaryP>
      <PortfolioImageDiv>
        <PortfolioImageWrapper>
          <ProjectImage src={HRef} alt={Title} layout="fill" />
        </PortfolioImageWrapper>
      </PortfolioImageDiv>
    </section>
  );
}
