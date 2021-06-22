import { CharacterProps } from "../components/Character";

export function getFavoritesCharacters(): CharacterProps[] {
  const favoritesCharactersInString = localStorage.getItem(
    "@RickAndMortyWiki:favoritesCharacters"
  ) as string;

  const favoritesCharacters = JSON.parse(
    favoritesCharactersInString
  ) as CharacterProps[];

  return favoritesCharacters;
}
