import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import TopBar from "./components/TopBar";
import Upload from "./components/Upload";
import UploadCsv from "./components/UploadCsv";
function App() {
  const [navOpen, setNavOpen] = useState(true);
  function openNavBarFunc() {
    setNavOpen(false);
  }
  function closeNavBarFunc() {
    setNavOpen(true);
  }

  return (
    <div className="App bg-[#FAFAFB] flex">
      <div
        className={`sm:h-screen sm:bg-white ${navOpen ? "hidden" : "visible"}`}
      >
        <NavBar closeNavBar={closeNavBarFunc}></NavBar>
      </div>
      <div className="grow space-y-20">
        <TopBar openNavBar={openNavBarFunc}></TopBar>
        <UploadCsv></UploadCsv>
        <Table></Table>
      </div>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
