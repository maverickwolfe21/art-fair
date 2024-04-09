import { Link } from "react-router-dom";

import { useState, useRef, useEffect } from "react";

import { styled, useTheme } from "@mui/material/styles";

import { useApp } from "../../utils/app-context";

import { Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const style = "hover:underline underline-offset-2";

const drawerWidth = 240;

const options = [
  { name: "Shop", link: "/shop" },
  { name: "Artists", link: "/artists" },
  { name: "About the Fair", link: "/about" },
  { name: "Favorites", link: "/favorites" },
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(open && {
    width: `calc(100%)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Header = () => {
  const { logout, loggedIn } = useApp();

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleLogout = (event) => {
    logout();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="mb-8">
      <AppBar sx={{ bgcolor: "transparent" }} className="flex items-center" elevation={0} color="default" position="relative" open={open}>
        <div className="flex w-screen lg:w-4/5 justify-between p-5 items-center border-2 border-black bg-transparent text-black">
          <div className="cursor-pointer">
            <Link className="text-xl" to="/">
              Art Fair
            </Link>
          </div>
          <Hidden lgUp>
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: "none" }) }}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Hidden lgDown>
            <div className="flex gap-5">
              {loggedIn() ? (
                <>
                  <Link className={style} to="/shop">
                    Shop
                  </Link>
                  <Link className={style} to="/artists">
                    Artists
                  </Link>
                  <Link className={style} to="/about">
                    About the Fair
                  </Link>
                  <Link className={style} to="/favorites">
                    Favorites
                  </Link>
                  <button className="text-red-600" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className={style} to="/shop">
                    Shop
                  </Link>
                  <Link className={style} to="/artists">
                    Artists
                  </Link>
                  <Link className={style} to="/about">
                    About the Fair
                  </Link>
                  <Link className={style} to="/login">
                    Login
                  </Link>
                  <Link className={style} to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </Hidden>
        </div>
      </AppBar>

      <Hidden lgUp>
        <Drawer
          ref={ref}
          sx={{
            width: open ? drawerWidth : 0,
            // flexShrink: 0,
            "& .MuiDrawer-paper": {
              background: "white",
              color: "black",
              border: "2px solid black",
              width: open ? drawerWidth : 0,
            },
          }}
          variant="temporary"
          anchor="right"
          open={open}
          ModalProps={{ onBackdropClick: handleDrawerClose }}
        >
          <div className="flex mt-2 justify-end">
            <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
          </div>
          <List className="flex flex-col gap-1 justify-center">
            {options.map((text, index) => (
              <ListItem key={index} disablePadding>
                <Link className="w-full" to={text.link} onClick={handleDrawerClose}>
                  <ListItemButton>
                    <ListItemText className="text-black" primary={text.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}

            {loggedIn() ? (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleLogout();
                    handleDrawerClose();
                  }}
                >
                  <ListItemText className=" text-red-500" primary="Log Out" />
                </ListItemButton>
              </ListItem>
            ) : (
              <div>
                <Link className="w-full" to={"/login"} onClick={handleDrawerClose}>
                  <ListItemButton>
                    <ListItemText className="text-black" primary={"Log In"} />
                  </ListItemButton>
                </Link>
                <Link className="w-full" to={"signup"} onClick={handleDrawerClose}>
                  <ListItemButton>
                    <ListItemText className="text-black" primary={"Sign Up"} />
                  </ListItemButton>
                </Link>
              </div>
            )}
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Header;
