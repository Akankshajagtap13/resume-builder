import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import jwtDecode from 'jwt-decode';
import { startGetUserAccount } from './actions/userAction';
import Header from './pages/Header';
import ResumeBuilder from './pages/ResumeBuilder';
import MainContent from './pages/MainContent';
import Education from './pages/Education';
import ContactInfo from './pages/ContactInfo';
import Experience from './pages/Experience';
import PersonalInfo from './pages/PersonalInfo';
import CongratulationsPage from './pages/CongratulationsPage';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';


function App() {
  
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const dispatch = useDispatch();

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  const user = useSelector((state) => state.user.user);
  console.log(user, 'user');

  const userId = user?._id;
  console.log(userId, 'userId');

  useEffect(() => {
    if (userLoggedIn) {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const userRole = decoded.role;
      setRole(userRole);
    }
  }, [userLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth();
      dispatch(startGetUserAccount());
    }
  }, [dispatch]);

  return (
    <>
    <HomePage />
    <PersonalInfo />
    <MainContent />
    <Experience />
    <Education />
    <ContactInfo />
    <CongratulationsPage />
    <Footer />
    </>
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/resume-builder" element={<ResumeBuilder />} />
    //     <Route path="/main-content" element={<MainContent />} />
    //     <Route path="/personal-info" element={<PersonalInfo />} />
    //     <Route path="/education" element={<Education />} />
    //     <Route path="/contact-info" element={<ContactInfo />} />
    //     <Route path="/experience" element={<Experience />} />
    //     <Route path="/congratulations" element={<CongratulationsPage />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;




