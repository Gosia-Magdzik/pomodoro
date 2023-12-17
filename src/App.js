import { Title, Wrapper } from "./Globalstyle";
import { Controls } from "./components/controls";
import { Timer } from "./components/Timer";
import { Modal } from "./components/Setting/Modal";

function App() {
  return (
    <>
      <Modal />
      <Wrapper>
        <Title>pomodoro</Title>
        <Controls/>
        <Timer/>
      </Wrapper>
    </>
  );
}

export default App;
