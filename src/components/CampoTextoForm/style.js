import styled from "styled-components";

export const Container = styled.div`
    margin: 24px 0;
  
`

export const Label = styled.h3`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;

`

export const Input = styled.input`
    background: #FFFFFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    width: 100%;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
    border: ${
        (props) => {
            return props.isError ? '1px solid red' : 'none'
        }
    };
    
`
export const ContainerInput = styled.div`
    display: flex;

`

export const IconeOlho = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 37px; */
    cursor: pointer;
    background: #FFFFFF;
    height: 77px;
    border-radius: 0px;
    padding-right: 10px;
`