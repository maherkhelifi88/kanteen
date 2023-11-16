import React, { useState, useEffect } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import mezcal from './mezca.jpg'
import mezcal1 from './assets/black.png'
import { useNavigate } from 'react-router-dom';
const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

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
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();
  const handleOpen = (event) => {
    navigate('/mezcal2');
  };

  return (
    <ThemeProvider theme={createTheme({})}>
      <div style={{ background: '#E8B03C', padding: '20px', color: 'white' }}>
      <CustomStepper steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']} activeStep={activeStep} />


        <br></br>
        <br></br>
        <img src={mezcal}   style={{ 
        width: '350px',  
        height: 'auto',  
        top: '50px',     
        left: '50px'    
    }} />
        <br></br>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onClick={handleOpen} 
            variant="contained"
            color="primary"
            style={{
              background: 'black',
              color: '#E8B03C',
              fontSize: '24px',
              padding: '10px 32px',
              fontFamily: 'Agbalumo',
              borderRadius: '30px',
              marginRight: '10px',
              fontWeight: 'bold', // Add margin to create space between buttons
            }}
          >
            True
          </Button>

          <span style={{ color: 'black', fontSize: '24px' }}>OR</span>

          <Button
            variant="contained"
            color="primary"
            style={{
              background: 'black',
              color: '#E8B03C',
              fontSize: '24px', fontFamily: 'Agbalumo',
              fontWeight: 'bold',
              padding: '10px 32px',
              borderRadius: '30px',
              marginLeft: '10px', // Add margin to create space between buttons
            }}
          >
            False
          </Button>

        </div>
        <Typography color='black' variant="h3" align="center" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          MESCAL is only made in
        </Typography>
        <Typography color='black' variant="h3" align="center" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          Mexico?
        </Typography>

      </div>
      <img src={mezcal1}   style={{ 
        width: '150px',  
        height: 'auto',  
        top: '50px',     
        left: '50px'    
    }} />
    </ThemeProvider>
  );
};

export default Mezcal;