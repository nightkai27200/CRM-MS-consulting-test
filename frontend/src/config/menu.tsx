import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";

import type { MenuItem } from "../types/menu";



export const menuItems: MenuItem[] = [
   {
        title: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
        roles: [
            "ADMIN",
            "DIRECTEUR",
            "COMMERCIAL",
            "RH",
            "CONSULTANT"
        ]
    },

    {
        title: "Contacts",
        path: "/contacts",
        icon: <PeopleIcon />,
        roles: [
            "ADMIN",
            "DIRECTEUR",
            "COMMERCIAL"
        ]
    },

    {
        title: "Clients",
        path: "/clients",
        icon: <BusinessIcon />,
        roles: [
            "ADMIN",
            "DIRECTEUR",
            "COMMERCIAL"
        ]
    },

    {
        title: "Partenaires",
        path: "/partenaires",
        icon: <HandshakeIcon />,
        roles: [
            "ADMIN",
            "DIRECTEUR"
        ]
    },

    {
        title: "Missions",
        path: "/missions",
        icon: <WorkIcon />,
        roles: [
            "ADMIN",
            "DIRECTEUR",
            "CONSULTANT"
        ]
    },

    {
        title: "Contrats",
        path: "/contrats",
        icon: <AssignmentIcon />,
        roles: [
            "ADMIN",
            "DIRECTEUR"
        ]
    },

    {
        title: "Factures",
        path: "/factures",
        icon: <ReceiptIcon />,
        roles: [
            "ADMIN"
        ]
    },

    {
        title: "Paramètres",
        path: "/parametres",
        icon: <SettingsIcon />,
        roles: [
            "ADMIN"
        ]
    }
];