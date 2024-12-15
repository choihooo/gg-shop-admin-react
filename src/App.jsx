import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, NavBar } from "./components";
import Home from "./pages/Home";
import {
  Settlement,
  Settlement01,
  Settlement02,
  Settlement03,
  Settlement04,
} from "./pages/Settlement";
import PayList from "./pages/PayList/PayList";
import WaitApproval from "./pages/WaitApproval/WaitApproval";
import {
  VenderRegister01,
  VenderRegister02,
  VenderRegister03,
} from "./pages/VenderRegister";
import { Vender, Vender01, Vender02, Vender03 } from "./pages/Vender";
import {
  StoreInfotmation,
  StoreInfotmation01,
  StoreInfotmation02,
} from "./pages/StoreInformation";
import "./reset.css";
import "./common.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settlement" element={<Settlement />}>
          <Route path="1" element={<Settlement01 />} />
          <Route path="2" element={<Settlement02 />} />
          <Route path="3" element={<Settlement03 />} />
          <Route path="4" element={<Settlement04 />} />
        </Route>
        <Route path="/pay-list" element={<PayList />} />
        <Route path="/wait-approval" element={<WaitApproval />} />
        <Route path="vender" element={<Vender />}>
          <Route path="1" element={<Vender01 />} />
          <Route path="1/register" element={<VenderRegister01 />} />
          <Route path="2" element={<Vender02 />} />
          <Route path="2/register" element={<VenderRegister02 />} />
          <Route path="3" element={<Vender03 />} />
          <Route path="3/register" element={<VenderRegister03 />} />
        </Route>
        <Route path="store-informaion" element={<StoreInfotmation />}>
          <Route path="1" element={<StoreInfotmation01 />} />
          <Route path="2" element={<StoreInfotmation02 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
