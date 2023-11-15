import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; 
const GreenCard = styled(Card)(({ theme }) => ({
    background: '#E8B03C',
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
        <Link to='/mezcal'> {/* Use React Router's Link component */}
            <img src={image} alt={title} />
          </Link>
      </CardContent>
     
    </GreenCard>
    <br></br>
    <div style={{ color: 'white', textAlign: 'center',fontSize: '20px' ,  fontFamily: 'Agbalumo' ,fontWeight: 'bold'}}> A smokey weekend</div>
    </div>
  );
};

export default GreenCardComponent;
