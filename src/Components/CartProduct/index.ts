import styled from "styled-components";

export const Li = styled.li`
  margin-top: 10px;
  width: 90%;
  height: 5rem;
  min-height: 5rem;
  display: flex;

  img {
    height: 4.375rem;
    width: 4.375rem;
  }

  .nameText {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--color-grey-dark);

    margin-left: 0.9375rem;
    margin-bottom: 0.3125rem;
  }

  .categoryText {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;

    color: var(--color-grey-3);

    margin-left: 0.9375rem;
  }

  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  button {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.9375rem;

    color: var(--color-grey-btn);
    border: transparent;
  }
`;
