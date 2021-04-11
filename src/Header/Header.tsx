import React, { useCallback } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../constants/COLORS";
import ROUTES from "../constants/ROUTES";
import HeaderButton from "./HeaderButton";

const Header = () => {
  const history = useHistory();
  const location = useLocation();

  const onHeadingClick = useCallback(() => history.push(ROUTES.submissions), [
    history,
  ]);

  return (
    <StyledHeader>
      <StyledH1 onClick={onHeadingClick}>C Challange</StyledH1>
      <nav>
        <Link to={ROUTES.submissions}>
          <HeaderButton
            isActive={location.pathname === ROUTES.submissions}
            text="Solve"
          />
        </Link>
        <Link to={ROUTES.highscores}>
          <HeaderButton
            isActive={location.pathname === ROUTES.highscores}
            text="Top 3"
          />
        </Link>
      </nav>
    </StyledHeader>
  );
};

const StyledH1 = styled.h1`
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 64px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;

export default Header;
