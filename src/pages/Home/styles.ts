import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBox = styled.form`
  display: flex;
  align-items: center;

  padding: 1rem;
  border: 1px solid #cecece;
  border-radius: 8px;

  svg {
    height: 2rem;
    width: 2rem;
    color: var(--gray);
  }

  input {
    margin: 0 0.5rem;
    border: none;
  }

  button {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;

export const PagesButtonsContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  align-self: center;
  list-style: none;

  .pagination {
    display: flex;
    justify-content: start;
    font-size: 1.8rem;
    list-style: none;

    a {
      color: var(--black);
      float: left;
      padding: 0.8rem 1.6rem;
      text-decoration: none;
    }

    li.active {
      a {
        background-color: var(--gray);
        color: var(--white);
      }
    }

    a {
      border-radius: 0.5rem;
    }

    li:hover:not(.active) {
      background-color: #ccc;
      border-radius: 0.5rem;
    }
  }
`;
