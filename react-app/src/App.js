import styled from "styled-components";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const StyledNotification = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #11368e;
    color: #fff;
  }
  .Toastify__progress-bar {
    background: #ffde21;
  }
  .Toastify__close-button {
    color: #fff;
    opacity: 1;
  }
`;

function App() {
  return (
    <div className="App">
      <button onClick={() => toast("Hello World!")}>Say Hello!</button>
      <StyledNotification />
    </div>
  );
}

export default App;
