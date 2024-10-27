import React, { useState } from 'react';
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { DanielPN } from 'milibreria';
import { MyButton } from 'milibreria';
import { MyFavourite } from 'milibreria';
import { MyFavouriteBorderIcon } from 'milibreria';
import Box from '@mui/material/Box';

function Testimonio({ id, imageUrl, title, subTitle, text, description }) {

    // Estado para controlar si el corazón está marcado o no. Se inicializa como false.
    const [liked, setLiked] = useState(false);
    
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleLike = () => {
        // Alterna el estado de la variable boolean "liked" entre true y false cuando se hace click en el botón
        setLiked(!liked);
    };



    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleSave = () => {

        setDialogOpen(false);
    };

    return (
        <>
            <Card sx={{ maxWidth: 600, mt: 8, mb: 8 }}>
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
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "justify" }}>
                            {text.substring(0, 100)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Box sx={{ display: 'flex', width: '100%' }}>
                        {liked ? (
                            <MyFavourite onClick={handleLike} color="red" />
                        ) : (
                            <MyFavouriteBorderIcon onClick={handleLike} color="black" />
                        )}
                        <MyButton
                            text={"See more"}
                            txtcolor="black"
                            backgroundColor="white"
                            bordercolor="black"
                            borderwidth="2px"
                            hoverbackgroundcolor="lightblue"
                            hovertxtColor="black"
                            size="large"
                            onClick={handleDialogOpen}
                            sx={{ marginLeft: 'auto' }}
                        />
                    </Box>
                </CardActions>
            </Card>

            <DanielPN
                open={dialogOpen}
                onClose={handleDialogClose}
                title={title}
                content={[text]}
                onSave={handleSave}
                width="600px"
                height="400px"
            />

        </>
    )
}

export default Testimonio