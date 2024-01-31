import { StyledTitle } from "./styles";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const Title: React.FC<ErrorMessageProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
