import axios from 'axios'

let addNote = (data , token) => {
    console.log(data.token)
    const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes"
    return axios.post(`${URL}`, data, {
       headers: {
         Authorization: localStorage.getItem('token'),
       },
     });
 }
 let getAllNotes = (token) => {
  console.log(token)
  const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList"
  return axios.get(`${URL}`, {
   headers: {
     Authorization: localStorage.getItem('token'),
   },
 });
}
let trashNotes = (data,token) => {
  console.log(token)
  const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes"
  return axios.post(`${URL}`, data, {
   headers: {
     Authorization: localStorage.getItem('token'),
   },
 });
}

let updateNotes = (data, token) => {
  console.log(token)
  const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes"
  return axios.post(`${URL}`, data, {
   headers: {
     Authorization: localStorage.getItem('token'),
   },
 });
}


export const addReminder = (data) => {
  console.log(data)
  const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/addUpdateReminderNotes"
  return axios.post(`${URL}`, {
   headers: {
     Authorization: localStorage.getItem('token'),
   },
 });
}


export const updateNoteColor = (data , token) => {
  const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes"
  return axios.post(`${URL}`, data,{
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
}

export const getTrashNoteList   = ( token) => {
  const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList"
  return axios.get(`${URL}`,{
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
}

 export default{addNote , getAllNotes , trashNotes , updateNotes , addReminder , updateNoteColor , getTrashNoteList }