import { StyledErrorMessage } from "./styles";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

export default ErrorMessage;
