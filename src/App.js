import { Title } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}/>
      <Title>pomodoro</Title>
    </>
  );
}

export default App;
