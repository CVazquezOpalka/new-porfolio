import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  @media (max-width: 64em) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 90%;
  height: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in;
  img {
    position: relative;
    width: 100%;
    border-radius: 50%;
  }
  @media (max-width: 64em){
    
  }
`;

export const Title = styled.h3`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  text-decoration: underline;
  margin-bottom: 20px;
`;
