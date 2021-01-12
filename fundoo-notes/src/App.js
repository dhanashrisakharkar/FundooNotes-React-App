//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import register from './pages/Register/Register';
import login from './pages/Login/Login';
import forgetPassword from './pages/ForgetPassword/ForgetPassword';
import resetpassword from './pages/ResetPassword/resetpassword'
import drawer from "./Components/Drawer/Drawer"
import dashboard from "./Components/Dashboard/dashboard"

function App() {
  return (
    <Router>
    <div className="App">
     
      <Switch>
        <Route path={"/"} exact  component={login}/>  
        <Route path={"/login"} exact  component={login}/> 
        <Route path={"/register"} exact component={register}></Route> 
        <Route path={"/forgetPassword"} exact component={forgetPassword}></Route>
        <Route path={"/resetpassword/:token"} exact component={resetpassword}></Route>
        <Route path={"/dashboard"} exact component={dashboard}></Route>
        <Route path={"/drawer"} exact component={drawer}></Route>
        
      </Switch>
       
    </div>
    </Router>
  );
}

export default App;
