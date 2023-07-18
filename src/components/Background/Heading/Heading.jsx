import { styled } from "styled-components";

const HeaderBar = styled.section`
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
  vertical-align: middle;
  padding: 15px 30px;
  &:hover {
    color: var(--text-color-highlight);
  }
`;
const MenuButton = styled(MenuItem)`
  border: 2px solid var(--text-color-main);
  border-radius: 10px;
  &:hover {
    background-color: var(--text-color-main);
    color: var(--background-highlight);
    box-shadow: 0 0 25px var(--element-border-hover-select);
  }
`;

export default function Heading() {
  return (
    <HeaderBar>
      <h1>Adam Hannath</h1>
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuButton>Contact Me</MenuButton>
      </Menu>
    </HeaderBar>
  );
}
