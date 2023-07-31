import { styled } from "styled-components";

const GridStructure = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 0.2fr 0.001fr repeat(5, 1fr 0.001fr) 0.2fr;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-base);
  z-index: 0;
`;

const GridLine = styled.div`
  position: relative;
  width: 2px;
  background: var(--background-grid-color);
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
  }
`;

const GridColumn = styled.div`
  position: relative;
  background-color: var(--background-highlight);
  height: 100%;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - ${(props) => props.$endValue}),
    0 calc(100% - ${(props) => props.$startValue})
  );
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
  }
`;

export default function BackgroundGrid() {
  return (
    <GridStructure>
      <GridColumn $startValue="4%" $endValue="5%" />
      <GridLine />
      <GridColumn $startValue="5%" $endValue="10%" />
      <GridLine />
      <GridColumn $startValue="10%" $endValue="15%" />
      <GridLine />
      <GridColumn $startValue="15%" $endValue="20%" />
      <GridLine />
      <GridColumn $startValue="4%" $endValue="14%" />
      <GridLine />
      <GridColumn $startValue="4%" $endValue="9%" />
      <GridLine />
      <GridColumn $startValue="9%" $endValue="10%" />
    </GridStructure>
  );
}
