import React from "react";
import styled from "styled-components";
import COLORS from "../constants/COLORS";
import { highscoresMock } from "./models/Highscore";

export const Highscores = () => {
  return (
    <StyledWrapper>
      <StyledTable cellPadding="8" cellSpacing="0">
        <StyledTableHeaderRow>
          <th>Name</th>
          <th>Success solutions</th>
          <th>Tasks</th>
        </StyledTableHeaderRow>
        {highscoresMock.map((x) => (
          <StyledTableRow>
            <td>{x.name}</td>
            <td>{x.numberOfSolutions}</td>
            <td>{x.solvedTasks.join(", ")}</td>
          </StyledTableRow>
        ))}
      </StyledTable>
    </StyledWrapper>
  );
};

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${COLORS.secondary};
`;

const StyledTable = styled.table``;

const StyledTableHeaderRow = styled.tr`
  background-color: ${COLORS.primary};
  border: 0px;
  color: ${COLORS.white};
  text-transform: uppercase;
  font-size: 18px;
`;

const StyledWrapper = styled.main`
  margin: 64px;
  max-width: 600px;
`;

export default Highscores;
