import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Pages/MainContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
