import React from "react";
import { Box, CardContext, Container } from "../../styles/Ui";
import Hero from "../../assets/heroN.png";
import { TypeWriterText } from "../../components/Typewriter/Typewriter";
import { Section, ImgContainer, Title } from "./style";
import { Card } from "../../components/Card/Card";

export default function Home() {
  return (
    <Section>
      <Box width="1">
        <ImgContainer>
          <img src={Hero} />
        </ImgContainer>
      </Box>
      <Box width="2">
        <TypeWriterText />
        <Container>
          <Title>Mis ultimos trabajos</Title>
          <CardContext>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardContext>
        </Container>
      </Box>
    </Section>
  );
}
