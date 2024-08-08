import logo from './logo.svg';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <button onClick={() => toast("Hello World!")}>
        Say Hello!
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
