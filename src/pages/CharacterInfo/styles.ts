import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 4px;
  }

  button,
  .character-is-favorite {
    background: #00dca8;
    color: var(--black);
    transition: background-color 0.2s;

    &:hover {
      background: #ff0040;
      color: var(--white);
    }
  }

  button,
  .character-is-not-favorite {
    background: #ff0040;
    color: var(--white);
    transition: background-color 0.2s;

    &:hover {
      background: #00dca8;
      color: var(--black);
    }
  }

  img {
    height: auto;
    width: 60%;
  }

  h1 {
    margin-top: 1rem;
  }
`;

export const Description = styled.div`
  margin-top: 1rem;
  width: 60%;

  span {
    font-size: 2.2rem;
    width: 30rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    margin: 2rem 0;

    main {
      margin-top: 2rem;
      display: grid;
      grid-gap: 4rem;
      grid-template-columns: repeat(5, 1fr);
    }

    p {
      font-size: 1.6rem;
      margin-top: 0.3rem;
      transition: transform 0.2s;

      a {
        color: var(--black);
      }

      &:hover {
        transform: translateX(10px);
        background: #ececec;
        border-radius: 5px;
      }
    }
  }
`;
