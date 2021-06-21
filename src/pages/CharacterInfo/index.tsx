import { useEffect, useState } from "react";
import { CharacterProps } from "../../components/Character";
import { api } from "../../services/api";
import { useParams } from "react-router";

import { Header } from "../../components/Header";

import { Container, HeaderInfo, Description } from "./styles";

type CharacterInfoParams = {
  id: string;
};

export function CharacterInfo() {
  const [character, setCharacter] = useState<CharacterProps>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [mouseEnterButtonNotFavorite, setMouseEnterButtonNotFavorite] =
    useState<boolean>(false);
  const [mouseEnterButtonFavorite, setMouseEnterButtonFavorite] =
    useState<boolean>(false);

  const { id: characterId } = useParams<CharacterInfoParams>();

  useEffect(() => {
    async function loadCharacter() {
      const response = await api.get(`character/${characterId}`);
      console.log("aaa", response);

      setCharacter(response.data);
      // setIsFavorite(response.data.isFavorite);
    }
    loadCharacter();
  }, [characterId]);

  async function handleFavorite() {
    // if (isFavorite) {
    //   await api.delete(`marvel/favorites/characters/${characterId}`);
    //   setIsFavorite(false);
    // } else {
    //   await api.post(`marvel/favorites/characters`, {
    //     marvel_character_id: characterId,
    //   });
    //   setIsFavorite(true);
    // }
  }

  return (
    <>
      <Header />
      <Container>
        <HeaderInfo>
          <img src={`${character?.image}`} alt={character?.name} />
          {isFavorite ? (
            <button
              type="button"
              className="character-is-favorite"
              onMouseEnter={() => setMouseEnterButtonFavorite(true)}
              onMouseLeave={() => setMouseEnterButtonFavorite(false)}
              onClick={handleFavorite}
            >
              {mouseEnterButtonFavorite ? "Desfavoritar" : "É favorito"}
            </button>
          ) : (
            <button
              type="button"
              className="character-is-not-favorite"
              onMouseEnter={() => setMouseEnterButtonNotFavorite(true)}
              onMouseLeave={() => setMouseEnterButtonNotFavorite(false)}
              onClick={handleFavorite}
            >
              {mouseEnterButtonNotFavorite ? "Favoritar" : "Não é favorito"}
            </button>
          )}
          <h1>{character?.name}</h1>
        </HeaderInfo>
        <Description>
          <strong>Descrição: </strong>
        </Description>
      </Container>
    </>
  );
}
