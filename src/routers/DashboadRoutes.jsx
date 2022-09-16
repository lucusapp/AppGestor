import { Routes, Route } from "react-router-dom";
import { FiscalScreen } from "../components/fiscal/FiscalScreen";
import { LeyeScreen } from "../components/fiscal/LeyeScreen";
import { GestorScreen } from "../components/gestor/GestorScreen";


import { LaboralScreen } from "../components/laboral/LaboralScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";




export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

          <Routes>
            <Route path="/" element={<GestorScreen />} />
            <Route path="fiscal" element={<FiscalScreen />} />
            <Route path="laboral" element={<LaboralScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="leyes" element={<LeyeScreen />} />
            

          </Routes>

    </>
    );
  }