import { createGlobalStyle } from "styled-components";

import {
  PrimaryColor,
  SecondaryColor,
  TextButton,
  TextPrimaryColor,
} from "../config/colors";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;
  }
  body{
   
    background-color:  ${PrimaryColor};
  }
  html,body,#root{
    height:100%; 
    font-family:  'Manrope', sans-serif;
  }
 
  button{
    cursor:pointer;
    background: ${SecondaryColor};
    border: none;
    color: ${TextButton};
    padding: 0.5rem 1.2rem;  
    border-radius: 5px;
    transition: all 300ms;
  }
  button:hover{
      filter: brightness(75%);
  }
 
  a{
    text-decoration: none;
    color:${TextPrimaryColor}
  }
  input {
    font-size: 1rem;
    border: 2px solid ${PrimaryColor};
    padding: 1rem;
    border-radius: 5px;
    
    &:focus {
      border: 2px solid ${SecondaryColor};
    }
  }
`;
