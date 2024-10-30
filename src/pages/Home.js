import { Button, colors } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import '../styles/HomeStyles.css';
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundColor:"skyblue"}} >
        <div className="headerContainer">
          <h1> Hearing & Speech Caring Center </h1>
          <p> Best Hearing & Speech Hospital In Nepal</p>
          <Link to="/menu">
          <Button>
            Book An Appointment 
            </Button>
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home