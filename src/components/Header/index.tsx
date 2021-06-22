import { Container } from "./styles";

import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

export function Header() {
  const history = useHistory();

  return (
    <Container>
      <img
        src={logo}
        alt="Rick and Morty Wiki"
        onClick={() => history.push("/")}
      />
    </Container>
  );
}
