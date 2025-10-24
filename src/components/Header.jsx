import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
    const projectInfo = "Resume Builder web application developed using React.js. It allows users to create, preview, and download professional resumes instantly. I implemented features like AI-powered text suggestions, PDF export, and user authentication using Clerk. The goal was to provide a fast, user-friendly way to generate modern, well-formatted resumes without needing design skills."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"purple"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://cdn-icons-png.flaticon.com/512/8347/8347432.png" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none fw-bold'>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">Home</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header