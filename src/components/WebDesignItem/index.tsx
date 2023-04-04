import React from "react";
import styled from "styled-components";

interface WebDesignItemProps {
  urlImg: string;
  description: string;
}
function WebDesignItem({ urlImg, description }: WebDesignItemProps) {
  return (
    <Container href="#">
      <img src={urlImg} alt={description} />
      <p>{description}</p>
    </Container>
  );
}

export default WebDesignItem;

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-decoration: none;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }

  @media (max-width: 1000px) {
    img {
      max-width: 500px;
      margin-top: 24px;
    }
  }
  p {
    max-width: 80%;
  }
`;
