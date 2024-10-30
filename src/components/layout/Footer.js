import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
      <>
          <Box
          sx={{ textAlign: "center", bgcolor:"red", color:"white", p: 3}}
          >
              <Box sx={{
                  my: 3, "& svg": {
                      fontSize: "60px",
                      cursor: "pointer",
                      mr: 2,
                  },
                  "& svg:hover": {
                      color: "goldenrod",
                      transform: 'translateX(5px)',
                      transition: 'all 400ms',
                  }
              }}>
                  {/*icons*/}
                  <InstagramIcon />
                  <TwitterIcon />
                  <FacebookIcon />
                  <WhatsAppIcon />
                  <YouTubeIcon/>
              </Box>
              <Typography variant="h5" sx={{
                  "@media (max-width:600px)": {
                  fontSize:"1rem"
              }}}>
                  All Rights Reserved &copy; Techinfo YT
              </Typography>
        </Box>
          
    </>
  )
}

export default Footer