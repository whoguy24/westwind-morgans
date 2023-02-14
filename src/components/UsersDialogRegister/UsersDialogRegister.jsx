///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersDialogRegister/UsersDialogRegister.css';

import { useSelector } from 'react-redux';

import React, { useState } from 'react';

// Import Custom Components

// Import MUI Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersDialogRegister({ dialog, resetDialog, userData, editUserData, validateInput, registerUser, validateForm, formError, setFormError }) {

  // Redux Store Variables
  const user = useSelector(store => store.user);

  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState(0);

  function handleRegisterButton() {
    setStep(3);
    registerUser();
  }

  function handleNextButton(step) {
    validateForm("REGISTER").then((result)=> {
      if (result) {
        setStep(step);
      }
      else{
        setFormError("Please resolve errors before continuing.");
      }
    })
  }

  function handleCloseButton() {
    resetDialog(false, "", {})
  }

  return (
    <>

        <Dialog open={ dialog.active && dialog.mode === "REGISTER" } onClose={()=>resetDialog(false, "", {})}>

          <DialogTitle id="users-dialog-title">Register User</DialogTitle>

            <DialogContent>

              <Stepper id="users-dialog-stepper" activeStep={step}>
                <Step>
                  <StepLabel>Account</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Optional</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Review</StepLabel>
                </Step>
              </Stepper>

              <Collapse id="users-dialog-collapse" in={formError!=null}>
                <Alert id="users-dialog-alert" severity="error" variant="filled">{formError}</Alert>
              </Collapse>

                { step === 0 && 

                  <div className="users-dialog-grid-container">
              
                    <TextField 
                      className={ user.role === "ADMIN" ? "users-dialog-textfield-username" : "users-dialog-textfield" }
                      label="Username" 
                      variant="standard" 
                      error={Boolean(userData.username.error)}
                      helperText={userData.username.error} 
                      value={userData.username.value  || ""} 
                      onChange={(event)=>editUserData("USERNAME", event.target.value)}
                      onBlur={()=>validateInput("USERNAME")}
                    />

                    { user.role === "ADMIN" &&

                      <Select
                        variant="standard"
                        label="Role"
                        error={Boolean(userData.role.error)}
                        value={userData.role.value || ""} 
                        onChange={(event)=>editUserData("ROLE", event.target.value)}
                        onBlur={()=>validateInput("ROLE")}
                      >
                        <MenuItem value={"USER"}>USER</MenuItem>
                        <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                      </Select>

                    }

                    <TextField 
                      className="users-dialog-textfield" 
                      label="Email" 
                      variant="standard" 
                      error={Boolean(userData.email.error)}
                      helperText={userData.email.error} 
                      value={userData.email.value || ""} 
                      onChange={(event)=>editUserData("EMAIL", event.target.value)}
                      onBlur={()=>validateInput("EMAIL")}
                    />

                    <TextField 
                      className="users-dialog-textfield" 
                      type= {showPassword ? "text" : "password"}
                      label="Password" 
                      variant="standard" 
                      error={Boolean(userData.password_new.error)}
                      helperText={userData.password_new.error} 
                      value={userData.password_new.value || ""} 
                      onChange={(event)=>editUserData("PASSWORD_NEW", event.target.value)}
                      onBlur={()=>validateInput("PASSWORD_NEW")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                              <IconButton 
                                id="login-input-toggle-visibility-button"
                                disableRipple
                                onClick={()=>setShowPassword( !showPassword ? true : false )} 
                              >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />

                    <TextField 
                      className="users-dialog-textfield" 
                      type= {showPassword ? "text" : "password"}
                      label="Confirm Password" 
                      variant="standard" 
                      error={Boolean(userData.password_confirm.error)}
                      helperText={userData.password_confirm.error} 
                      value={userData.password_confirm.value || ""} 
                      onChange={(event)=>editUserData("PASSWORD_CONFIRM", event.target.value)}
                      onBlur={()=>validateInput("PASSWORD_CONFIRM")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                              <IconButton 
                                id="login-input-toggle-visibility-button"
                                disableRipple
                                onClick={()=>setShowPassword( !showPassword ? true : false )} 
                              >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />  

                  </div>
                 }


                { step === 1 &&

                  <div className="users-dialog-grid-container">

                    <TextField 
                      className="users-dialog-textfield" 
                      label="First Name (Optional)" 
                      variant="standard" 
                      error={Boolean(userData.first_name.error)}
                      helperText={userData.first_name.error} 
                      value={userData.first_name.value || ""} 
                      onChange={(event)=>editUserData("FIRST_NAME", event.target.value)}
                    />

                    <TextField 
                      className="users-dialog-textfield" 
                      label="Last Name (Optional)" 
                      variant="standard" 
                      error={Boolean(userData.last_name.error)}
                      helperText={userData.last_name.error} 
                      value={userData.last_name.value || ""} 
                      onChange={(event)=>editUserData("LAST_NAME", event.target.value)}
                    />

                    <TextField 
                      className="users-dialog-textfield" 
                      label="Phone (Optional)" 
                      variant="standard" 
                      error={Boolean(userData.phone.error)}
                      helperText={userData.phone.error} 
                      value={userData.phone.value || ""} 
                      onChange={(event)=>editUserData("PHONE", event.target.value)}
                    />

                    <TextField 
                      className="users-dialog-textfield-multiline" 
                      multiline
                      rows={4}
                      label="Comments (Optional)" 
                      variant="outlined" 
                      error={Boolean(userData.comments.error)}
                      helperText={userData.comments.error} 
                      value={userData.comments.value || ""} 
                      onChange={(event)=>editUserData("COMMENTS", event.target.value)}
                    />   

                  </div>

                }

                { step === 2 &&

                  <div className="users-dialog-grid-container">

                    <Typography className="users-dialog-textfield">{`Username: ${userData.username.value}`}</Typography>
                    <Typography className="users-dialog-textfield">{`Email: ${userData.email.value}`}</Typography>
                    <Typography className="users-dialog-textfield">{`Role: ${userData.role.value}`}</Typography>
                    <Typography className="users-dialog-textfield">{`Password: ${"•".repeat(userData.password_new.value.length)}`}</Typography>

                    { userData.first_name.value && <Typography className="users-dialog-textfield">{`First Name: ${userData.first_name.value}`}</Typography> }
                    { userData.last_name.value && <Typography className="users-dialog-textfield">{`Last Name: ${userData.last_name.value}`}</Typography> }               
                    { userData.phone.value && <Typography className="users-dialog-textfield">{`Phone: ${userData.phone.value}`}</Typography> }
                    { userData.comments.value && <Typography className="users-dialog-textfield">{`Comments: ${userData.comments.value}`}</Typography> }

                  </div>

                }

            </DialogContent>

          <DialogActions>

            <div id="users-dialog-buttons">

              { step != 2 && <Button className="dialog-button-cancel" onClick={handleCloseButton}>Cancel</Button> }

              { step === 1 && <Button className="dialog-button-confirm" onClick={()=>handleNextButton(0)}>Back</Button> }

              { step === 2 && <Button className="dialog-button-confirm" onClick={()=>handleNextButton(1)}>Back</Button> }

              { step === 0 && <Button className="dialog-button-confirm" onClick={()=>handleNextButton(1)}>Next</Button> }

              { step === 1 && <Button className="dialog-button-confirm" onClick={()=>handleNextButton(2)}>Next</Button> }

              { step === 2 && <Button className="dialog-button-confirm" onClick={handleRegisterButton}>Register</Button> }

            </div>

          </DialogActions>

        </Dialog>




    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersDialogRegister;