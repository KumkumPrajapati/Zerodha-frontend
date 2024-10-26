import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import Notfound from '../Notfound';
function SignupPage() {
  return (
    <Routes>
      
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
  );
}

export default SignupPage;