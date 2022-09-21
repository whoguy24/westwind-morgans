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

          <>

            <Navigation />

            <div id="content">
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
                <Route exact path="/testimonials" element={<HorseGallery type="testimonials" title="Testimonials" />} />
                <Route path="/testimonials/:id" element={<HorseDetail type="testimonials" title="Testimonials" />} />
                <Route exact path="/breeding" element={<Placeholder />} />
                <Route exact path="/foundation" element={<Placeholder />} />
                <Route exact path="/contact" element={<Placeholder />} />
                <Route exact path="/visit" element={<Visit />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin" element={user.id?<Admin />:<Login />} />
                <Route exact path="*" element={<NotFound />} />
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
