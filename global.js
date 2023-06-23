import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body{ 
    background: #f12711;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

body, input, textarea, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600
}

button{ 
    border: 0;
    cursor: pointer;
        transition: .2s filter;
    &:hover {
        filter: brightness(0.9)
    }
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

a{
    color: inherit;
    text-decoration: none;
}
`