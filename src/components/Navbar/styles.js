import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: ${(props) => props.theme.navHeight};
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.text};
  margin-bottom: 35px;
`;

export const Logo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    display: block;
    font-size: ${(props) => props.theme.fontxxxl};
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }
  h3 {
    display: block;
    flex-basis: 40px;
    margin-left: 10px;
    font-weight: 300;
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
  }
`;

export const Nav = styled.nav`
  flex-grow: 1;
`;

export const Menu = styled.ul`
  height: ${(props) => props.theme.navHeight};
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuItems = styled.li`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  margin-left: 15px;
  margin-right: 15;

  a {
    color: #111;
    text-decoration: none;
    transition: all 300ms;
  }
  .active {
    color: #fa4529;
  }
`;
