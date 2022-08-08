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

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function App() {

  // Redux Variables
  const dispatch = useDispatch();

  // State Variables
  const [loading, setLoading] = useState(false);

  // Redux Store Variables
  const user = useSelector(store => store.user);

  // Delay Render to Allow Preloader Time to Display
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
