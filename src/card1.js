import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const GreenCard = styled(Card)(({ theme }) => ({
    background: '#0DF38B',
    color: 'black',
    maxWidth: 345,
    borderRadius: '20px',
  }));

const GreenCardComponent = ({ title, image }) => {
  return (
    <div>
    <GreenCard>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily= 'Agbalumo' fontWeight= 'bold'>
          {title}
        </Typography>
        <img src={image} alt={title} />
      </CardContent>
     
    </GreenCard>
    <br></br>
    <div style={{ color: 'white', textAlign: 'center' ,fontSize: '20px' ,  fontFamily: 'Agbalumo' ,fontWeight: 'bold'}}> View & Ambiance</div>
    </div>
  );
};

export default GreenCardComponent;
