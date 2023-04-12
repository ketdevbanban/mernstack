import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import AllUser from "./pages/admin/user/alluser";
import Header from "./components/header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user" element={<AllUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
