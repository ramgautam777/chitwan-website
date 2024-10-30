import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen( !mobileOpen)
  }

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={"red"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
              <LocalHospitalIcon/>
              Hearing & Speech Care Center
      </Typography>
      <Divider/>
            
            
              <ul className="mobile-navigation">
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/services'}> Services </Link>
                </li>
                <li>
                  <Link to={'/about'}> About </Link>
                </li>
                <li>
                  <Link to={'/gallery'}> Gallery </Link>
                </li>
                <li>
                  <Link to={'/teams'}> Teams </Link>
                </li>
                <li>
                  <Link to={'/contact'}> Contact</Link>
                </li>
              </ul>
            
      

    </Box>
  )
  return (
      <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "red" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge=" start "
              sx={{
                  mr: 2,
              display: { sm: "none"},
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon/>
              
          </IconButton>
            <Typography color={"white"} variant="h6" component="div" sx={{flexGrow:1}}>
              <LocalHospitalIcon/>
              Hearing & Speech Care Center
            </Typography>
            
            <Box sx={{display: {xs:"none", sm:"block"}}}>
              <ul className="navigation-menu">
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/services'}> Services </Link>
                </li>
                <li>
                  <Link to={'/about'}> About </Link>
                </li>
                <li>
                  <Link to={'/gallery'}> Gallery </Link>
                </li>
                <li>
                  <Link to={'/teams'}> Teams </Link>
                </li>
                <li>
                  <Link to={'/contact'}> Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
          
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              "& .MuiDrawer-Paper": {
                boxSizing: "border-box" ,
                width:"200px" ,
              },
            
            }}
          >
            {drawer}
          </Drawer>

        </Box>
        <Box >
          <Toolbar />
          </Box>
      </Box> 
    </>
  )
}

export default Header