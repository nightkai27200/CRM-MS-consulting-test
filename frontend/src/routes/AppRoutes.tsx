import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ContactsPage from "../pages/Contacts/ContactsPage";
import ClientsPage from "../pages/Clients/ClientsPage";
import ProspectsPage from "../pages/Prospects/ProspectsPage";
import FreelancesPage from "../pages/Freelances/FreelancesPage";
import PartenairesPage from "../pages/Partenaires/PartenairesPage";
import OpportunitesPage from "../pages/Opportunites/OpportunitesPage";
import MissionsPage from "../pages/Missions/MissionsPage";
import ContratsPage from "../pages/Contrats/ContratsPage";
import FacturesPage from "../pages/Factures/FacturesPage";
import RapportsPage from "../pages/Rapports/RapportsPage";
import ParametresPage from "../pages/Parametres/ParametresPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/prospects" element={<ProspectsPage />} />
          <Route path="/freelances" element={<FreelancesPage />} />
          <Route path="/partenaires" element={<PartenairesPage />} />
          <Route path="/opportunites" element={<OpportunitesPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/contrats" element={<ContratsPage />} />
          <Route path="/factures" element={<FacturesPage />} />
          <Route path="/rapports" element={<RapportsPage />} />
          <Route path="/parametres" element={<ParametresPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}