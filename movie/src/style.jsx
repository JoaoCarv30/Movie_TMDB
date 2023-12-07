
import styled from "styled-components";

export const Container = styled.div`


    width: 100vw;
    height: 100vh;
        
    h1{
        color: #fff;
        text-align: center;
        font-size: 2.5rem;
        margin-top: 2rem;   

    }
    `

export const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    gap: 1rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem #000;
    `

export const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 25rem;
    border-radius: 1rem;
    transition: 0.3s;
    margin: 2rem;
    color: #fff;
 

    &:hover{
        transform: scale(1.1);
    }

    img{
        width: 100%;
        height: 80%;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    h2{
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
    }
    `