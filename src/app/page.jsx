"use client";
import { styled } from "styled-components";

import BackgroundGrid from "@/components/Background/BackgroundGrid";

const MainCore = styled.main`
  height: 100%;
  width: 100vw;
  position: relative;
  background-color: var(--background-base);
`;

export default function Home() {
  return (
    <MainCore>
      <BackgroundGrid />

    </MainCore>
  );
}
