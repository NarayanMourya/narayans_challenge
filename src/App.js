import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GoTomenu from "./components/GoTomenu";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<GoTomenu />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
