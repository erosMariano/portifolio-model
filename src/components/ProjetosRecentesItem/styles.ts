import styled from "styled-components";

interface ContainerProps {
  theme: "light" | "dark";
}
export const Container = styled.div<ContainerProps>`
  max-width: 340px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 8px;
  background: ${(props) =>
    props.theme === "light"
      ? "#fff"
      : "linear-gradient(135.93deg, rgba(255, 48, 128, 0.5) 5.92%, rgba(65, 72, 251, 0.5) 90.08%);"};
  img {
    width: 100%;
    height: 277px;
    object-fit: cover;
  }
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};

    margin: 5px 0;
    padding: 0 6px;
    margin-top: 8px;
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14.1748px;
    line-height: 17px;
    text-align: center;
    padding: 0 6px;
    color: ${(props) => (props.theme === "light" ? "#f925a2" : "#fff")};
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    padding: 0 6px;
    display: block;
  }
`;
