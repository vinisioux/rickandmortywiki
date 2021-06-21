import { Container } from "./styles";

export interface CharacterProps {
  id: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: {
    name?: string;
  };
  location: {
    name?: string;
  };
  image?: string;
}

export function Character({ id, name, image }: CharacterProps) {
  return (
    <Container>
      <img src={image} alt={name} />
      <strong>{name}</strong>
    </Container>
  );
}
