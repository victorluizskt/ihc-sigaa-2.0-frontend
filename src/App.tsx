import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frequency from "./pages/Frequency";
import Subjects from "./pages/Subjects";
import Grades from "./pages/Grades";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <div className="App" style={{ height: "100% "}}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/frequency" element={<Frequency />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/subjects" element={<Subjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
