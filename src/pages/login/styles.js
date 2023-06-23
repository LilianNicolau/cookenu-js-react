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
    /* flex: 1;  */

`

export const Label = styled.label`
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

export const LinkCadastro = styled.a`
    cursor: pointer;
    font-weight: bold;
    border: none;
    margin-left: 150px;
    transition: .2s filter;
    &:hover {
        color: gray;
    }
`

export const ContainerSenha = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    width: 1050px;
    /* background: red; */
`

export const IconeOlho = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 5px; */
    margin-top: 37px;
    cursor: pointer;
    background: #FFFFFF;
    height: 77px;
    border-radius: 0px;
    padding-right: 10px;
`




