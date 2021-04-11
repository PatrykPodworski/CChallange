import React from "react";
import ActiveButton from "../components/ActiveButton";
import Button from "../components/Button";

const HeaderButton = ({ isActive, text }: HeaderButtonProps) =>
  isActive ? <ActiveButton>{text}</ActiveButton> : <Button>{text}</Button>;

type HeaderButtonProps = {
  isActive: boolean;
  text: string;
};

export default HeaderButton;
