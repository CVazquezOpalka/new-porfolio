import React from "react";
import styled from "styled-components";

export const Card = () => {
  return (
    <Section>
      <h1>Card</h1>
    </Section>
  );
};

const Section = styled.div`
  width: 200px;
  height: 290px;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0.6;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
  }
`;
