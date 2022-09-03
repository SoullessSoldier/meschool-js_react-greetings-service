import React from "react";
import Layout from "./components/Layout/Layout";
import Card from "./components/Card/Card";
import EmptyCard from "./components/EmptyCard/EmptyCard";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmptyCard />} />
        <Route path="card/:holiday" element={<Card />} />
      </Route>
      <Route path='singleCard/:idText/:idImage' element={<Card />} />
    </Routes>
  );
};

export default App;
