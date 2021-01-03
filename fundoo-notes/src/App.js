//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import register from './Components/Register';
import login from './pages/Login';
import forgetPassword from './pages/ForgetPassword';
import resetpassword from './pages/resetpassword'
//export default class App extends Component {
function App() {
  return (
    <Router>
    <div className="App">
     
      <Switch>
        <Route path={"/"} exact  component={login}/>  
        <Route path={"/register"} exact component={register}></Route> 
        <Route path={"/forgetPassword"} exact component={forgetPassword}></Route>
        <Route path={"/resetpassword"} exact component={resetpassword}></Route>
          {/* <Route path="/login" exact Component={Login}/>  */}
      {/* // <Route path="" exact Component={Register}/> } 
        // {<Route path={"/"} exact component={Login}/> */}
        
      </Switch>
       
    </div>
    </Router>
  );
}

export default App;
