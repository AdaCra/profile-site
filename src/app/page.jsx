"use client";
import BackgroundGrid from "@/components/Background/BackgroundGrid";
import ContactBar from "@/components/ContactBar/ContactBar";
import Footer from "@/components/Footer/Footer";
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
    <>
      <Heading />
      <MainCore>
        <BackgroundGrid />
        <Introduction />
        <ProjectGrid />
        <ContactBar />
      </MainCore>
      <Footer />
    </>
  );
}
