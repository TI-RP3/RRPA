import styled from "styled-components";

import { LeftAside } from "./components/LeftAside";
import { MainContent } from "./components/MainContent";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <LeftAside />
      <MainContent />
    </AppContainer>
  );
}

export default App;
