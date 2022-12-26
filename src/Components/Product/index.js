import styled from "styled-components";

export const Li = styled.li`
  width: 15.625rem;
  height: 21.875rem;

  background: #ffffff;
  /* grey-100 */

  border: 0.125rem solid #e0e0e0;
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
    /* identical to box height, or 171% */

    /* color-primary */

    color: #27ae60;

    margin-left: 1.3125rem;
    margin-bottom: 0.875rem;
  }

  .nameP {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    /* or 133% */

    /* grey-100 */

    color: #333333;

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
    /* identical to box height, or 133% */

    /* grey-300 */

    color: #828282;

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

    /* color-primary */

    background: #27ae60;
    /* color-primary */

    border: 0.125rem solid #27ae60;
    border-radius: 0.5rem;

    margin-left: 1.3125rem;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    /* identical to box height */

    color: #ffffff;
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
