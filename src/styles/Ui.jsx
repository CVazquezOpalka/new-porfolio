import styled from "styled-components";

export const Box = styled.div`
  width: ${(props) =>
    props.width === "1" ? "30%" : props.width === "2" ? "70%" : "50%"};
  min-height: 60vh;
  height: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 64em) {
    width: 90%;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
`;

export const CardContext = styled.section`
  width: 100%;
  min-height: 300px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-items: center;
  gap: 20px;
  transition: all 300ms ease;
`;
