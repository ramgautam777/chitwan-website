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
          <h1> WELCOME TO THE HEARING AND SPEECH CARING CENTER </h1>
          <p> Our expert team specializes in providing a wide range of Speech and Hearing services tailored to your unique needs. We are committed to helping you achieve optimal health and well-being in a compassionate and supportive environment.
            Thank You for choosing us for your Speech & Hearing Services!
          </p>
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