import styled from "styled-components";

export const TodosBtn = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 1.5rem;
  width: 1.5rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.625rem 0rem 0.9375rem;

  width: 22.8125rem;
  height: 3.75rem;

  background: var(--color-white);

  border: 0.125rem solid var(--color-grey-2);
  border-radius: 0.5rem;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.25rem;
    gap: 0.625rem;

    width: 6.6875rem;
    height: 2.5rem;

    background: var(--color-main);

    border: 0.125rem solid var(--color-main);
    border-radius: 0.5rem;

    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;

    color: var(--color-white);
    &:hover {
      color: var(--color-main);
      background-color: var(--color-white);
      border: 1px solid var(--color-main);
      transition: 0.5s ease;
    }
  }

  input {
    width: 100%;
    height: 100%;
    border: transparent;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;

    color: var(--color-grey-2);
  }

  @media (max-width: 700px) {
    margin: auto;
    width: 80%;
  }
`;
