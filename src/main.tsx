import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import App from "./app";
import { CharactersProvider } from "./contexts/CharactersContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CharactersProvider>
        <App />
      </CharactersProvider>
    </ThemeProvider>
  </React.StrictMode>
);
