import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Bonjour</div>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
