import { FormEvent, useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import { CharacterProps, Character } from "../../components/Character";
import { Header } from "../../components/Header";
import Pagination from "react-js-pagination";
import { FaSearch, FaChevronRight } from "react-icons/fa";

import { Loading } from "../../components/Loading";
import { Container, SearchBox, Content, PagesButtonsContainer } from "./styles";
import { toast } from "react-toastify";

type CharactersState = {
  count: number;
  next: string;
  pages: number;
  prev: any;
};

export function Home() {
  const listRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [characters, setCharacters] = useState<CharacterProps[]>();
  const [searchedCharacters, setSearchedCharacters] = useState<
    CharacterProps[]
  >({} as CharacterProps[]);

  const [paginationProps, setPaginationProps] = useState<CharactersState>();
  const [searchPaginationProps, setSearchPaginationProps] =
    useState<CharactersState>();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);

  const [isLoadingCharacters, setIsLoadingCharacters] =
    useState<boolean>(false);

  const [buttonCleanSearch, setButtonCleanSearch] = useState<boolean>(false);

  useEffect(() => {
    setIsLoadingCharacters(true);
    api.get(`/character/?page=${currentPage}`).then((response) => {
      setPaginationProps(response.data.info);
      setCharacters(response.data.results);
      setIsLoadingCharacters(false);
    });
  }, [currentPage]);

  useEffect(() => {
    api
      .get(
        `character/?name=${searchInputRef.current?.value}&page=${searchCurrentPage}`
      )
      .then((response) => {
        setSearchedCharacters(response.data.results);
        setSearchPaginationProps(response.data.info);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 404") {
          return toast.error(
            `Personagem "${searchInputRef.current?.value} não encontrado"`
          );
        }
        console.log(err);
      });
  }, [searchCurrentPage]);

  function handleChangePage(prevOrNext: number) {
    setCurrentPage(prevOrNext);
    const div = listRef.current;

    if (div) {
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  function handleSearchChangePage(prevOrNext: number) {
    setSearchCurrentPage(prevOrNext);
    const div = listRef.current;

    if (div) {
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!searchInputRef.current?.value?.trim()) {
      return toast.error("Por favor digite um nome de um personagem");
    }
    setIsLoadingCharacters(true);
    api
      .get(
        `character/?name=${searchInputRef.current?.value}&page=${searchCurrentPage}`
      )
      .then((response) => {
        setSearchedCharacters(response.data.results);
        setSearchPaginationProps(response.data.info);
        setButtonCleanSearch(true);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 404") {
          return toast.error(
            `Personagem "${searchInputRef.current?.value} não encontrado"`
          );
        }
        console.log(err);
      });

    setIsLoadingCharacters(false);
  }

  function handleCleanSearch() {
    setSearchedCharacters([] as CharacterProps[]);
    setSearchCurrentPage(1);
    setCurrentPage(1);
    setButtonCleanSearch(false);
  }

  return (
    <>
      <Header />
      <Container ref={listRef}>
        <SearchBox onSubmit={handleSubmit}>
          <FaSearch />
          <input placeholder="Buscar um personagem" ref={searchInputRef} />
          <button type="submit">
            <FaChevronRight />
          </button>
        </SearchBox>
        {buttonCleanSearch && (
          <button type="button" onClick={handleCleanSearch}>
            Limpar busca
          </button>
        )}
        <Content>
          {isLoadingCharacters ? (
            <Loading
              color="#2d2d2d"
              isLoading={isLoadingCharacters}
              size={30}
            />
          ) : !!searchedCharacters[0]?.id ? (
            searchedCharacters?.map((character) => {
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
            })
          ) : (
            characters?.map((character) => {
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
            })
          )}
        </Content>
        <PagesButtonsContainer>
          {!!searchedCharacters[0]?.id ? (
            <Pagination
              activePage={searchCurrentPage}
              itemsCountPerPage={20}
              totalItemsCount={
                searchPaginationProps?.count ? searchPaginationProps.count : 671
              }
              pageRangeDisplayed={10}
              onChange={handleSearchChangePage}
            />
          ) : (
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={20}
              totalItemsCount={
                paginationProps?.count ? paginationProps.count : 671
              }
              pageRangeDisplayed={10}
              onChange={handleChangePage}
            />
          )}
        </PagesButtonsContainer>
      </Container>
    </>
  );
}
