import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountScreen from "./Components/Screens/Accounts";
import BankWallets from "./Components/Screens/BankWallets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accounts" element={<AccountScreen />} />
        <Route path="/add-bank" element={<BankWallets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
