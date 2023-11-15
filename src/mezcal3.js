import React, { useState, useEffect } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import mezcal from './bo.png'
import mezcall from './1.jpg'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Pablo from './Pablo.mp4'

import './Mezcal3.css';

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
const Mezcal3 = () => {
  const [activeStep, setActiveStep] = useState(4);

  const navigate = useNavigate();
  const handleOpen = (event) => {
    navigate('https://www.pabloypablo.com/wallingford/');
  };
  return (
    <ThemeProvider theme={createTheme({})}>
      <div className="video-background"  style={{ padding: '20px', color: 'white' }}>
        <video autoPlay muted loop>
          <source src={Pablo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br></br>
        <CustomStepper steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']} activeStep={activeStep} />


        <Typography color='white' variant="h3" align="center" style={{ marginTop: '20px', fontFamily: 'Agbalumo', fontWeight: 'bold', fontSize: '32px', whiteSpace: 'pre-line' }}>
          {`  Come try our Mezcal
         Drinks!`}
        </Typography>



        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      


        <div className="card-container">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={mezcal}
            
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', background:'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              
              <Typography variant="subtitle1" color="text.secondary" component="div">
                PABLO Y PABLO 
              </Typography>
              <Typography component="div" variant="h5">
                MEZCAL MARGARITA
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                mezcal margarita 14 
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                make it a double! pint 24

              </Typography>
            </CardContent>
            <CardContent sx={{ flex: '1 0 auto' }}>
              
              <Typography variant="subtitle1" color="text.secondary" component="div">
                mezcal, cointreau, lime juice, oaxacan 
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
               salt rim*
              </Typography>
            
            </CardContent>
          </Box>
        </Card>
</div>


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a href='https://www.pabloypablo.com/wallingford/'>
          <Button

            variant="contained"
            color="primary"
            style={{
              marginTop: '60px',
              background: '#E8B03C',
              color: 'black',
              fontSize: '24px', fontFamily: 'Agbalumo',
              fontWeight: 'bold',
              padding: '10px 32px',
              borderRadius: '30px',
              marginLeft: '10px', // Add margin to create space between buttons
            }}
          >
            
            Book
           
          </Button>
          </a>
        </div>


      </div>
    </ThemeProvider>
  );
};

export default Mezcal3;