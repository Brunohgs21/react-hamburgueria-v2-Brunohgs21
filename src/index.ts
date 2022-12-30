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
    background: var(--color-main);
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;

    color: var(--color-white);
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3.125rem;
    padding-left: 0.625rem;
  }
`;
