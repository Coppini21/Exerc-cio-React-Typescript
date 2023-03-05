import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    height: 90vh;
    width: 700px;
`;

export const DivLogInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 10px;

`;

export const Card = styled.div`
    width: 700px;
    height: 280px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: none;
    padding: 10px 15px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const DivNameImgLogin = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        text-align: center;
    }

    img{
        border-radius: 50%;
    }

    span{
        width: 700px;
        margin-left: 12px;
        margin-top: 10px;
        font-size: 18px;
    }

    p{
        width: 600px;
        margin-left: 12px;
        font-size: 18px;
        
    }
`;

export const BtnVerMais = styled.button`
    width: 130px;
    height: 30px;
    background-color: RGB(245, 180, 31);
    font-size: 15px;
    border-radius: 5px;
    border: none;
    transition: all 0.3s;
    margin-left: 12px;
    margin-top: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    &&:hover{
        transform: scale(1.1);
    }

`;