import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
