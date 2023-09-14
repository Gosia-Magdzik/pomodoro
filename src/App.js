import { Title, Wrapper } from "./Globalstyle";
import { Controls } from "./components/controls";
import { Timer } from "./components/Timer";

function App() {
  return (
    <Wrapper>
      <Title>pomodoro</Title>
      <Controls/>
      <Timer/>
    </Wrapper>
  );
}

export default App;
