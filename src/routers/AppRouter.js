import { Routes, Route,BrowserRouter } from "react-router-dom";
import { FiscalScreen } from "../components/fiscal/FiscalScreen";
import { LaboralScreen } from "../components/laboral/LaboralScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { Navbar } from "../components/ui/Navbar";

import React from 'react'

export const AppRouter = () => {
    return (
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<FiscalScreen />} />
              <Route path="fiscal" element={<FiscalScreen />} />
              <Route path="/laboral" element={<LaboralScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
      );
}
