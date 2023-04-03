import styled from "styled-components";

interface HeaderContainerProps{
  theme: "light" | "dark"
}
export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  padding-top: 48px;

  a{
    text-decoration: none;
    color: ${props => props.theme === "light" ? "#000000" : "#fff"};
  }
  .container {
    display: flex;
    justify-content: space-between;
  }

  nav{
    display: flex;
    align-items: center;
  }
  nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 32px;
    
    a{
      transition: .3s;
      text-decoration: none;
      color: ${props => props.theme === "light" ? "#000000" : "#fff"};
      position: relative;
    }
  }

  nav a::after{
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #FFA9DC;
    transition: .3s;
  }
  nav a:hover::after{
    width: 100%;
  }
  label{
    display: flex;
    align-items: center;
    gap: 8px
  }

  h5 {
    transition: .3s;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 37px;
    color: ${props => props.theme === "light" ? "#000000" : "#fff"};
  }
`;
