import styled from "styled-components";

interface ContainerMainProps {
  theme: "light" | "dark";
}

export const ContainerMain = styled.main<ContainerMainProps>`
  min-height: 100vh;
  background: ${(props) => (props.theme === "light" ? "#fff" : "#07091B")};
  transition: 0.3s;
  padding-bottom: 80px;
  p {
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    transition: all 0.3s;
  }
`;

export const Container = styled.div`
  &.container {
    padding-top: 80px;
    padding-left: 16px;
    padding-right: 16px;
  }

  h2 {
    text-align: center;
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    text-align: center;
  }
`;

export const ContainerProjetos = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;
