import {
    Drawer,
    Toolbar,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { menuItems } from "../../config/menu";

const drawerWidth = 240;

export default function Sidebar() {

    const currentRole = "ADMIN";

    return (

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                    width: drawerWidth
                }
            }}
        >

            <Toolbar />

            <List>

                {menuItems

                    .filter(item =>
                        item.roles.includes(currentRole)
                    )

                    .map(item => (

                        <ListItemButton

                            key={item.path}

                            component={NavLink}

                            to={item.path}

                        >

                            <ListItemIcon>

                                {item.icon}

                            </ListItemIcon>

                            <ListItemText

                                primary={item.title}

                            />

                        </ListItemButton>

                    ))}

            </List>

        </Drawer>

    );

}