import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboadRoutes";
import PrivateRouter from "./PrivateRouter";





export const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/*" element={
                          <PrivateRouter>
                             <DashboardRoutes />
                          </PrivateRouter>
              }/>    
     
        

            </Routes>
        </BrowserRouter>

        </>
      );
}