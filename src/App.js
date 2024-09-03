import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountScreen from "./Components/Screens/Accounts";
import BankWallets from "./Components/Screens/BankWallets";
import Application from "./Components/Screens/Application";
import Summary from "./Components/Screens/Summary";
import Identities from "./Components/Screens/Identities";
// import DynamicForm from "./Components/Screens/Particulars";
import UserType from "./Components/Screens/UserType";
import UserForm from "./Components/Screens/UserForm";

import Documents from "./Components/Screens/Documents";
import FaceVerifacation from "./Components/Screens/FaceVerification";
import VCIP from "./Components/Screens/VCIP"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/accounts" element={<AccountScreen />} /> */}
        {/* <Route path="/" element={<DynamicForm />} /> */}
        {/* <Route path="/" element={<UserType />} /> */}
        <Route path="/" element={<UserType />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/accounts" element={<AccountScreen />} />
        <Route path="/add-bank" element={<BankWallets />} />
        <Route path="/application" element={<Application />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/identities" element={<Identities />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/faceverification" element={<FaceVerifacation/>} />
        <Route path="/vcip" element={<VCIP/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
