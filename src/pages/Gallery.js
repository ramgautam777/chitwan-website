import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, } from '@mui/material'
import React from 'react'
import Layout from '../components/layout/Layout'
import { MenuList } from '../data/data'
function Gallery() {
  return (
    <Layout>
      <Box sx={{ bgcolor:'black',justifyContent:'center'}}>
        {
          MenuList.map(menu => (
            <Card sx={{ maxWidth: '390px,', m:2}}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: '400px' }}
                  component={'img'}
                  src={menu.image}
                  alt={menu.name} /> 
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2' > { menu.description}</Typography>
                </CardContent>
                
              </CardActionArea>
            </Card>
          ))
      }
      </Box>
    </Layout>
  )
}

export default Gallery
