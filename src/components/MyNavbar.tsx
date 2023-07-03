import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  List,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { ReactComponent as TomyaLogo } from "../assets/tomya-logo.svg";

export const MyNavbar = () => {
  // const [activeButton, setActiveButton] = useState(null);

  
  const menuItems = [
    { id: 1, text: "Kripto Paralar" },
    { id: 2, text: "Market" },
    { id: 3, text: "Komisyonlar" },
    { id: 4, text: "Hakkımızda" },
    { id: 5, text: "Basında Biz" },
    { id: 6, text: "Duyurular" },
    { id: 7, text: "İletişim" },
    { id: 8, text: "Blog" },
  ];

  return (
    <Grid item>
      <AppBar
        position="fixed"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#5952e4",
            height: "7vh",
            width: "80%",
            margin: "auto",
            borderRadius: "0 0 12px 12px",
          }}
        >
          <IconButton>
            <TomyaLogo />
          </IconButton>
          <List sx={{ display: "flex", alignItems: "center" }}>
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem.id}
                sx={{
                  color: "white",
                  textTransform: "none",
                  margin: "0 8px",
                }}
              >
                <ListItemText primary={menuItem.text} />
              </Button>
            ))}
            <Button
              sx={{
                color: "white",
                border: "1px solid white",
                borderRadius: "20px",
                textTransform: "none",
                margin: "0 8px",
              }}
            >
              <ListItemText primary={"Giriş Yap"} />
            </Button>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                margin: "0 8px",
              }}
            >
              <ListItemText primary={"Kayıt Ol"} />
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
