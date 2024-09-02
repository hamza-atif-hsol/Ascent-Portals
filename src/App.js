import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountScreen from "./Components/Screens/Accounts";
import BankWallets from "./Components/Screens/BankWallets";
import Application from "./Components/Screens/Application";
import Summary from "./Components/Screens/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accounts" element={<AccountScreen />} />
        <Route path="/add-bank" element={<BankWallets />} />
        <Route path="/application" element={<Application />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
