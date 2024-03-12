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

const MenuItems = styled.ul<DrawerProps>`
  list-style: none;
  padding: 30px 0;
  margin: ${(props) => (props.isopen ? "35px 0" : "0")};
`;

const MenuItem = styled.li<{ isActive: boolean }>`
  padding: 10px;
  margin-top: 10px;
  text-wrap: nowrap;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease;
  ${(props) =>
    props.isActive &&
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

const MenuItemWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    margin-left: 10px;
  }
`;

export { DrawerContainer, MenuItems, MenuItem, CollapseButton, MenuItemWrapper}