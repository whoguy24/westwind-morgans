///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import React from 'react';
import { Paper, Button } from '@mui/material'

function Slide({slide})
{
    return (
        <div>
            <img className='carousel-image' src={slide.path} />
        </div>
    )
}

export default Slide;