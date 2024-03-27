import styled, { css } from "styled-components";

interface DrawerProps {
  isopen: boolean;
}

const DrawerContainer = styled.div<DrawerProps>`
  width: ${(props) => (props.isopen ? "220px" : "80px")};
  height: 100vh;
  position: relative;
  padding: 0 10px;
  background: #eaf6f6;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const MenuItems = styled.div<DrawerProps>`
  list-style: none;
  padding: 30px 0;
  margin: ${(props) => (props.isopen ? "35px 0" : "0")};
`;

const MenuItem = styled.div<{ isactive: boolean, issubpage?: boolean }>`
  padding: 10px;
  margin-top: ${(props) => (props.issubpage === true ? "0" : "10px")};
  text-wrap: nowrap;
  color: #333;
  font-size: ${(props) => (props.issubpage === true? "1.1rem" : "1.2rem")};
  cursor: pointer;
  transition: 0.3s ease;
  ${(props) =>
    props.isactive &&
    css`
      font-weight: 500;
      color: #2d9596;
    `}
`;

const CollapseButton = styled.button<DrawerProps>`
  background: #F2F597;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  top: 10px;
  cursor: pointer;
  position: ${(props) => (props.isopen ? "absolute" : "relative")};
  right: ${(props) => (props.isopen ? "5px" : "auto")};
  padding: 4px 5px;
  border: none;
  border-radius: 50%;
`;

interface MenuItemWrapperProps {
  hasSubpages: boolean;
}

const MenuItemWrapper = styled.span<MenuItemWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => (props.hasSubpages ? "#888c" : "inherit")};
  cursor: ${(props) => (props.hasSubpages ? "auto" : "pointer")};
  span {
    margin-left: 10px;
  }
`;

const SubpageWrapper = styled.div`
  padding-left: 1rem;
  padding-top: 0.5rem;

`

export { DrawerContainer, MenuItems, MenuItem, CollapseButton, MenuItemWrapper, SubpageWrapper}