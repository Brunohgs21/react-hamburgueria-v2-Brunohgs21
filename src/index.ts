import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1.625rem;
  gap: 1.875rem;
  border-radius: 0.3125rem 0.3125rem 0rem 0rem;

  header {
    width: 100%;
    height: 1.875rem;
    background: #27ae60;
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    /* or 133% */

    color: #ffffff;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    padding-left: 10px;
  }
`;
