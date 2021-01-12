import React , { useState, useEffect } from 'react'
import AppBar from "../AppBar/Appbar"
import NoteCreate from "../NoteFunction/CreateNote/createNote"
import DisplayNote from "../NoteFunction/DisplayNote/DisplayNotes"
// import SideDrawer from "./Drawer"
// import DisplayNotes from "./DashbordNotes"
import Notte from "../NoteFunction/CreateNote/Nots"
import Service  from '../../Services/NoteService'
import "./DashBoard.css"


export default function Home(){
    const [noteList, setNoteList] = useState([])

      
    const getNote = () => {
        Service.getAllNotes('userToken')
          .then((res) => {
            setNoteList(res.data.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      useEffect(() => {
        getNote()
      }, []);
    

    return(
        <div>
        <AppBar/>
        {/* <NoteCreate /> */}
        {/* <SideDrawer/> */}
        {/* <AddNote/> */}
        
        <NoteCreate   GetNote={getNote}   />
        <div className="card-body text-center" >
        <div className="main">
        <DisplayNote item={noteList} GetNote={getNote} className="coloumn" />
      </div>
        </div>
        {/* <Notte/> */}
        </div>
    )

}

  