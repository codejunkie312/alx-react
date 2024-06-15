import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';
import PropTypes from "prop-types";
import React from 'react';


function App({isLoggedIn=false}) {
  return (
    <>
      <Notifications displayDrawer={false}/>
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};


export default App;
