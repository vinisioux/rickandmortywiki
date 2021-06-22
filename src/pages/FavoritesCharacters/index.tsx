import { useState } from "react";
import { CharacterProps, Character } from "../../components/Character";
import { Header } from "../../components/Header";

import { Container, ContentHeader, Content } from "./styles";
import { Link } from "react-router-dom";
import { getFavoritesCharacters } from "../../utils/getFavoritesCharacters";

export function FavoritesCharacters() {
  const [characters] = useState<CharacterProps[]>(() => {
    const favoriteCharacters = getFavoritesCharacters();

    return favoriteCharacters;
  });

  return (
    <>
      <Header />
      <Container>
        <ContentHeader>
          <h1>Seus peronagens favoritos</h1>

          <Link to="/">Voltar para listagem geral</Link>
        </ContentHeader>
        <Content>
          {characters?.map((character) => {
            return (
              <Character
                key={character.id}
                id={character.id}
                location={character.location}
                gender={character.gender}
                image={character.image}
                name={character.name}
                origin={character.origin}
                species={character.species}
                status={character.status}
                url={character.url}
              />
            );
          })}
        </Content>
      </Container>
    </>
  );
}
