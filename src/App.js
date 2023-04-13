
import { useState,useEffect } from 'react';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import { Login } from './Login/Login';
import TableH from './component/Main/Table'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';


function App() {
const [loggedIn, setLoggedIn] = useState(true);
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
    if(user){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
    })

  }, [])
  return (

    <div className="App">
    
      {loggedIn ? (<>
      <Navigation/>
        <TableH/>
         
      </>):
      (<Login /> )}
     <header></header>
      
     
    </div>
  );
}

export default App;
