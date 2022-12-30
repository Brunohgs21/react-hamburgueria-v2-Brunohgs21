import styled from "styled-components";

export const List = styled.ul`
  width: 60%;
  height: 31.25rem;
  background-color: transparent;
  overflow-x: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  @media (max-width: 700px) {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    width: 100%;
    padding: 0 0.625rem 0 0rem;
    justify-content: flex-start;
  }
`;

export const Loading = styled.h2`
  color: var(--color-main-2);
  font-family: "inter", sans-serif;
  background-color: var(--color-grey-1);
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12.5rem;
  width: 25rem;
  border: 1px solid var(--color-main-2);
  border-radius: 0.5rem;
`;
