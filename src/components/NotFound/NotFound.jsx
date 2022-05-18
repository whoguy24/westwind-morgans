///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

// This component will render the blue app bar across the top, global to all main app components.
// It displays the app name, the currently logged in user as well as a button to log out of the application.

function NotFound() {

    // Render DOM
    return (
        <div>
            <h4>Page not Found</h4>
        </div>
    );
}

// Export Component Function
export default NotFound;