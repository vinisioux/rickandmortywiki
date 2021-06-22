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
    max-height: 40rem;
    max-width: 30rem;
    height: auto;
    width: auto;
  }

  h1 {
    margin-top: 1rem;
  }
`;

export const Description = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;

  strong {
    font-size: 1.8rem;
  }
`;
