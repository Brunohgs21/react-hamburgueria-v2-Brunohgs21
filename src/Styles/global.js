import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: 0;
    button{
        cursor: pointer;
    }

    .app{
        
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    }

    :root{
       --color-main: #27ae60;
       --color-main-2:#219653;
       --color-main-3: #168821;
       --color-white: #ffffff;
       --color-grey-1:#f5f5f5;
       --color-grey-2: #e0e0e0;
       --color-grey-3:#828282;
       --color-grey-4: #999999;
       --color-grey-btn: #bdbdbd;
       --color-grey-dark: #333333;
       --color-back-modal: rgba(0, 0, 0, 0.5);
    }
}
`;
