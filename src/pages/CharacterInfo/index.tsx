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

      setCharacter(response.data);

      const favoritesCharactersInString = localStorage.getItem(
        "@RickAndMortyWiki:favoritesCharacters"
      ) as string;

      if (!!favoritesCharactersInString === false) return;

      const favoritesCharacters = JSON.parse(
        favoritesCharactersInString
      ) as CharacterProps[];

      const isFavoriteCharacter = favoritesCharacters.find(
        (characterFind) => characterFind?.id === Number(characterId)
      );

      setIsFavorite(!!isFavoriteCharacter);
    }
    loadCharacter();
  }, [characterId]);

  async function handleFavorite() {
    if (isFavorite) {
      const favoritesCharactersInString = localStorage.getItem(
        "@RickAndMortyWiki:favoritesCharacters"
      ) as string;

      const favoritesCharacters = JSON.parse(
        favoritesCharactersInString
      ) as CharacterProps[];

      const characterIndex = favoritesCharacters.findIndex(
        (characterFind) => characterFind.id === Number(characterId)
      );

      favoritesCharacters.splice(characterIndex, 1);

      localStorage.setItem(
        "@RickAndMortyWiki:favoritesCharacters",
        JSON.stringify(favoritesCharacters)
      );

      setIsFavorite(false);
    } else {
      const favoritesCharactersInString = localStorage.getItem(
        "@RickAndMortyWiki:favoritesCharacters"
      ) as string;

      if (!!favoritesCharactersInString === false) {
        localStorage.setItem(
          "@RickAndMortyWiki:favoritesCharacters",
          JSON.stringify([character])
        );
        setIsFavorite(true);
        return;
      }

      const favoritesCharacters = JSON.parse(
        favoritesCharactersInString
      ) as CharacterProps[];

      favoritesCharacters.push(character as CharacterProps);

      localStorage.setItem(
        "@RickAndMortyWiki:favoritesCharacters",
        JSON.stringify(favoritesCharacters)
      );
      setIsFavorite(true);
    }
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
          <strong>Gênero: {character?.gender}</strong>
        </Description>
      </Container>
    </>
  );
}
