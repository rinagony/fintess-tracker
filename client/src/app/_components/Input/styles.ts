import colors from "@/shared/colors";
import styled from "styled-components";

const Label = styled.label`
  font-size: 1rem;
  color: #767676;
  text-align: left;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: ${colors.primary};
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export { Label, ErrorMessage}