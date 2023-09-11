import { useEffect, useState } from "react";
import { styled } from "styled-components";

const HeaderBar = styled.nav`
  position: ${({ $isScrollingDown }) =>
    $isScrollingDown === "true" ? "absolute" : "fixed"};
  background-color: var(--background-highlight);
  z-index: 4;
  top: 0;
  padding: 0 10%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;
const Menu = styled.ul`
  width: 400px;
  color: var(--text-color-main);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MenuItem = styled.li`
  cursor: pointer;
  list-style: none;

  width: 150px;
  padding: 15px 15px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 16px;
  &:hover {
    color: var(--text-color-highlight);
    text-shadow: 0 0 10px var(--element-text-hover-select);
  }

  a {
    text-decoration: none;
    color: var(--text-color-main);
  }
`;
const MenuButton = styled(MenuItem)`
  border: 2px solid var(--text-color-main);
  border-radius: 10px;
  margin-left: 25px;
  &:hover {
    background-color: var(--text-color-main);
    color: var(--background-highlight);
    box-shadow: 0 0 25px var(--element-border-hover-select);
  }
`;

const MenuTitle = styled.h1`
  cursor: pointer;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-top: 25px;
  height: 50px;
`;

export default function Heading() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setIsScrollingDown(true);
    } else if (e.deltaY < 0) {
      setIsScrollingDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <HeaderBar $isScrollingDown={isScrollingDown.toString()}>
      <MenuTitle>Adam Hannath</MenuTitle>
      <Menu>
        <MenuItem>
          <a href="#about">About</a>
        </MenuItem>
        <MenuItem>
          <a href="#projects">Projects</a>
        </MenuItem>
        <MenuButton>Contact Me</MenuButton>
      </Menu>
    </HeaderBar>
  );
}
