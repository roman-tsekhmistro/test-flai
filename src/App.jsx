/** @format */

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import MainPage from './pages/MainPage';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {box-sizing: border-box;}
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #000;
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <LeftSidebar />
      <MainPage />
      <RightSidebar />
    </AppWrapper>
  );
}

export default App;
