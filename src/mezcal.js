import React, { useState, useEffect } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './mezcal.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CustomStepper = ({ steps, activeStep }) => {
  return (
    <div className="stepper-container">
      <div className="custom-stepper">
        {steps.map((step, index) => (
          <div key={step} className={`step ${index === activeStep ? 'active' : ''}`}>
            <div className="step-number">{index + 1}</div>
            <div className="step-title">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Mezcal = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const handleOpen = (event) => {
    navigate('/mezcal1');
  };

  return (
    <ThemeProvider theme={createTheme({})}>
      <div style={{ background: 'black', padding: '20px', color: 'white' }}>
        <CustomStepper steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']} activeStep={activeStep} />

        <Typography variant="h3" align="center" style={{ fontWeight: 'bold', fontSize: '42px', marginBottom: '10rem', marginTop:'10rem' }}>
          Kiss a Mezcal
        </Typography>


        <br></br>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px', color: 'white', fontFamily: 'sans-serif' }}>
  <Typography 
    variant="h1" 
    component="span" 
    style={{ 
      fontWeight: 'bold', 
      fontSize: '94px', 
      lineHeight: '1', 
      marginRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textDecoration: 'underline'
    }}>
    1
  </Typography>
  
  <div>

    <Typography 
      variant="h5" 
      style={{ 
        fontWeight: 'bold', 
        fontSize: '32px',
        marginBottom: '0.5rem' // Adjust the space between the heading and the description
      }}>
      A proper glass
    </Typography>
    <Typography 
      variant="body1" 
      style={{ 
        fontSize: '20px'
      }}>
      a short glass that lets you smell the liquor, like a copita, a lowball, or flute.
    </Typography>
  </div>
</div>

<div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px', color: 'white', fontFamily: 'sans-serif' }}>
  <Typography 
    variant="h1" 
    component="span" 
    style={{ 
      fontWeight: 'bold', 
      fontSize: '94px', 
      lineHeight: '1', 
      marginRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textDecoration: 'underline'
    }}>
    2
  </Typography>
  
  <div>
    <Typography 
      variant="h5" 
      style={{ 
        fontWeight: 'bold', 
        fontSize: '32px',
        marginBottom: '0.5rem' // Adjust the space between the heading and the description
      }}>
      Taste
    </Typography>
    <Typography 
      variant="body1" 
      style={{ 
        fontSize: '20px'
      }}>
     stick your tongue into the copita filled with mezcal  and then rub it along the roof of your mouth.
    </Typography>
  </div>
</div>
       

<div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px', color: 'white', fontFamily: 'sans-serif' }}>
  <Typography 
    variant="h1" 
    component="span" 
    style={{ 
      fontWeight: 'bold', 
      fontSize: '94px', 
      lineHeight: '1', 
      marginRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textDecoration: 'underline'
    }}>
    3
  </Typography>
  
  <div>
    <Typography 
      variant="h5" 
      style={{ 
        fontWeight: 'bold', 
        fontSize: '32px',
        marginBottom: '0.5rem' // Adjust the space between the heading and the description
      }}>
      Sip
    </Typography>
    <Typography 
      variant="body1" 
      style={{ 
        fontSize: '20px'
      }}>
    swishing it around in your mouth , and then swallowing for a beautiful and delicious mezcal experience.
    </Typography>
  </div>
</div>

        <br></br>
        <br></br>
        <br></br>
        <Button onClick={handleOpen} variant="contained" color="primary" style={{fontFamily: 'sans-serif', background: '#E8B03C', color: 'black', fontSize: '24px', borderRadius: '30px', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', }}>
          Next
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Mezcal;