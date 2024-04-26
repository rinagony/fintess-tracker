import styled from "styled-components";

const Title = styled.h2`
@media (max-width: 1000px) {
  font-size: 1rem;
}
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: 400;
  font-style: normal;
  font-family: 'Orbitron', sans-serif;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const appBarStyled = { backgroundColor: "primary", padding: "1rem 0", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'};

export { Title, LogoWrapper, appBarStyled}