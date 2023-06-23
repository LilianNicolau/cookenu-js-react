import styled from "styled-components";

export const HeaderContainer = styled.div`
    border: 2px solid #DDDDDD;
    border-radius: 5px;
    padding: 2rem 0;
    margin-left: 150px;
    width: 940px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const Titulo = styled.h1`
    color: #FFFFFF;
    margin-left: 20px;
    cursor: pointer;
        transition: .2s filter;
    &:hover {
        filter: brightness(0.9)
    }
`

export const Nav = styled.div`
      display: flex;
   /* svg {
    margin-left: 15px;
   } */

`

export const BotaoDetalhes = styled.button`
    background: #f5af19;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 16px;
    padding: 5px 5px;
`
