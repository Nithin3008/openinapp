import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./Home";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
