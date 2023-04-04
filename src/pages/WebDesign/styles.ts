import styled from "styled-components";
interface ContainerMainProps {
  theme: "light" | "dark";
}
export const ContainerMain = styled.main<ContainerMainProps>`
  background: ${(props) => (props.theme === "light" ? "#fff" : "#07091B")};
  transition: 0.3s;
  min-height: 100vh;
  padding-bottom: 80px;

  p {
    text-align: center;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    transition: all 0.3s;
  }
`;

export const Container = styled.div`
  padding-top: 80px;

  &.container {
    padding-top: 80px;
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Produtos = styled.div`
  margin-top: 36px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
