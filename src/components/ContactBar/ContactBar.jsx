import Image from "next/image";
import { styled } from "styled-components";

const ContactsWrapper = styled.div`
  margin: auto;
  display: flex;
  gap: 1em;
  width: 400px;
  justify-content: space-between;
`;
export default function ContactBar() {
  return (
    <ContactsWrapper>
      <a href="https://github.com/AdaCra">
        <Image
          src="/gitcat.png"
          alt="GitHub Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a href="https://www.linkedin.com/in/adam-hannath/">
        <Image
          src="/linkedin.png"
          alt="LinkedIn Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a href="https://www.xing.com/profile/Adam_Hannath/cv">
        <Image
          src="/xing.png"
          alt="Xing Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a href="mailto:ahannath.portfoliosite@gmail.com">
        <Image
          src="/email.png"
          alt="Xing Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a href="/Adam Hannath - CV.pdf">
        <Image
          src="/resume.png"
          alt="Xing Profile"
          width={50}
          height={50}
          priority
        />
      </a>
    </ContactsWrapper>
  );
}
