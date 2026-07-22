import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import Login from "../src/pages/Login/LoginPage";
import Dashboard from "../src/pages/Dashboard/DashboardPage";
import ClientsPage from "../src/pages/Clients/ClientsPage";
import ContactPage from "../src/pages/Contacts/ContactsPage";
import Partenaires from "../src/pages/Partenaires/PartenairesPage"
import DashboardLayout from "../src/layouts/DashboardLayout";
import ProtectedRoute from "../src/routes/ProtectedRoute";
import Missions from "../src/pages/Missions/MissionsPage";
import Contrats from "../src/pages/Contrats/ContratsPage";
import Factures from "../src/pages/Factures/FacturesPage";
import Parametres from "../src/pages/Parametres/ParametresPage";


export default function AppRoutes() {


  return (

    <BrowserRouter>


      <Routes>


        <Route
          path="/login"
          element={<Login />}
        />



        <Route
          element={
            <ProtectedRoute>

              <DashboardLayout />

            </ProtectedRoute>
          }
        >


          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          <Route
            path="/clients"
            element={<ClientsPage />}
          />

          <Route
            path="/contacts"
            element={<ContactPage />}
          />

          <Route
            path="/partenaires"
            element={<Partenaires />}
          />

          <Route
            path="/missions"
            element={<Missions />}
          />

          <Route
            path="/contrats"
            element={<Contrats />}
          />

          <Route
            path="/factures"
            element={<Factures />}
          />

          <Route
            path="/parametres"
            element={<Parametres />}
          />

        </Route>



        <Route
          path="/"
          element={
            <Navigate to="/dashboard" />
          }
        />


      </Routes>


    </BrowserRouter>

  );

}