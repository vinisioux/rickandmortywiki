import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    height: 40rem;
    width: 30rem;
  }

  strong {
    margin-top: 1rem;
    font-size: 2.2rem;
    width: 30rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
