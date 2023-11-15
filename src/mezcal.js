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
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const handleOpen = (event) => {
    navigate('/mezcal1');
  };

  return (
    <ThemeProvider theme={createTheme({})}>
      <div style={{ background: 'black', padding: '20px', color: 'white' }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <CustomStepper steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']} activeStep={activeStep} />
      
        <Typography variant="h3" align="center" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          Kiss a Mezcal
        </Typography>

        <br></br>
        <br></br>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          1- A proper glass
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontSize: '24px' }}>
          a short glass that lets you smell the liquor
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontSize: '24px' }}>
          a copita, a lowball, or flute
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          2- Taste
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontSize: '24px' }}>
          stick your tongue into the copita filled with mezcal
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontSize: '24px' }}>
          and then rub it along the roof of your mouth
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          3- Sip
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontSize: '24px' }}>
          swishing it around in your mouth , and then swallowing for
        </Typography>
        <Typography variant="h3" align="left" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontSize: '24px' }}>
          a beautiful and delicious mezcal experience
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button onClick={handleOpen} variant="contained" color="primary" style={{ background: '#E8B03C', color: 'black', marginTop: '20px', fontSize: '24px', padding: '10px 32px', borderRadius: '30px', position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', }}>
          Next
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Mezcal;