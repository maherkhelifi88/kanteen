import React, { useState, useEffect } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import mezcal from './assets/black.png'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import './mezcal.css';
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


const Mezcal2 = () => {
  const [activeStep, setActiveStep] = useState(3);
  const navigate = useNavigate();
  const handleOpen = (event) => {
    navigate('/mezcal3');
  };

  return (
    <ThemeProvider theme={createTheme({})}>
    <div style={{ background: 'black',  color: 'white' }}>
    <CustomStepper steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']} activeStep={activeStep} />

        <Typography color='white' variant="h3" align="center" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          Now back to your 
        </Typography>
        <Typography color='white' variant="h3" align="center" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          weekend plans 
        </Typography>
        <Typography color='#E8B03C' variant="h3" align="center" style={{
          marginTop: '24px',
          fontFamily: 'Agbalumo',
          fontWeight: 'bold',
          fontSize: '21px',
          whiteSpace: 'pre-line'
        }}>
          {`
    Would you like to try 
    Mezcal cocktails in 
    Seattle ?
  `}
        </Typography>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button
           
            variant="contained"
            color="primary"
            style={{
              background: '#E8B03C',
              color: 'black',
              fontSize: '24px',
              padding: '10px 32px',
              fontFamily: 'Agbalumo',
              borderRadius: '30px',
              marginRight: '10px',
              fontWeight: 'bold', // Add margin to create space between buttons
            }}
          >
            No
          </Button>

          <span style={{ color: 'black', fontSize: '24px' }}>OR</span>

          <Button
           onClick={handleOpen} 
            variant="contained"
            color="primary"
            style={{
              background: '#E8B03C',
              color: 'black',
              fontSize: '24px', fontFamily: 'Agbalumo',
              fontWeight: 'bold',
              padding: '10px 32px',
              borderRadius: '30px',
              marginLeft: '10px', // Add margin to create space between buttons
            }}
          >
            Yes!!
          </Button>

        </div>
        <img src={mezcal}   style={{ 
        width: '370px',  
        height: '340px',  
        top: '50px',     
        left: '50px'    
    }} />

      </div>
    </ThemeProvider>
  );
};

export default Mezcal2;