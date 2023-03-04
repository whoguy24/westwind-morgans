///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import "./App.css";

// Import Libraries
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import Custom Components
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Placeholder from "../Placeholder/Placeholder";
import Preloader from "../Preloader/Preloader";
import HorseGallery from "../HorseGallery/HorseGallery";
import HorseDetail from "../HorseDetail/HorseDetail";
import Visit from "../Visit/Visit";
import Contact from "../Contact/Contact";
import UserBar from "../UserBar/UserBar";
import Users from "../Users/Users";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function App() {

  // Redux Variables
  const dispatch = useDispatch();

  // Redux Store Variables
  const user = useSelector(store => store.user);

  // Delay Render to Allow Preloader Time to Display
  const [loading, setLoading] = useState(false);

  const facebookLink = "https://www.facebook.com/people/Westwind-Morgans/100063575859271/";

  const firebaseConfig = {
    apiKey: "AIzaSyDAfj1HaGNJ3r783qI_MgGehWa8qjsxknI",
    authDomain: "westwind-morgans-377918.firebaseapp.com",
    projectId: "westwind-morgans-377918",
    storageBucket: "westwind-morgans-377918.appspot.com",
    messagingSenderId: "597094908498",
    appId: "1:597094908498:web:88dd373472f95e35e0d58b",
    measurementId: "G-E14QW04W7R"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //     dispatch({ 
  //       type: 'SET_SERVER', 
  //       payload: {
  //           result:200,
  //           userbar:true,
  //           loading:false, 
  //           loading_duration:1000,
  //           toast_open:false,
  //           toast_autoHideDuration:6000, 
  //           toast_severity:"info", 
  //           toast_variant:"filled",
  //           toast_description:""
  //       }
  //   });
  // }, []);

  // Fetch User if Logged In
  // useEffect(() => {
  //   // if (user.id) {
  //     dispatch({ type: "FETCH_USER" });
  //   // }
  // }, [dispatch]);


  // App is rendered inside React Router DOM component. 
  // If the application is in the process of loading, then show only the Preloader component. (Spinning Startup Logo)
  // If the app is loaded, render components based on route.
  // Navigation and Footer components render globally.

  // Render DOM
  return (
    <>

      <Router>

        { loading ? 
        
          <Preloader />
        
        :

          <>

            <Navigation facebookLink={facebookLink} />

            <UserBar />

            <div id="app-content">
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/stallions" element={<HorseGallery type="stallions" title="Stallions" />} />
                <Route path="/stallions/:id" element={<HorseDetail type="stallions" title="Stallions" />} />
                <Route exact path="/mares" element={<HorseGallery type="mares" title="Mares" />} />
                <Route path="/mares/:id" element={<HorseDetail type="mares" title="Mares" />} />
                <Route exact path="/colts" element={<HorseGallery type="colts" title="Colts" />} />
                <Route path="/colts/:id" element={<HorseDetail type="colts" title="Colts" />} />
                <Route exact path="/fillies" element={<HorseGallery type="fillies" title="Fillies" />} />
                <Route path="/fillies/:id" element={<HorseDetail type="fillies" title="Fillies" />} />
                <Route exact path="/geldings" element={<HorseGallery type="geldings" title="Geldings" />} />
                <Route path="/geldings/:id" element={<HorseDetail type="geldings" title="Geldings" />} />
                <Route exact path="/testimonials" element={<Placeholder />} />
                {/* <Route exact path="/testimonials" element={<HorseGallery type="testimonials" title="Testimonials" />} />
                <Route path="/testimonials/:id" element={<HorseDetail type="testimonials" title="Testimonials" />} /> */}
                {/* <Route exact path="/breeding" element={<Placeholder />} /> */}
                {/* <Route exact path="/foundation" element={<Placeholder />} /> */}
                <Route exact path="/contact" element={<Contact type="contact" title="Contact" facebookLink={facebookLink}/>} />
                {/* <Route exact path="/visit" element={<Visit />} /> */}
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin" element={ user?.id ? <Admin /> : <Login /> } />
                <Route exact path="/users" element={ user?.id ? <Users /> : <Login /> } />
                <Route exact path="*" element={<NotFound />} />


                <Route exact path="/resetPassword/:username1/:token" element={<Login />} />


              </Routes>
            </div>
            
            <Footer />

          </>

        }
      </Router>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default App;
