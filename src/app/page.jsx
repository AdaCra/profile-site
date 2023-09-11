"use client";
import BackgroundGrid from "@/components/Background/BackgroundGrid";
import Heading from "@/components/Heading/Heading";
import Introduction from "@/components/LandingSection/LandingSection";
import ProjectGrid from "@/components/Portfolio/ProjectGrid";
import { styled } from "styled-components";

const MainCore = styled.main`
  width: 100vw;
  background-color: var(--background-base);
`;

export default function Home() {
  return (
    <MainCore>
      <Heading />
      <BackgroundGrid />
        <Introduction />
        <ProjectGrid />
    </MainCore>
  );
}
