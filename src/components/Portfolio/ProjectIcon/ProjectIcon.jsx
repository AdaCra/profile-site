import Image from "next/image";
import { styled } from "styled-components";

const PortfolioImageDiv = styled.section`
  margin: 25px 0;
  padding: 0;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--element-background);
  border: 2px solid var(--text-color-highlight);

  /* Use the & selector for the hover effect */
  &:hover {
    background-color: var(--element-background-hover);
  }

  @media (max-width: 799px) {
    margin-bottom: 50px;
  }
`;

const PortfolioImageWrapper = styled.div`
  padding: 10%;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  &:hover {
    background-color: var(--element-background-hover);
  }
`;

const ProjectImage = styled(Image)`
  position: relative !important;
  object-fit: contain;
`;

const SummaryP = styled.p`
  position: relative;
  margin-top: 10px;
  padding-top: 0;
  z-index: 1;
  font-family: "Roboto Mono", Helvetica, sans-serif;
  font-size: 16px;
  height: "";
  @media (max-width: 1630px) {
    height: 65px;
  }
  @media (max-width: 1135px) {
    height: 87px;
  }
  @media (max-width: 880px) {
    height: 107px;
  }
  @media (max-width: 799px) {
    height: 50px;
  }
`;

export default function ProjectIcon({ Title, Summary, HRef, Stack, URL }) {
  const handleClick = () => {
    window.open(URL, "_blank");
  };
  return (
    <section>
      <h3>{Title}</h3>
      <SummaryP>{Summary}</SummaryP>
      <PortfolioImageDiv onClick={handleClick}>
        <PortfolioImageWrapper>
          <ProjectImage
            src={HRef}
            alt={Title}
            fill
            sizes="(min-width: 10000px) 30vw,(max-width: 799px) 64vw"
          />
        </PortfolioImageWrapper>
      </PortfolioImageDiv>
    </section>
  );
}
