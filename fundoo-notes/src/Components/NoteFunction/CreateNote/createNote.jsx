import React , { useState, useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import Button from '@material-ui/core/Button';
import NoteServices from "../../../Services/NoteService"
import "./CreateNote.css";
import DisplayIcons from "../DisplayIcon/DisplayIcons";

// import CardActions from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleInput: {
    padding: "10px 15px",
    width: "70%",
  },
  noteInput: {
    padding: "10px 15px",
  },
  input: {},

  Checkbox: {
    marginLeft: 5,
    [theme.breakpoints.down(660)]: {
      padding: "0.3rem",
    },
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
export default function AddNote({GetNote} ) {
   const [open, setOpen] = useState(true);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] =React.useState("");
  const classes = useStyles();
  const [pin, setPin] = useState(false)
  const [loading, setLoading] = React.useState(false);
  const [bgColor, setBgColor] = useState('#fff')
  const id = ''


  let addNote = () => {
    const data = new FormData();
    console.log(data)
    data.append("title", title);
    data.append("description", description);
    data.set("color", bgColor);
    if (title !== "" && description !== "") {
      setLoading(true);
      NoteServices.addNote(data )
        .then(() => {
          // setLoading(false);
          GetNote()
          setBgColor('#fff')
          setLoading ({
            
            title : " ",
            description : " "
          })
          console.log("Note added Sucessfully")
        })
        .catch(() => {
          // setLoading(false);
         
          console.log("Some Error Occured while processing request")
        });
    } else {
      
      console.log("Title and description cannot be empty")
    }
  };

  // const updateNotes = () => {
  //   let formData = new FormData()
  //   formData.append('title', title)
  //   formData.append('description', description)
  //   formData.append('noteId', item.id)
  //   updateNoteTitleDescription(formData).then(
  //     ()=> {setRefresh(Math.random)}
  //   )
  //   .catch(err=>{
  //     console.warn("error", err);
  //   })
  // }


  const handlePin = () => {
    setPin(true)
}
const handleClick = () => {
  setOpen(false)
}

const handleClose = () => {
  setOpen(true)
}

  return (
    <div className="notes">
        {open ?
            <div className="contain container" >
                <div className="note" onClick={handleClick}>Take a note...</div>
                <IconButton><CheckBoxOutlinedIcon /></IconButton>
                <IconButton> <BrushIcon /></IconButton>
                <IconButton> <ImageOutlinedIcon /></IconButton>
            </div> :
            <div className="contain container1" style={{ backgroundColor: bgColor }}>
                <div className="note1" >
                    <div className="title pd">
                        <InputBase placeholder='Title' fullWidth  onChange={(e) => setTitle(e.currentTarget.value)} />
                        <IconButton onClick={handlePin}>
                            {/* <img src={pin ? FilledPin : OutlinedPin} alt='pin' /> */}
                        </IconButton>
                    </div>
                    <div className='note pd'>
                        <InputBase placeholder='Take a note...' fullWidth 
                            onChange={(e) => setDescription(e.currentTarget.value)} />
                    </div>
                </div>
                <div className="toolbar">
                    <DisplayIcons setBgColor={setBgColor} id={id}/>
                    <div className="close-button">
                        <Button size="small" onClick={() => {addNote(); handleClose();}}>Close</Button>
                    </div>
                </div>
            </div>
        }
    </div>
    );
}