import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    /* gap espaçamento entre os elementos flex */
    gap: 20px;
    /* flex wrap wrap quebra a linha  */
    flex-wrap: wrap;
    justify-content: center;
    margin: 80px 50px;

`

export const Formulario = styled.form`
    background: #F7F7F7;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 36px 64px;
    /* cada elemento que está no flex vai ter 50% de width cada; dois elementos flex, 50% */
    flex: 1; 

`

export const Titulo = styled.h3`
    font-weight: 400;
    font-size: 32px;

`

export const Botao = styled.button`
    background: #f5af19;
    border-radius: 3px; 
    font-weight: 700;
    font-size: 18px;
    padding: 32px;
    color: #FFF;
    cursor: pointer;
    font-weight: bold;
    border: none;

`
