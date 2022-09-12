import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}> 
      <GlobalStyle />
      
      <Transactions/>
    </ThemeProvider>
  )
}
