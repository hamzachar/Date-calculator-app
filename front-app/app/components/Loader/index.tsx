import { LoadingContainer, Spinner } from "./styles";

const Loader: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loader;
