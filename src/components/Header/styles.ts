import styled from "styled-components";

interface HeaderContainerProps {
  theme: "light" | "dark";
  activeNav: boolean;
}
export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  padding-top: 48px;

  .menuContainer {
    display: flex;
    gap: 8px;

    .menu {
      width: 42px;
      z-index: 100;
    }
  }
  a {
    text-decoration: none;
    transition: all 0.3s;
    color: ${(props) => (props.theme === "light" ? "#000000" : "#fff")};
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1000px) {
    padding-top: 20px;
    nav {
      position: fixed;
      left: ${(props) => (!props.activeNav ? "100%" : "0%")};
      top: 0;
      background-color: #fff;
      width: 100%;
      height: 100vh;
      z-index: 100;
      transition: 0.3s;

      ul {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
  nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 32px;

    a {
      transition: 0.3s;
      text-decoration: none;
      color: ${(props) => (props.theme === "light" ? "#000000" : "#fff")};
      position: relative;
    }
  }

  nav a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #ffa9dc;
    transition: 0.3s;
  }
  nav a:hover::after {
    width: 100%;
  }
  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h5 {
    transition: 0.3s;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 37px;
    color: ${(props) => (props.theme === "light" ? "#000000" : "#fff")};
  }
`;
