import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import CreateUsers from "./Componments/CreateUsers";
import Editusers from "./Componments/Editusers";
// import HomeCrud from "./Componments/HomeCRUD";
import Users from "./Componments/Users"
import Home from "./Componments/Home"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home/>
        <Routes>
          <Route path="/abc" element={<CreateUsers/>} />
          <Route path="/xyz" element={<Users/>} />
          <Route path="/rai/:rahul" element={<Editusers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
