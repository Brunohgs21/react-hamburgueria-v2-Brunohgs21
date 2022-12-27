import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  text-decoration-line: underline;

  /* Gray 3 */

  color: #828282;
`;

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  background: #ffffff;
  /* grey-0 */

  border: 2px solid #f5f5f5;
  border-radius: 5px;
  padding: 33px 24px 28px 24px;
  .relative {
    position: relative;
    margin-bottom: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    color: #333333;
  }

  label {
    width: 40px;
    height: 15px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    background-color: #ffffff;

    color: #999999;
    margin-left: 40px;
    position: absolute;
    left: 0;
    bottom: 51px;
    text-align: center;
  }

  input {
    background: #ffffff;
    border: 2px solid #168821;
    border-radius: 8px;
    height: 60px;
    width: 100%;
    padding-left: 15px;
    margin-top: 15px;
  }

  .nameDiv {
    position: relative;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0;
  }
  .emailDiv {
    position: relative;
    flex-direction: column;
    margin-bottom: 0;
  }

  button {
    padding: 0px 40px;
    gap: 10px;

    height: 60px;
    margin-top: 15px;

    background: #f5f5f5;
    border-radius: 8px;
    border: transparent;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    text-align: center;

    /* Gray 3 */

    color: #828282;
  }

  .btnLogin {
    height: 60px;
    background: #219653;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    text-align: center;

    color: #ffffff;
  }
  #confirmation {
    margin-top: 0;
  }

  .divText {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
  .p {
    margin-top: 20px;
    width: 327px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* or 129% */

    text-align: center;

    /* grey-50 */

    color: #999999;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const DivCheck = styled.div`
  position: absolute;
  background: #f5f5f5;
  width: 100%;

  border-radius: 0.5rem;
  padding: 0.3125rem;
  top: -15px;
  display: flex;
  flex-direction: column;

  .valid {
    display: none;
  }
  .invalid {
    color: black;
  }
`;

export const Link2 = styled(LinkRouter)`
  width: 100%;
  height: 60px;

  background: #f5f5f5;
  border-radius: 8px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  /* Gray 3 */

  color: #828282;
`;
