import { Title,
        Wrapper, 
        CogIcon } 
from "./Globalstyle";
import { Controls } from "./components/controls";
import { Timer } from "./components/Timer";
import { Modal } from "./components/Setting/Modal";
import { useState } from "react";
import { FaCog } from 'react-icons/fa';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Wrapper>
        <Title>pomodoro</Title>
        <Controls/>
        <Timer/>
        <CogIcon onClick={onOpen}>
          <FaCog/>
        </CogIcon>
      </Wrapper>
    </>
  );
}

export default App;
