import styled from "styled-components";
import COLORS from "../constants/COLORS";
import { Button } from "./Button";

const ActiveButton = styled(Button)`
  background-color: ${COLORS.secondary};
  border-color: ${COLORS.secondary};
`;

export default ActiveButton;
