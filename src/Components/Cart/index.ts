import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 150px;
  width: 22.8125rem;
  min-height: 13.9375rem;
  height: 13.9375rem;
  max-height: 37.5rem;

  background: var(--color-grey-1);
  border-radius: 0rem 0rem 0.3125rem 0.3125rem;
  header {
    display: flex;
    justify-content: space-between;
    padding-right: 1.25rem;
    align-items: center;
  }
  .closeBtn {
    background-color: transparent;
    border: transparent;
    color: var(--color-grey-1);
  }

  ul {
    background-color: transparent;

    gap: 0.625rem;

    display: flex;

    background-color: var(--color-grey-1);
    flex-direction: column;
    align-items: center;
    overflow: auto;
    justify-content: flex-start;
    max-height: 18.75rem;
    min-height: 12.5rem;
  }
`;
export const BackGround = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--color-back-modal);
`;
