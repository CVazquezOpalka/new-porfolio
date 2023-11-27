import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  margin: 10px auto;
  span {
    letter-spacing: 1px;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: red;
  }
  .text-3 {
    color: tomato;
  }
  .text-4 {
    color: greenyellow;
  }
  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;
