import styled from "styled-components";
import { PrimaryColor, TextPrimaryColor } from "../../config/colors";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0px 0px 5px 5px #ebebee;
  @media (max-width: 720px) {
    justify-content: space-between;
    z-index: 999;
    top: 0;
    position: fixed;
    width: 100%;
    box-shadow: 0 0 0 0;
    .logo {
      z-index: 999;
      margin: 0 2rem;
    }
  }
`;

interface StyledNavProps {
  show: boolean;
}
export const Nav = styled.nav<StyledNavProps>`
  display: flex;
  align-items: center;

  a {
    color: ${TextPrimaryColor};
    font-weight: bold;
    margin: 0 1rem;
    padding: 1rem 0.5rem;
    font-size: 1.35rem;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    z-index: 4;
    background-color: ${PrimaryColor};
    top: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 6rem;

    a {
      margin: 1rem 0;
      padding: 0;
    }
    button {
      margin: 1rem 0;
    }
  }
`;

export const MenuContent = styled.div`
  position: absolute;
  z-index: 10;
  overflow: hidden;
  display: none;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 0;
    margin-right: 1rem;
  }
`;

export const MenuLabel = styled.label`
  z-index: 10;
  color: ${TextPrimaryColor};
  cursor: pointer;
`;
