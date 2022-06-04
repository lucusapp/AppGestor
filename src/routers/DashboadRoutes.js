import { Routes, Route } from "react-router-dom";
import { FiscalScreen } from "../components/fiscal/FiscalScreen";


import { LaboralScreen } from "../components/laboral/LaboralScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";




export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<FiscalScreen />} />
          <Route path="fiscal" element={<FiscalScreen />} />
          <Route path="laboral" element={<LaboralScreen />} />
          <Route path="search" element={<SearchScreen />} />

        </Routes>
    </>
    );
  }