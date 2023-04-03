import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./global";
import { LightTheme } from "./styles/theme/light";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

interface ThemePageProps {
  theme: "light" | "dark";
}
function App() {
  const [themePage, setThemePage] = useState<"light" | "dark">("light");
  function handleTypeTheme(){ 
    if(themePage === "light"){
      setThemePage("dark")
    }else{
      setThemePage("light")
    }
  }
  
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Router theme={themePage} setTheme={handleTypeTheme} />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
