import React, { useState , useEffect } from 'react'
import './displayIcons.css';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Service  from '../../../Services/NoteService';
import  addReminder from '../../../Services/NoteService';
import moment from "moment";
import Reminder from "../Reminder/Reminder"
import {Chip} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

// const services = new Service()

const DisplayIcons = ({ setBgColor, item, GetNote  ,  setRefresh , props }) => {
    const [color, setColor] = useState(false)
    const [showColorList, setShowColorList] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    // let Bgcolor = props.color;
//     var noteId = [];
//   noteId.push(item.id);
    


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTrashNotes = () => {
        let data = {
            noteIdList: [item.id]  , isDeleted: true
        }
        Service.trashNotes(data).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        })
        GetNote();
    }

    const DATA = [
        { title: "Default", id: "#fff" },
        { title: "Red", id: "#f28b82" },
        { title: "orange", id: "#fbbc04" },
        { title: "yellow", id: "#fff475" },
        { title: "green", id: "#ccff90" },
        { title: "Teal", id: "#a7ffeb" },
        { title: "Blue", id: "#a7ffeb" },
        { title: "Dark Blue", id: "#aecbfa" },
        { title: "purple", id: "#d7aefb" },
        { title: "pink", id: "#fdcfe8" },
        { title: "Brown", id: "#e6c9a8" },
        { title: "Gray", id: "#e8eaed" },
    ];

    const selectColor = (value) => {
        props.setBgColor(value);
        // Bgcolor=value;
    };


    const handleColor = () => {
        setColor(true)
    }

    const handleColorOut = () => {
        setColor(false)
    }
    // useEffect(() => {
    //     if(dateTimeChip !== ""){
    //       let data = {
    //         reminder: dateTimeChip,
    //         noteIdList: noteId
    //       }
    //       addReminder(data).then(
    //         () => {setRefresh(Math.random())}
    //       )
    //       .catch(err=>{
    //         console.warn("error", err);
    //       })
    //     }
    //     setDateTimeChip("")
    //   }, [dateTimeChip, noteId, setRefresh])

    //   const handleDateAndTime = (value) =>{
    //     let todaysDate = new Date().toString()
    //     if(value.slice(0, 7) === todaysDate.slice(0, 7)){
    //         return ('today '+moment(value).format("LT"))
    //     }
    //    return (value.slice(4,10)+', '+moment(value).format("LT"))
    //   }

    // const updateColor = () => {
    //     if (props.id !== '') {
    //         let data = {
    //             noteIdList: [props.id], color : Bgcolor
    //         }
    //         Service.updateColor("userToken").then(res => {
    //             console.log(res)
    //             props.GetNote();
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }
    // }

    

    return (
        <div className="tools">
            <IconButton aria-label="Remind me" edge="start">
                <AddAlertOutlinedIcon fontSize="small" />
                {/* {item.reminder !== undefined
                  ? item.reminder.map((item, index)=>{
                    let data = handleDateAndTime(item)
                    return(
                      <Chip 
                        avatar={<AccessTimeIcon/>}
                        key={index} 
                        className="displayReminder"
                        label={data}/>
                      )})
                  : null
                } */}
               {/* < Reminder setDateTimeChip={setDateTimeChip} item={item}/> */}
            </IconButton>
            <IconButton aria-label="Collaborator">
                <PersonAddOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Change color"
                 onClick={() => { handleColor(); setShowColorList(!showColorList) }}>
                <ColorLensOutlinedIcon fontSize="small" />
            </IconButton>
            {showColorList ? (
                <div className={color ? "visible color-change" : "NV color-change"}
                    onMouseOver={handleColor} onMouseOut={handleColorOut} style={{ width: 150, height: 125 }}>
                    {DATA.map((item) => (
                        <button onMouseOver={handleColor} onClick={() => { selectColor(item.id); }}
                            className="button-color"
                            style={{ backgroundColor: item.id }}
                        ></button>
                    ))}
                </div>
            ) : null}
            {/* <div>
            <Colorpillote setBgColor={setBgColor} />
            </div> */}
            <IconButton aria-label="Add image">
                <ImageOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Archive note">
                <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="More" onClick={handleClick}>
                <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => {
                    handleClose();
                    handleTrashNotes()
                }}>Delete Note</MenuItem>
            </Menu>
        </div>
    )
}

export default DisplayIcons