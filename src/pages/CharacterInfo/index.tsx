import { useEffect, useState } from "react";
import { CharacterProps } from "../../components/Character";
import { api } from "../../services/api";
import { useParams } from "react-router";

import { Header } from "../../components/Header";

import { Container, HeaderInfo, Description } from "./styles";
import { getFavoritesCharacters } from "../../utils/getFavoritesCharacters";

type CharacterInfoParams = {
  id: string;
};

export function CharacterInfo() {
  const { id: characterId } = useParams<CharacterInfoParams>();

  const [character, setCharacter] = useState<CharacterProps>();
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(() => {
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

    return !!isFavoriteCharacter;
  });
  const [mouseEnterButtonNotFavorite, setMouseEnterButtonNotFavorite] =
    useState<boolean>(false);
  const [mouseEnterButtonFavorite, setMouseEnterButtonFavorite] =
    useState<boolean>(false);

  useEffect(() => {
    async function loadCharacter() {
      const response = await api.get(`character/${characterId}`);

      setCharacter(response.data);
    }
    loadCharacter();
  }, [characterId]);

  async function handleFavorite() {
    if (isFavorite) {
      // const favoritesCharactersInString = localStorage.getItem(
      //   "@RickAndMortyWiki:favoritesCharacters"
      // ) as string;

      // const favoritesCharacters = JSON.parse(
      //   favoritesCharactersInString
      // ) as CharacterProps[];

      const favoritesCharacters = getFavoritesCharacters();

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

      const favoritesCharacters = getFavoritesCharacters();

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
