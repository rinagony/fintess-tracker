import colors from "@/shared/colors";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  width: 100%;
  margin: 0 0 1.5rem 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: "*";
    position: absolute;
    left: 0;
    color: ${colors.primary};
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  h2 {
    margin-bottom: 2rem;
    border-bottom: 2px solid ${colors.primary};
  }
`;

export { StyledList, StyledListItem, Wrapper}