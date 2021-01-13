import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import Sidebar from "../Drawer/Drawer";
import { Avatar, Button } from "@material-ui/core";
import dhanashri from "../assets/images/dhanashri.jpg"

var checkOpen = "close";
// const styles = {
//   paperContainer: {
//         Image: `url(${dhanashri})`
//   }
// };

export default function ToolBar() {
  const [open, setOpen] = React.useState(false);
  const [hide, setHide] = useState(false)
  let history = useHistory();

  let userEmail = localStorage.getItem("email")
  let userFirstName = localStorage.getItem("firstName")
  let userLastName = localStorage.getItem("lastName")

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

  const handleHideAccount = () => {
    setHide(!hide)
  }

  const handleUnHideAccount = () => {
    setHide(false)
  }
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
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
            <div className="image">
              <div className="button">
                <IconButton aria-label="open drawer" onClick={handleHideAccount}>
                  <Avatar alt='profile' src={dhanashri} />
                </IconButton>
              </div>
            </div>
            <div className={hide ? "true profile" : "false profile"} >
              <div className="person">
                <div className="avatarContainer">
                  <Avatar className="avatarIcon" alt='profile' src={dhanashri} />
                </div>
                <div className='name' style={{ fontSize: 15 }}>
                  {userFirstName} {userLastName}
                </div>
                <div className='email' style={{ fontSize: 15 }}>
                  {userEmail}
                </div>
              </div>
              <div className="cardActions">
                <Button variant="contained" style={{
                  fontWeight: 700,
                  backgroundColor: "#f73378",
                }} onClick={() => {
                  handleLogout()
                }}>SIGN OUT</Button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar drawerOpenClose={open} />
    </div>
  );
}







