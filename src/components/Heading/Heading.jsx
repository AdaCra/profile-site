import { styled } from "styled-components";

const HeaderBar = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  padding: 2% 10%;
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
  return (
    <HeaderBar>
      <MenuTitle>Adam Hannath</MenuTitle>
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuButton>Contact Me</MenuButton>
      </Menu>
    </HeaderBar>
  );
}
