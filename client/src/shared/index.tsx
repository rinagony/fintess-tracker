import styled from "styled-components";
import colors from "./colors";
import Container from "@mui/material/Container";

const PageWrapper = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 2rem;
`

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  display: inline-block;
`;

const ModalTitle = styled.h3`
@media (max-width: 500px) {
margin-bottom: 1rem;
}
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  display: inline-block; 
  border-bottom: 2px solid ${colors.primary};
`

const PageHeaderWrapper = styled.div`
@media (max-width: 500px) {
  flex-direction: column;
}
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export { Title, PageHeaderWrapper, ModalTitle, PageWrapper };