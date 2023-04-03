import React from "react";
import styled from "styled-components";

interface PropsTitle {
  title: string;
  type: "purple" | "pink";
}
function TitleSection({ title, type }: PropsTitle) {
  return <H2Style type={type}>{title}</H2Style>;
}

export default TitleSection;

interface H2Props{
  type: "purple" | "pink";
}
export const H2Style = styled.h2<H2Props>`
  color: ${(props) => (props.title === "pink" ? "#F925A2" : "#802DD2")};
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
`;
