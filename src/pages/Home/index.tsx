import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import { CharacterProps, Character } from "../../components/Character";
import { Header } from "../../components/Header";
import Pagination from "react-js-pagination";

import { Container, Content, PagesButtonsContainer } from "./styles";

type CharactersState = {
  count: number;
  next: string;
  pages: number;
  prev: any;
};

export function Home() {
  const [characters, setCharacters] = useState<CharacterProps[]>();
  const [paginationProps, setPaginationProps] = useState<CharactersState>();
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    api.get(`/character/?page=${currentPage}`).then((response) => {
      setPaginationProps(response.data.info);
      setCharacters(response.data.results);
    });
  }, [currentPage]);

  console.log(characters);
  console.log(paginationProps);

  function handleChangePage(prevOrNext: number) {
    setCurrentPage(prevOrNext);

    const div = listRef.current;

    if (div) {
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  return (
    <>
      <Header />
      <Container ref={listRef}>
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
        <PagesButtonsContainer>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={20}
            totalItemsCount={
              paginationProps?.count ? paginationProps.count : 671
            }
            pageRangeDisplayed={10}
            onChange={handleChangePage}
          />
        </PagesButtonsContainer>
      </Container>
    </>
  );
}