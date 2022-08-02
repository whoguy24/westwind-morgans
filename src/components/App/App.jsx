import "./App.css";

import React, { useState, useEffect } from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navigation from "../Navigation/Navigation";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import HorseDetail from "../HorseDetail/HorseDetail";
import HorseList from "../HorseList/HorseList";
import Mission from "../Mission/Mission";
import SocialMedia from "../SocialMedia/SocialMedia";
import Testimonials from "../Testimonials/Testimonials";
import Visit from "../Visit/Visit";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Placeholder from "../Placeholder/Placeholder";
import Preloader from "../Preloader/Preloader";

function App() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(loading);
    }, 3000);
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <div>

      <Router>
        
        { loading && <Preloader /> }
        { !loading &&
          <div id="fade-in">
            <Navigation />
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/stallions" element={<Placeholder />} />
              <Route exact path="/mares" element={<Placeholder />} />
              <Route exact path="/stock" element={<Placeholder />} />
              <Route exact path="/breeding" element={<Placeholder />} />
              <Route exact path="/foundation" element={<Placeholder />} />
              <Route exact path="/testimonials" element={<Placeholder />} />
              <Route exact path="/contact" element={<Placeholder />} />
              <Route exact path="/visit" element={<Placeholder />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/admin" element={ user.id?<Admin />:<Login />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        }
      </Router>

    </div>
  );
}

export default App;
