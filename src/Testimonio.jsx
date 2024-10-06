import React, { useState } from 'react';
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Testimonio({ id, imageUrl, title, subTitle, text, description }) {

// Estado para controlar si el corazón está marcado o no. Se inicializa como false.
    const [liked, setLiked] = useState(false); 

    const handleLike = () => {
// Alterna el estado de la variable boolean "liked" entre true y false cuando se hace click en el botón
        setLiked(!liked); 
    };

    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={imageUrl}
                        alt={description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            {subTitle}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton onClick={handleLike}>
                        {liked === true ? <FavoriteIcon sx={{color: 'red'}} /> : <FavoriteBorderIcon sx={{color: 'black'}} />}
                   </IconButton>
                </CardActions>
            </Card>
            <br></br><br></br><br></br>

        </>
    )
}

export default Testimonio