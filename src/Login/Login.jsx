import React, { useState } from 'react'
import "./Login.css"
import infinity from "../images/infinity.png"
import warning from "../images/warning.png"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth } from "../Firebase"


export const Login = () => {
    const [NewUser, setNewUser] = useState(true)
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const submit = (e)=>{
   e.preventDefault();
   setError(false);
   if(NewUser){
    //create user
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
    localStorage.setItem("username", username);
    })
    .catch((error)=>{
        setError(true)
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
    })
   }else{
    //sign in 
    signInWithEmailAndPassword(auth, email,password)
    .catch((error)=>{
        setError(true)
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
    })
   }
    }

  return (
    <div className='login-page'>
        <header>
            <span>
                from <i>Shutterpro Studios</i>
            </span>
        </header>
        <img className='logo' src={infinity} alt='infinity'/>
        <h2 className="title">Shutterpro <br/>Admin <br/> DashBoard </h2>
        <form onSubmit={submit}>
           {NewUser && (<div className='username'>
           
                <input  type='username' onChange={(e)=>{setUserName(e.target.value)}}
                 id='username' required/>
                            <label htmlFor="username">username</label>

                </div>)}
            <div className="email">
                <input type="email" id="email" required onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                            <label htmlFor='email'>email</label>

               
            </div>
            <div className="password">
                <input type="password" id="password" required
                 onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                           <label htmlFor='password'>password</label>

            </div>
          {error && <img src={warning} alt="img" className="status" />
           }
           {error &&<span className="error">Process Failed</span>}
           {error &&<span className="error">{errorMsg}</span>}

           <button className="submit">{NewUser ? "Sign Up": "Login"}
           </button>
           {NewUser ? (          
             <span className="user-stat">Already have a account? <b onClick={()=>{
                setNewUser(false)
                setError(false)
             }}>Log In</b></span>
             ):(          
                 <span className="user-stat">Dont have an account? <b onClick={()=>{
                    setNewUser(true)
                    setError(false)
                 }}>Sign Up</b></span>
             )
            }

        </form>
    </div>
  )
}
