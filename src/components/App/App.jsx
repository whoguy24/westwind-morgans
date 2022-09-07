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
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // Fetch User if Logged In
  if (user.id) {
    useEffect(() => {
      dispatch({ type: "FETCH_USER" });
    }, [dispatch]);
  }

  // Render DOM
  return (
    <>

      <Router>

        { loading ? 
        
        <Preloader />
        
        :

          <div id="fade-in">
            <Navigation />
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/stallions" element={<HorseGallery category="stallions" />} />
              <Route path="/stallions/:id" element={<HorseDetail category="stallions" />} />
              <Route exact path="/mares" element={<HorseGallery category="mares" />} />
              <Route path="/mares/:id" element={<HorseDetail category="mares" />} />
              <Route exact path="/stock_for_sale" element={<HorseGallery category="stock_for_sale" />} />
              <Route path="/stock_for_sale/:id" element={<HorseDetail category="stock_for_sale" />} />
              <Route exact path="/breeding" element={<Placeholder />} />
              <Route exact path="/foundation" element={<Placeholder />} />
              <Route exact path="/testimonials" element={<Placeholder />} />
              <Route exact path="/contact" element={<Placeholder />} />
              <Route exact path="/visit" element={<Placeholder />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/admin" element={user.id?<Admin />:<Login />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>

        }
      </Router>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default App;
