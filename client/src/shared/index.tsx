import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  display: inline-block; 
  border-bottom: 2px solid #ff4081;
`;
const PageHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export { Title, PageHeaderWrapper };