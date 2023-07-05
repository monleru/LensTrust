import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import Footer from './components/footer';
import Profile from './pages/profile/profile';

function App() {
  const [profile, setProfile] = useState<null | string>(null)
  async function onSignIn(tokens:any, profile:any) {
    console.log('tokens: ', tokens)
    console.log('profile: ', profile)
    setProfile(profile.handle)
  }
  
  return (
    <div>
      <Header />
      {/* <SignInWithLens
        onSignIn={onSignIn}
      />
      {profile ? 
      <Profile
        theme={Theme.dark}
        handle={profile}
      />
     : 'login'} */}
     <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
     </div>
    </div>
  );
}

export default App;
