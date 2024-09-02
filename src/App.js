import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountScreen from "./Components/Screens/Accounts";
import Documents from "./Components/Screens/Documents";
import FaceVerifacation from "./Components/Screens/FaceVerification";
import VCIP from "./Components/Screens/VCIP"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accounts" element={<AccountScreen />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/faceverification" element={<FaceVerifacation/>} />
        <Route path="/vcip" element={<VCIP/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
