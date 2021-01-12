import React, { useState, useEffect } from 'react';
import DisplayNote from '../DisplayNote/DisplayNotes';
import Service from '../../../Services/NoteService';

const services = new Service()

export default function Trash() {
    const [trashNote, setTrashNote] = useState([]);
    
    const getTrashNote = () => {
        services.getTrashNoteList("userToken")
            .then((res) => {
                setTrashNote(res.data.data.data)
                console.log(trashNote)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTrashNote()
    }, []);

    return (
        <div className="main">
            <DisplayNote item={trashNote} GetNote={getTrashNote} />
        </div>
    )
}