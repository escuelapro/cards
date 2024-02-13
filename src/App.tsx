import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import DictionaryPage from "./pages/DictionaryPage";
import DetailsPage from "./pages/DetailsPage";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 16px;
  color: #18191f;
  font-weight: 700;
  min-height: 100vh;
  overflow-y: hidden;
  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 479px) {
    overflow-y: hidden;
  }
`;

function App() {
  return (
    <AppEl>
      <Header />
      <Routes>
        <Route path="/" element={<DictionaryPage />} />
        <Route path="/cards/:slug" element={<DetailsPage />} />
      </Routes>
    </AppEl>
  );
}

export default App;
