import styled from "styled-components";

export const Div = styled.div`
  width: 22.8125rem;
  height: 7.5rem;
  background: var(--color-grey-1);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    margin-bottom: 1.375rem;
    margin-top: 0.625rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--color-grey-dark);
  }

  button {
    width: 95%;
    height: 3.75rem;
    margin: 0 auto;

    background: var(--color-grey-2);

    border: 0.125rem solid var(--color-grey-2);
    border-radius: 0.5rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1875rem;

    color: var(--color-grey-3);
    margin-bottom: 0.5rem;

    &:hover {
      color: var(--color-white);
      background-color: var(--color-main);
      transition: 0.5s ease;
    }
  }

  @media (max-width: 700px) {
    button {
      margin-bottom: 0.625rem;
    }
  }
`;
