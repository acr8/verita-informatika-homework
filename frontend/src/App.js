import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContentDetail from "./pages/ContentDetail";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MainContent />} />
          <Route path="contentDetail/:id" element={<ContentDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
