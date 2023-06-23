import styled from "styled-components";

export const Container = styled.div`
    background: orange;
    width: 500px;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
    box-sizing: border-box; /* isso deixa os cards na mesma linha*/
    border-radius: 4px;
    margin: 50px 10px 10px 0px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    /* &:nth-child(3n+3){
        margin-right: 0;
    } */
`

export const CardImagem = styled.img`
    max-width: 80%;
    margin-bottom: 10px;
`

export const CardBody = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
`

export const NomeReceita = styled.h3`
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 21px;
`

export const DetalhesReceita = styled.p`
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 21px;
`

export const NomeDonoReceita = styled.h5`
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 21px;
    margin-right: -320px;
`
