import React from "react";
import "./Appbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import icon from "../assets/icons/keep.icon.png";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsSharpIcon from '@material-ui/icons/SettingsOutlined';
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircle';
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import Sidebar from "../Drawer/Drawer";

var checkOpen = "close";

export default function ToolBar() {
  const [open, setOpen] = React.useState(false);

  const drawerOpenClose = () => {
    if (checkOpen == "open") {
      setOpen(false);
      checkOpen = "close";
    } else if (checkOpen == "close") {
      setOpen(true);
      checkOpen = "open";
    }
    console.log(checkOpen);
  };

  return (
    <div className="main">
      <AppBar position="fixed" color="transparent" >
        <Toolbar className="topBar">
          <div className="startOptions">
            <div className="menuButton">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={drawerOpenClose}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="headerIcon">
              <img className="headerIcon" src={icon} />
            </div>
            <div className="headerTitle">FUNDOO</div>
          </div>
          <div className="search">
            <div className="searchIcon">
              <div className="searchIcon">
                <SearchIcon />
              </div>
            </div>
            <InputBase
              className="searchInput"
              placeholder="Search…"
              classes={{
                root: "inputRoot",
                input: "inputInput",
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className="buttonContainer">
            <div className="button">
              <IconButton aria-label="open drawer">
                <ReplayOutlinedIcon />
              </IconButton>
            </div>
            <div className="button">
              <IconButton aria-label="open drawer">
                <DnsRoundedIcon />
              </IconButton>
            </div>
            <div className="button">
              <IconButton aria-label="open drawer">
                <SettingsSharpIcon />
              </IconButton>
            </div>
          </div>
          <div className="appsContainer">
            <div className="button">
              <IconButton aria-label="open drawer">
                <AppsRoundedIcon />
              </IconButton>
            </div>
            <div className="button">
              <IconButton aria-label="open drawer">
                <AccountCircleOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar drawerOpenClose={open} />
    </div>
  );
}







