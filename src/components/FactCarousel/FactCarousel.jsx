import { styled } from "styled-components";
import { useEffect, useState } from "react";

const FactDiv = styled.div`
  position: relative;
  z-index: 1;
  height: 30px;
  vertical-align: middle;
`;
const FactP = styled.p`
  margin-top: 50px;
  padding: 5px;
  min-width: 0;
  color: var(--text-color-highlight);
  background-color: var(--element-background);
  border: 2px solid var(--text-color-highlight);
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  opacity: ${(props) => props.$showCursor}) ? 1 : 0;
`;
export default function FactCarousel({ facts }) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [displayedFact, setDisplayedFact] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let interval;

    const typeFact = (fact) => {
      let currentCharIndex = 0;

      interval = setInterval(() => {
        setDisplayedFact((prevDisplayedFact) => {
          if (currentCharIndex >= fact.length) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentFactIndex(
                (prevIndex) => (prevIndex + 1) % facts.length
              );
              setDisplayedFact("");
            }, 2000); // Wait for 2 seconds before moving to the next fact.
            return prevDisplayedFact;
          }

          return prevDisplayedFact + fact.charAt(currentCharIndex++);
        });
      }, 50); // Adjust typing speed by changing the interval value (milliseconds).
    };

    typeFact(facts[currentFactIndex]);

    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Controls the blinking rate of the cursor.

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
