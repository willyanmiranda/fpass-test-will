import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  clear: none;
  text-decoration: none;
  list-style: none;
}

body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}

a {
  text-decoration: none;
  color: white;
}
`;
