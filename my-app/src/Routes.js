import React from "react"

import { Route , Routes } from "react-router-dom";

function Routes()
{
   return (
    <Routes>
    <Route path="/Shop" element={<Shop />} />
  </Routes>
   );
}
export  default Routes; 