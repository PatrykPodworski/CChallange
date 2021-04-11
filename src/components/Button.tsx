import styled from "styled-components";
import COLORS from "../constants/COLORS";

export const Button = styled.button`
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.white};

  padding: 8px 16px;
  margin: 16px;
  text-transform: uppercase;
`;

export default Button;
