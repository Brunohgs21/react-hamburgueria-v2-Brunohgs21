import styled from "styled-components";

export const Div = styled.div`
  width: 22.8125rem;
  height: 7.5rem;
  background: #f5f5f5;
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

    color: #333333;
  }

  button {
    width: 95%;
    height: 3.75rem;
    margin: 0 auto;

    background: #e0e0e0;

    border: 0.125rem solid #e0e0e0;
    border-radius: 0.5rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1875rem;

    /* grey-300 */

    color: #828282;
  }

  @media (max-width: 700px) {
    button {
      margin-bottom: 10px;
    }
  }
`;
