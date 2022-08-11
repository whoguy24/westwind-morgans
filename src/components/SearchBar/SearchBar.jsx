///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../SearchBar/SearchBar.css';

import { useState } from 'react';

// Import MUI Components
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Input from '@mui/material/Input';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function SearchBar() {

  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  
  function handleSearchButton() {
    console.log("Search");
  }
  // Render DOM
  return (
    <>



        <div id="search-bar-container">

          <TextField 
            id="search-bar-input" 
            variant="standard" 
            placeholder="Search Stallions"
            value={search}
            type="text"
            size="small"
            fullWidth
            onChange={(event) => setSearch(event.target.value)}
            InputProps={{ 
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    id="search-bar-button"
                    aria-label="search" 
                    onClick={handleSearchButton} 
                    >
                    <SearchIcon/>
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

        </div>



    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default SearchBar;