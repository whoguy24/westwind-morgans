import "./App.css";

import React, { useEffect } from "react";
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

function App() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <div className="App">

      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/stallions" element={<HorseDetail />} />
          <Route exact path="/mares" element={<HorseDetail />} />
          <Route exact path="/sales" element={<HorseDetail />} />
          <Route exact path="/expecting" element={<HorseDetail />} />
          <Route exact path="/stallions_gallery" element={<HorseList />} />
          <Route exact path="/mares_gallery" element={<HorseList />} />
          <Route exact path="/sales_gallery" element={<HorseList />} />
          <Route exact path="/expecting_gallery" element={<HorseList />} />
          <Route exact path="/mission" element={<Mission />} />
          <Route exact path="/social_media" element={<SocialMedia />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/visit" element={<Visit />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={ user.id?<Admin />:<Login />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer id="footer"/>
      </Router>

    </div>
  );
}

export default App;
