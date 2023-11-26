import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <h3>Portafolios creado por Cistian Miguel Vazquez Opalka &copy; 2023</h3>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: ${(props) => props.theme.navHeight};
  font-size: ${(props) => props.theme.fontsm};
  margin-top: 35px;
  border-top: 2px solid ${(props) => props.theme.text};
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
