import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import { copyToClipboard } from "./ContactEmail";

const ContactsWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 80vw;
  justify-content: space-between;
  @media (max-width: 350px) {
    flex-wrap: wrap;
  }
`;
export default function ContactBar() {
  return (
    <ContactsWrapper>
      <a href="https://github.com/AdaCra" target="_blank">
        <Image
          src="/gitcat.png"
          alt="GitHub Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a href="https://www.linkedin.com/in/adam-hannath/" target="_blank">
        <Image
          src="/linkedin.png"
          alt="LinkedIn Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a href="https://www.xing.com/profile/Adam_Hannath/cv" target="_blank">
        <Image
          src="/xing.png"
          alt="Xing Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a
        href="mailto:ahannath.portfoliosite@gmail.com?subject=Portfolio%20Website%20Contact%20Email&body=(Enter%20your%20message%20here)"
        target="_blank"
        onClick={() => {
          copyToClipboard();
        }}
      >
        <Image
          src="/email.png"
          alt="Email"
          width={50}
          height={50}
          priority
        />
      </a>
      <a href="/Adam Hannath - CV.pdf" target="_blank">
        <Image
          src="/resume.png"
          alt="Download Resume"
          width={50}
          height={50}
          priority
        />
      </a>
    </ContactsWrapper>
  );
}
