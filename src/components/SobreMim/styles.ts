import styled from "styled-components";

interface SobreMimContainerTheme {
  theme: "light" | "dark";
}
export const MainContainer = styled.main<SobreMimContainerTheme>`
  background: ${(props) => (props.theme === "light" ? "#fff" : "#07091B")};
  transition: 0.3s;
`;
export const SobreMimContainer = styled.div<SobreMimContainerTheme>`
  &.container {
    padding: 0px 0px;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    /* identical to box height */
    color: ${(props) => (props.theme === "light" ? "#FFA9DC" : "#802DD2")};
    border-bottom: 1px solid
      ${(props) => (props.theme === "light" ? "#F925A2" : "#802DD2")};
    width: 100%;
    text-align: center;
    display: block;
    padding-bottom: 8px;
    transition: 0.3s;
  }

  h3 {
    color: ${(props) => (props.theme === "light" ? "#FFA9DC" : "#802DD2")};
    text-align: center;
    margin: 32px 0;
    transition: 0.3s;
  }
  .destaqueImg {
    margin: 32px auto;
    display: block;
  }

  p {
    max-width: 742px;
    margin: 0 auto;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    transition: 0.3s;

    & + p {
      margin-top: 20px;
    }
  }
`;

export const ContainerCEP = styled.div<SobreMimContainerTheme>`
  .titles {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
  h4,
  h3 {
    color: ${(props) => (props.theme === "light" ? "#9B3EF8" : "#fff")};
  }
  h4 {
    text-align: center;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    min-width: fit-content;
    text-align: center;
    margin-top: 24px;
  }
  table tbody tr:nth-child(even) {
    background-color: #40513b14;
  }
  td,
  th {
    padding: 15px 10px;
    font-size: 14px;
    color: ${(props) => (props.theme === "light" ? "#675d50" : "#cecece")};

  }
  th {
    cursor: pointer;
    text-transform: uppercase;
    color: ${(props) => (props.theme === "light" ? "#9B3EF8" : "#fff")};
  }
  th,
  tbody {
    border-bottom: 3px solid #9b3ef8;
  }

  button {
    width: 200px;
    height: 48px;
    background: #9b3ef8;
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
