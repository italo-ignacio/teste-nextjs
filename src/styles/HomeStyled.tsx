import styled from "styled-components";
import { SecondaryColor } from "../config/colors";

export const FirstDiv = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 80%;
  margin: 3rem auto;
  padding: 1rem 2rem;
  column-gap: 2rem;
  @media (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 90%;
    .image {
      text-align: center;
    }
  }
  @media (max-width: 610px) {
    width: 95%;
    .input_div {
      display: flex;
      flex-direction: column;
      row-gap: 0.6rem;
      button {
        min-width: 40%;
        position: relative;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

export const SectionText = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;

  h1 {
    font-size: 3.5rem;
  }
  label {
    color: #a39e9e;
    border-left: 3px solid #2b2c34;
    padding-left: 0.5rem;
  }
  div {
    width: 100%;
    display: grid;
    grid-template-columns: 75% 25%;
    column-gap: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media (max-width: 170px) {
    word-break: break-all;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 3rem auto;

  padding: 1rem 2rem;
  padding-top: 3rem;
  @media (max-width: 1160px) {
    width: 90%;
    text-align: center;
  }
  @media (max-width: 610px) {
    width: 95%;
  }
  @media (max-width: 170px) {
    word-break: break-all;
  }
`;
export const Buttons = styled.div`
  line-break: auto;
  margin-top: 1rem;
  button {
    margin: 0.3rem 0.3rem;
    font-size: 1rem;
  }
  @media (max-width: 249px) {
    word-break: break-all;
  }
`;

interface ButtonIntercafe {
  active?: boolean;
}
export const Bt = styled.button<ButtonIntercafe>`
  background: ${({ active }) => (active ? "red" : `${SecondaryColor}`)}; ;
`;

export const ListPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  width: 90%;
  margin: auto;
  padding: 1rem 1rem;
  @media (max-width: 1190px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fffffe;
  padding: 1rem 2rem 1.2rem;
  margin: 0rem 2rem 2rem;
  justify-content: space-around;
  h2 {
    margin: 1rem 0;
  }
  img {
    border-radius: 5px;
    text-align: center;
  }
  h4,
  p {
    font-size: 1rem;
  }
  @media (max-width: 1190px) {
    margin: 0rem 1rem 1rem;
  }
  @media (max-width: 720px) {
    margin: 0rem 0rem 1rem;
  }
  @media (max-width: 249px) {
    word-break: break-all;
  }
`;
