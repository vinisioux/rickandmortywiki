import { Container } from "./styles";
import { useHistory } from "react-router-dom";

export interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  url: string;
}

export function Character({ name, image, id }: CharacterProps) {
  const history = useHistory();
  return (
    <Container onClick={() => history.push(`/character/${id}`)}>
      <img src={image} alt={name} />
      <strong>{name}</strong>
    </Container>
  );
}
