import styled from "styled-components";

export const DivIconBack = styled.div`
    width: 700px;
    display: flex;
    justify-content: right;
    margin-bottom: 15px;

    #divIcone{
        cursor: pointer;
        transition: all 0.3s;
    }

    #divIcone:hover{
        transform: scale(1.1);
    }
`;

export const CardDetails = styled.div`
    width: 700px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    h3{
        text-align: center;
        font-size: 20px;
    }

    img{
        border-radius: 50%;
    }

    span{
        margin-left: 12px;
        font-weight: bold;
        font-size: 18px;
        margin-top: 10px;
    }

    p{
        margin-left: 12px;
        font-size: 18px;
        margin-top: 5px;
    }
`;