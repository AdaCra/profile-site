import { styled } from "styled-components";
import { useEffect, useState } from "react";

const FactDiv = styled.div`
  position: relative;
  z-index: 1;
  height: 30px;
  vertical-align: middle;
`;
const FactP = styled.p`
  margin-top: 30px;
  padding: 5px;
  min-width: 0;
  color: var(--text-color-highlight);
  background-color: var(--element-background);
  border: 2px solid var(--text-color-highlight);
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  font-family: "Roboto Mono", Helvetica, sans-serif;
  font-size: 16px;
  @media (max-width: 799px) {
    font-size: 14px;
  }
`;
export default function FactCarousel({ facts }) {
  // State variables for managing the displayed fact, current fact index, and cursor visibility
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [displayedFact, setDisplayedFact] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // useEffect hook to handle the typing effect and cursor blinking
  useEffect(() => {
    let interval;

    // Function to simulate typing effect for a given fact
    const typeFact = (fact) => {
      let currentCharIndex = 0;

      interval = setInterval(() => {
        setDisplayedFact((prevDisplayedFact) => {
          if (currentCharIndex >= fact.length) {
            clearInterval(interval);

            // After typing, wait x before moving to the next fact
            setTimeout(() => {
              setCurrentFactIndex(
                (prevIndex) => (prevIndex + 1) % facts.length
              );
              setDisplayedFact("");
            }, 2000); // 2000 milliseconds = 2 seconds .
            return prevDisplayedFact;
          }

          return prevDisplayedFact + fact.charAt(currentCharIndex++);
        });
      }, 50); // Adjust typing speed by changing the interval value (milliseconds).
    };

    // Initial typing for the first fact
    typeFact(facts[currentFactIndex]);

    // Interval for controlling the blinking rate of the cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // 500 milliseconds = 0.5 seconds I.E. 1 on/off cycle per second.

    // Cleanup function to clear intervals when the component unmounts
    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [facts, currentFactIndex]);

  return (
    <FactDiv>
      <FactP>
        {displayedFact}
        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      </FactP>
    </FactDiv>
  );
}
