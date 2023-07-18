import { styled } from "styled-components";

const GridStructure = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 0.2fr 0.001fr 1fr 0.001fr 1fr 0.001fr 1fr 0.001fr 1fr 0.001fr 1fr 0.001fr 0.2fr;
  height: 140vh;
  width: 100vw;
  background-color: var(--background-base);
  z-index : 0;

`;

const GridLine = styled.div`
  width: 2px;
  background: var(--background-grid-color);
  background: rgb(255, 0, 0);
  background: linear-gradient(
    180deg,
    var(--background-grid-color) 0%,
    var(--background-grid-color) 85%,
    var(--background-base) 90%
  );
`;

const GridColumn = styled.div`
  height: 100%;
  position: relative;
  background-color: var(--background-highlight);
  clip-path: polygon(
    0 0, 
    100% 0, 
    100% calc(100% - 
        ${(props) => props.endValue}), 
    0 calc(100% - 
        ${(props) => props.startValue}))
}
`;
// ${props => 50 + props.position * 10}

export default function BackgroundGrid() {
  return (
    <GridStructure>
      <GridColumn startValue="34%" endValue="35%" />
      <GridLine />
      <GridColumn startValue="35%" endValue="40%" />
      <GridLine />
      <GridColumn startValue="40%" endValue="45%" />
      <GridLine />
      <GridColumn startValue="45%" endValue="50%" />
      <GridLine />
      <GridColumn startValue="35%" endValue="45%" />
      <GridLine />
      <GridColumn startValue="34%" endValue="39%" />
      <GridLine />
      <GridColumn startValue="39%" endValue="40%" />
    </GridStructure>
  );
}
