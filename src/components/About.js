import { Card, CardContent, CardMedia, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import fotoPerfil from "../images/fotoPerfil.jpeg"

const About = ({title , dark , id}) => {
    const classes = useStyles();

    return (
        <div className= {`${classes.section} ${dark && classes.sectiondark }`}>
            <div className={classes.sectioncontent} id ={id}>
                <Typography variant = "h3" >{title}</Typography>
                <Card className = {classes.card}>
                    <CardMedia image ={fotoPerfil}className={classes.cardMedia} title="picture"/>
                    <CardContent className = {classes.cardContent} >
                        Contenido de la tarjeta
                    </CardContent>
                </Card>

           </div>
        </div>

    )

}

 

const useStyles = makeStyles((theme) =>({
    section : {
        minHeight : "100vh" ,
    },
    sectiondark : {
        background: "#222222",
        color: "#fff"
    },

    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        
    },


    card:{
        height:"70vh",
        display:"flex",
        marginTop: theme.spacing(6),
        position: "relative",
       


    },

    cardMedia:{
        width:"250px",
        height: "auto",
        objectFit:"cover",
        borderRadius: "5px",
        margin: theme.spacing(3),

    },
  }))
  

export default About 