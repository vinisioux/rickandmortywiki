import { FaSpinner } from "react-icons/fa";

import { Container } from "./styles";

interface LoadingProps {
  isLoading: boolean;
  color: string;
  size: number;
}

export function Loading({ color, isLoading, size }: LoadingProps) {
  return (
    <Container isLoading={isLoading} color={color}>
      <FaSpinner size={size} />
    </Container>
  );
}
