import styled from "styled-components";

interface HomeContainerTheme{
  theme: "light" | "dark";
}
export  const  HomeContainer = styled.div<HomeContainerTheme>`
  height: 100vh;
  background: ${props => props.theme === "light" ? "#fff" : "#07091B"};
  transition: .3s;

  p, h2{
    color: ${props => props.theme === "light" ? "#000" : "#fff"};
    transition: .3s;
  }
`


export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    max-width: 439px;

    span {
      color: #f925a2;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;

    max-width: 392px;

    span{
      color: #f925a2;
    }
  }
`;

