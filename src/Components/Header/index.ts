import styled from "styled-components";

export const Cabecalho = styled.header`
  width: 100vw;
  height: 5rem;
  background: var(--color-grey-1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .logo {
    height: 2.3017rem;
    width: 9.9335rem;

    border-radius: 0rem;
    margin-left: 7.1875rem;
  }

  span {
    position: absolute;
    top: -10px;
    right: -5px;
    width: 20px;
    height: 24px;

    background: var(--color-main);
    border-radius: 7px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-white);
  }

  .openCart {
    width: 36px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    background-color: transparent;
    position: relative;
  }
  .logout {
    width: 36px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    background-color: transparent;
    position: relative;
    margin-right: 7.1875rem;
  }

  .cartImg {
    width: 70%;
    height: 70%;
    margin-left: 0;
    pointer-events: none;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    gap: 0.625rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;

    div {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    img {
      margin: auto;
    }
    .logout {
      margin-right: 0;
    }
  }
`;
