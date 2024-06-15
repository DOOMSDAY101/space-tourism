import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Destination from "./Pages/Destination";

function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutePath;
