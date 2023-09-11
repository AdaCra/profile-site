import Image from "next/image";
import { styled } from "styled-components";

const PortfolioImageDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;
const PortfolioImageContainer = styled.div`
  position: relative;
`;
export default function ProjectIcon({ Title, Summary, HRef, Size }) {
  return (
    <section>
      <h3>{Title}</h3>
      <p>{Summary}</p>
      <PortfolioImageContainer>
        <Image src={HRef} alt={Title} width={100} height={100} />
      </PortfolioImageContainer>
    </section>
  );
}
