import React, { useState, useEffect } from 'react';
import NewNote from './createNote';
import DisplayNote from '../DisplayNote/DisplayNotes';
import Service from '../../../Services/NoteService';

// const services = new Service()

export default function Note() {
    const [noteList, setNoteList] = useState([]);

    const getNote = () => {
        Service.getAllNotes("userToken")
            .then((res) => {
                setNoteList(res.data.data.data.filter(item => item.isDeleted === false && item.isArchived === false));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getNote()
    }, []);

    return (
        <div className="main">
            <NewNote GetNote={getNote} />
            <DisplayNote item={noteList} GetNote={getNote} />
        </div>
    )
}