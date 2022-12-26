import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.625rem 0rem 0.9375rem;

  width: 22.8125rem;
  height: 3.75rem;

  background: #ffffff;
  /* grey-100 */
  border: 0.125rem solid #e0e0e0;
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

    /* color-primary */

    background: #27ae60;
    /* color-primary */

    border: 0.125rem solid #27ae60;
    border-radius: 0.5rem;

    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    /* identical to box height */

    color: #ffffff;
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

    /* grey-100 */

    color: #e0e0e0;
  }

  @media (max-width: 700px) {
    margin: auto;
    width: 80%;
  }
`;
