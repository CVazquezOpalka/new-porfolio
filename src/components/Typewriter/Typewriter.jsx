import React from "react";
import { Title } from "./style";
import Typewriter from "typewriter-effect";

export const TypeWriterText = () => {
  return (
    <>
      <Title>
        Cristian Miguel Vazquez Opalka
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">FullStack Developer</span>`)
              .pauseFor(500)
              .deleteAll()
              .typeString(`<span class="text-2">FrontEnd Developer</span>`)
              .pauseFor(500)
              .deleteAll()
              .typeString(`<span class="text-3">BackEnd Developer</span>`)
              .pauseFor(500)
              .deleteAll()
              .typeString(`<span class="text-4">Python Developer</span>`)
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        ></Typewriter>
      </Title>
    </>
  );
};
