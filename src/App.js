import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login'
import Widgets from './components/Widgets';
import {auth} from './firebase'


import './App.css';
import Feed from './components/Feed';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.profilePic
        }))
      } else {
        dispatch(logout())
      }
    })
    
  }, [])

  return (
    <div className="app">
      
     <Header />
     {!user ?  <Login /> : (

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
     )}
      
     

    </div>
  );
}

export default App;
