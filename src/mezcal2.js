import React, { useState, useEffect } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import mezcal from './mezcal.png'
import { useNavigate } from 'react-router-dom';
import mezcal1 from './assets/black.png'

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
  const [activeStep, setActiveStep] = useState(2);
  const navigate = useNavigate();
  const handleOpen = (event) => {
    navigate('/mezcal4');
  };

  return (
    <ThemeProvider theme={createTheme({})}>
    <div style={{ background: '#E8B03C', padding: '20px', color: 'white' , textAlign: 'center' }}>
    <CustomStepper steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']} activeStep={activeStep} />


        <br></br>
        <br></br>
        <img align='center' src={mezcal} />
        <br></br>
        <Typography color='black' variant="h3" align="center" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px' }}>
          Yes! it's true
        </Typography>
        <Typography color='black' variant="h3" align="center" style={{
          marginTop: '16px',
          fontFamily: 'Agbalumo',
          fontWeight: 'bold',
          fontSize: '18px',
          whiteSpace: 'pre-line'
        }}>
          {`
    Yes, mezcal is from Mexico only. Mezcal is
    a distilled alcoholic made from any type
    of agave, which is a plant native to Mexico.
    Mezcal has a denomination of origin, which
    means that it can only be legally produced in 
    certain regions of Mexico that have the right 
    climate, soil and tradition for making this spirit.
  `}
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        

         

          <Button
          onClick={handleOpen} 
            variant="contained"
            color="primary"
            style={{
              marginTop: '60px',
              background: 'black',
              color: '#E8B03C',
              fontSize: '24px', fontFamily: 'Agbalumo',
              fontWeight: 'bold',
              padding: '10px 32px',
              borderRadius: '30px',
              marginLeft: '10px', // Add margin to create space between buttons
            }}
          >
            NEXT
          </Button>

        </div>
      

      </div>
      <img src={mezcal1}   style={{ 
        width: '130px',  
        height: 'auto',  
        top: '50px',     
        left: '50px'    
    }} />
    </ThemeProvider>
  );
};

export default Mezcal2;