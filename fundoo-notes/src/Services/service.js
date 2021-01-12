import axios from 'axios'


 let login = (data) => {
    const URL = "http://fundoonotes.incubation.bridgelabz.com/api/user/login";
    console.log("This is from service class", data);
    return axios.post(`${URL}`, data)
  };

 let register = (data) => {
    const URL = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp"
    return axios.post( `${URL}`, data)
}

   let forgetpassword = (data) => {
      const URL = "http://fundoonotes.incubation.bridgelabz.com/api/user/reset"
      return axios.post( `${URL}`, data)
}

let resetpassword = (data, token) => {
   console.log(data,token)
   const URL = "http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password"
 return axios.post(`${URL}`, data, {
   headers: {
     Authorization: `${token}`,
   },
 });
};
   // return axios.post( `${URL}`, data)


export default {  register , login , forgetpassword ,resetpassword  }