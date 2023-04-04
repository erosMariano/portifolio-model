import styled from "styled-components";

interface ContainerMainTheme {
  theme: "light" | "dark";
}
export const ContainerMain = styled.main<ContainerMainTheme>`
  background: ${(props) => (props.theme === "light" ? "#fff" : "#07091B")};
  transition: 0.3s;
  min-height: 100vh;

  .animada {
    position: absolute;
    left: 15%;
    width: 200.75px;
    bottom: 104px;
  }

  .desenho {
    position: absolute;
    right: 15%;
    width: 300.75px;
    bottom: 40px;
  }
  footer {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #ffffff;
    background: rgba(216, 182, 250, 0.7);
    height: 104px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    width: 100%;
  }
  @media (max-width: 1000px) {
    min-height: auto;
    footer {
      bottom: auto;
      .animada {
        width: 122px;
        left: 10%;
      }

      .desenho {
        position: absolute;
        right: 0%;
        width: 200.75px;
        bottom: 61px;
      }
    }
  }
`;

export const Container = styled.div<ContainerMainTheme>`
  &.container {
    padding-top: 80px;
  } 
  @media(max-width: 1000px){
    &.container{
      margin-bottom: 200px;
    }
  }

  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;
    transition: all 0.3s;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #ffc700;
    margin-top: 16px;
    margin-bottom: 60px;
  }
`;

export const IconsList = styled.div<ContainerMainTheme>`
  display: flex;
  width: 500px;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin: 0 auto;

  .containerIcon {
    position: relative;
  }

  .blur {
    width: 82px;
    height: 82px;
    position: absolute;
    border-radius: 100px;
    border: 1px solid transparent;
    transition: all 0.3s;
    filter: ${(props) => (props.theme === "light" ? "blur(3px)" : "blur(0px)")};
    &.yellow {
      background: ${(props) =>
        props.theme === "light" ? "rgba(250, 243, 182, 0.7)" : "transparent"};

      border-color: ${(props) =>
        props.theme === "light" ? "transparent" : "#FFC700"};
    }

    &.pink {
      background: ${(props) =>
        props.theme === "light" ? "rgba(255, 169, 220, 0.7)" : "transparent"};
      border-color: ${(props) =>
        props.theme === "light" ? "transparent" : "#F925A2"};
    }
    &.purple {
      background: ${(props) =>
        props.theme === "light" ? "rgba(216, 182, 250, 0.7)" : "transparent"};
      border-color: ${(props) =>
        props.theme === "light" ? "transparent" : "#9B3EF8"};
    }
  }
  a {
    width: 82px;
    height: 82px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
