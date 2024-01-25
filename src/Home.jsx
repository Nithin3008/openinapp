import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import TopBar from "./components/TopBar";
import UploadCsv from "./components/UploadCsv";
const Home = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [showTable, setShowTable] = useState(false);
  function openNavBarFunc() {
    setNavOpen(false);
  }
  function closeNavBarFunc() {
    setNavOpen(true);
  }
  function tableOperation() {
    setShowTable((prev) => !prev);
  }
  return (
    <div className=" bg-[#FAFAFB] relative sm:flex">
      <div
        className={`absolute z-10 h-full bg-white ${
          navOpen ? "hidden" : "visible"
        }`}
      >
        <NavBar closeNavBar={closeNavBarFunc}></NavBar>
      </div>
      <div className="max-sm:hidden sm:h-full sm:bg-white">
        <NavBar></NavBar>
      </div>
      <div className="grow space-y-20">
        <TopBar openNavBar={openNavBarFunc}></TopBar>

        <UploadCsv
          tableShow={tableOperation}
          tableStatus={showTable}
        ></UploadCsv>

        <div className={`${showTable ? "visible" : "hidden"}`}>
          <Table></Table>
        </div>
      </div>
      {/* <Login></Login> */}
    </div>
  );
};

export default Home;
