import Image from "next/image";
import { useState } from "react";
import { styled } from "styled-components";

const PhotoBlock = styled.div`
  width: 35vw;
  min-width: 265px;
  @media (max-width: 799px) {
    width: 80vw;
    margin: 0 auto;
  }
`;
const PhotoDiv = styled.section`
  postion: relative;
  margin-top: 200px;
  margin-right: 10%;
  margin-left: 5%;
  padding: 0;
  z-index: 1;
  height: 300px;
  border-radius; 50%;
  text-align: right;
  min-width: 265px;
  @media (max-width: 799px) {
    margin: 100px auto 0;
    text-align: center;
  }
`;

const ProfilePic = styled(Image)`
  position: relative;
  border-radius: 50%;
  z-index: 1;
  animation: ${({ $showAnimation }) =>
    $showAnimation === "true" ? "none" : "pictureShake 5s infinite"};

  @keyframes pictureShake {
    0,
    100% {
      transform: translate(0, 0);
    }
    17%,
    28%,
    30% {
      transform: translate(0, 0);
    }
    17.5%,
    22.5%,
    27.5% {
      transform: translate(2px, 0);
    }
    20%,
    25% {
      transform: translate(-2px, 0);
    }
  }
`;

const HandWave = styled(Image)`
  position: relative;
  z-index: 3;
  right: 50px;
  top: -230px;
  transform: translate(-250%, -50%);
  transform-origin: bottom right;
  opacity: ${({ $showAnimation }) => ($showAnimation === "true" ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  animation: ${({ $showAnimation }) =>
    $showAnimation === "true" ? "wave 0.5s infinite" : "none"};
  &:hover {
    right: 70px;
    top: -210px;
    animation: highFive 0.5s linear forwards;
    transition: opacity 0.3s ease-in-out;
    transform: translate(-360%, 40%) rotate(45deg);
  }
  @keyframes highFive {
    0%,
    100% {
      transform: translate(-255%, -60%) rotate(45deg) scale(1);
    }
    50% {
      transform: translate(-255%, -60%) rotate(45deg) scale(1.2);
    }
  }
  @keyframes wave {
    0%,
    100% {
      transform: translate(-250%, -50%) rotate(-20deg);
    }
    50% {
      transform: translate(-250%, -50%) rotate(20deg);
    }
  }
  @media (max-width: 799px) {
    display: none;
  }
`;

const HireButton = styled.button`
  position: absolute;
  padding: 15px 30px;
  border: 1px solid black;
  border-radius: 50px;
  border-radius: 50px;
  background: #5754ff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.65);
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 16px;
  transform: translate(-210%, -195%) rotate(45deg);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $showAnimation }) => ($showAnimation === "true" ? "1" : "0")};
  animation: ${({ $showAnimation }) =>
    $showAnimation === "true" ? "hireMeSwing 0.75s linear forwards" : "none"};
  @keyframes hireMeSwing {
    0% {
      transform: translate(-210%, -195%) rotate(45deg);
    }
    100% {
      transform: translate(-250%, -110%) rotate(45deg);
    }
  }
  @media (max-width: 799px) {
    z-index: 10;
    margin: 0 auto;
    padding: 10px 15px;
    width: 25vw;
    animation: none;
    transform: translate(-50%, -100%) rotate(0deg);
  }
`;

const DownloadLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export default function IntroPhoto() {
  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <PhotoBlock>
      <PhotoDiv
        onMouseEnter={() => setShowAnimation(true)}
        onMouseLeave={() => setShowAnimation(false)}
      >
        <ProfilePic
          $showAnimation={showAnimation.toString()}
          src="/HMF_4810_small.webp"
          alt="Profile Pic"
          height={265}
          width={265}
          priority
        />
        <div>
          <HandWave
            className="Hand"
            $showAnimation={showAnimation.toString()}
            src="/handwave.png"
            alt="handwave"
            height={68}
            width={68}
            priority
          />
          <HireButton
            className="Buttons"
            $showAnimation={showAnimation.toString()}
          >
            <DownloadLink href="/Adam Hannath - CV.pdf" download>
              for hire!
            </DownloadLink>
          </HireButton>
        </div>
      </PhotoDiv>
    </PhotoBlock>
  );
}
