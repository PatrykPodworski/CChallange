import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import COLORS from "../constants/COLORS";

const CchallangeLoader = () => (
  <LoaderWrapper>
    <Loader type="Puff" color={COLORS.primary} height={300} width={300} />
  </LoaderWrapper>
);

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default CchallangeLoader;
