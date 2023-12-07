import styled from "styled-components";

export const Container = styled.div`
  .geral {
    width: 100vw;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 200px;
    height: 100%;
    border-radius: 1rem;
  }

  .info-right {
    display: flex;
    max-height: 500px;
    flex-direction: column;
    justify-content: space-between;
    max-width: 350px;
    margin-left: 4rem;
    line-height: 1.5rem;
  }

  h1 {
    line-height: 2rem;
  }

  #release {
    opacity: 0.5;
  }

  button {
    margin-top: 2rem;
    width: 100px;
    height: 40px;
    background: #fff;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
  }

  button:hover {
    background: #a8a7a7;
  }




  @media (max-width: 768px) {
    .geral {
        width: 100vw;
        height: 100vh;
        display: flex;
         align-items: center;
        justify-content: center;
      flex-direction: column;
    }

   .image-left{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
   }
   .image-left img{
    width: 100%;
    border-radius: 1rem;
   }
    /* Estilos específicos para telas com largura máxima de 768 pixels */
    .info-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }
    .info-right h1 {
        text-align: center;
        margin-bottom: 2rem;
    }
    .aditional-info{
        margin-top: 1rem
    }
    button {
    margin-top: 2rem;
    width: 100%;
    height: 40px;
    background: #fff;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
  }

  }

  @media (max-width: 480px) {
    /* Estilos específicos para telas com largura máxima de 480 pixels */
    img {
      width: 150px;
    }

    .info-right {
      max-width: 250px;
      margin-left: 0;
    }
  }
`;
