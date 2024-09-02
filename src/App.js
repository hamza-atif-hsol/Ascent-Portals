import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountScreen from "./Components/Screens/Accounts";
// import DynamicForm from "./Components/Screens/Particulars";
import UserType from "./Components/Screens/UserType";
import UserForm from "./Components/Screens/UserForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/accounts" element={<AccountScreen />} /> */}
        {/* <Route path="/" element={<DynamicForm />} /> */}
        {/* <Route path="/" element={<UserType />} /> */}
        <Route path="/" element={<UserType />} />
        <Route path="/user-form" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
