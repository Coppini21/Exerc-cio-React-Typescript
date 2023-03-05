import styled from "styled-components";

export const DivInputBtn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const InputLog = styled.input`
    width: 420px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const BtnBuscar = styled.button`
    height: 50px;
    width: 100px;
    background-color: green;
    font-size: 16px;
    color: white;
    border-radius: 5px;
    border: none;
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &&:hover{
        transform: scale(1.1);
    }
`;