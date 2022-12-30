import styled from "styled-components";

export const Li = styled.li`
  width: 15.625rem;
  height: 21.875rem;

  background: var(--color-white);

  border: 0.125rem solid var(--color-grey-2);
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 45%;
    border-radius: 0.3125rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .priceP {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--color-main);

    margin-left: 1.3125rem;
    margin-bottom: 0.875rem;
  }

  .nameP {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;

    color: var(--color-grey-dark);

    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem;
    margin-left: 1.3125rem;
  }

  .categoryP {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;

    color: var(--color-grey-3);

    margin-left: 1.3125rem;
    margin-bottom: 0.875rem;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.25rem;

    width: 6.625rem;
    height: 2.5rem;

    background: var(--color-main);

    border: 0.125rem solid var(--color-main);
    border-radius: 0.5rem;

    margin-left: 1.3125rem;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
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
  @media (max-width: 700px) {
    min-width: 15.625rem;
    width: 70%;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
    }

    button {
      width: 80%;
    }
  }
`;
