import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";

function App() {
  return (
    <div className="App" style={{ height: "100% "}}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
