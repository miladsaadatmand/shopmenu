import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/menu/menu";
import WorkTime from "./components/workTime/worlTime";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        {/* <Route path="/workTime" element={<WorkTime/>} /> */}
      </Routes>
    </>
  );
}

export default App;
