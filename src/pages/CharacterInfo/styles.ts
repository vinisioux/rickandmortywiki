import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    cursor: pointer;
    margin: 2rem 0;
    background: var(--gray);
    color: var(--white);
    padding: 1rem;
    border-radius: 4px;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1rem;
    padding: 1rem;
    width: 8rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 2rem;
      width: 2rem;
    }
  }

  button,
  .character-is-favorite {
    background: var(--cyan);
    color: var(--black);
    transition: background-color 0.2s;

    &:hover {
      background: var(--red);
      color: var(--white);
    }
  }

  button,
  .character-is-not-favorite {
    background: var(--red);
    color: var(--white);
    transition: background-color 0.2s;

    &:hover {
      background: var(--cyan);
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
