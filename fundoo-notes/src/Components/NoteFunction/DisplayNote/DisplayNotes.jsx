import React, { useState  } from 'react'
import './DisplayNotes.css'
import DisplayIcons from '../DisplayIcon/DisplayIcons'
import UpdateNote  from '../UpdateNote/UpdateNote'

const DisplayNote = (props) => {
    const [bgColor, setBgColor] = useState('#fff')
    const [update, setUpdate] = useState(false)
    const [note, setNote] = useState([])

    const handleUpdate = (value) => {
        setUpdate(true)
        setNote(value)
    }

    const handleClose = () => {
        setUpdate(false)
    }

    

    return (
        <div className="display-note" className="card-body text-center" >
            {props.item.filter(item => item.isDeleted === false).map((item) => (
                <div className="display">
                    <div className="addNote" style={{ backgroundColor: item.color }}>
                        <div className="notes1" onClick={() => handleUpdate(item)}>
                            <div className="title pds">
                                {item.title}
                            </div>
                            <div className='note pds'>
                                {item.description}
                            </div>
                        </div>
                        <div className="toolbar1">
                            <DisplayIcons setBgColor={setBgColor} item={item} GetNote={props.GetNote} />
                        </div>
                    </div>
                </div> 
            ))}
            <UpdateNote item={note} open={update} close={handleClose} GetNote={props.GetNote}/>
        </div>
    );
}

export default DisplayNote