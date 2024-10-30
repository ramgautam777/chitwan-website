import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { alignProperty } from '@mui/material/styles/cssUtils';
function contact() {
  return (
    <Layout>
      <Box sx={{
        my: 5,
        ml: 10,
        "& h4": {
          fontWeight: 'bold',
          mb: 2,
        }
      }}>
        <Typography variant='h4'>
          Contact My clinic
        </Typography>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quis sequi officiis ratione repellat rerum ut vel eveniet dolores quam obcaecati nulla sit at hic, molestias possimus dicta quos natus.</p>
      </Box>
      <Box sx={{
        m: 3, width: "600px", ml: 10, "@media (max-width:600px)": {
          width:'300px',
        }
      }}>
        <TableContainer component={Paper}>
          <Table aria-label='Cotact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white', }} align='center'>
                Contact Details 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} />056-594671 (torollfree)
                </TableCell>
                
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt: 1 }} /> www.aawazhearing.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} />9845192771
                </TableCell>
                
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default contact
