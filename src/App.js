import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountScreen from "./Components/Screens/Accounts";
import Identities from "./Components/Screens/Identities";
// import DynamicForm from "./Components/Screens/Particulars";
import UserType from "./Components/Screens/UserType";
import UserForm from "./Components/Screens/UserForm";

import MainDocuments from "./Components/Screens/MainDocuments";
import FaceVerifacation from "./Components/Screens/FaceVerification";
import VCIP from "./Components/Screens/VCIP";
import Steppers from "./Components/Stepper";
import Dashboard from "./Components/Dashboard";

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
        <Route path="/identities" element={<Identities />} />
        <Route path="/documents" element={<MainDocuments />} />
        <Route path="/faceverification" element={<FaceVerifacation />} />
        <Route path="/vcip" element={<VCIP />} />
        <Route path="/stepper" element={<Steppers />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
