import React, { useState } from 'react';
// MUI
import { Box, Button, TextField, Typography } from '@mui/material';
// Data
import { sampleUserData } from '../assets/data/usersData';

const SignIn = ({ signIn, signOut, user, setUser }) => {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  });

  const onSubmit = () => {
   signIn(sampleUserData);
  }

  if(user){
    return(
      <Box>
        <Box>
          <Typography>Hi {' '} {user.firstName}</Typography>
        </Box>
        <Box>
          <Button variant='contained' onClick={() => signOut(undefined)}>Sign Out</Button>
        </Box>
      </Box>
    )
  }

  return (
    <Box px={3}>
      <Box mt={6}>
        <Typography>Sign In</Typography>
      </Box>
      <Box mt={3} >
        <TextField 
          id="email"
          type='email'
          label='Email'
          variant='outlined'
          value={signInForm.email}
          onChange={(e) => {setSignInForm({...setSignInForm, email: e.target.value})}} 
        >
        </TextField>
        <TextField style={{ marginTop: '30px'}}
          id="password"
          type='password'
          label='Password'
          variant='outlined'
          value={signInForm.password}
          onChange={(e) => {setSignInForm({...setSignInForm, password: e.target.value})}} 
        >
        </TextField>

        <Box mt={3}>
          <Button
            variant='contained'
            onClick={onSubmit}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SignIn