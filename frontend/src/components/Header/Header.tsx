import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Box,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import logo from "../../assets/logo.png.jpg";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>

        {/* Zone centrée logo + titre */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >

          <Box
            component="img"
            src={logo}
            alt="MS Consulting"
            sx={{
              height: 45,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            MS Consulting CRM
          </Typography>

        </Box>


        {/* Notifications à droite */}
        <Box sx={{ marginLeft: "auto" }}>

          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Avatar sx={{ ml: 2, display: "inline-flex" }}>
            M
          </Avatar>

        </Box>

      </Toolbar>
    </AppBar>
  );
}