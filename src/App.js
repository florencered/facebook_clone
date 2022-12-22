
import './App.css';
import Login from "./Pages/login/Login";
import Home from './Pages/home/Home'; 
import Header from './partials/feed/header/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <BrowserRouter> 

 
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/> 
   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
