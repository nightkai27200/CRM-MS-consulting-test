import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";


export default function DashboardLayout() {

  return (

    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f6fa"
      }}
    >


      {/* MENU GAUCHE */}
      <Sidebar />



      {/* ZONE PRINCIPALE */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3
        }}
      >


        {/* HEADER */}

        <Header />


        <Toolbar />



        {/* CONTENU DES PAGES */}

        <Outlet />


      </Box>


    </Box>

  );

}