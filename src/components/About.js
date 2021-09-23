import { Card, CardContent, CardMedia, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import fotoPerfil from "../images/fotoPerfil.jpeg"
import TypeWriterEffect from "react-typewriter-effect"

const About = ({title , dark , id}) => {
    const classes = useStyles();

    return (
        <div className= {`${classes.section} ${dark && classes.sectiondark }`}>
            <div className={classes.sectioncontent} id ={id}>
                <Typography variant = "h3" >{title}</Typography>
                <Card className = {classes.card}>
                    <CardMedia image ={fotoPerfil}className={classes.cardMedia} title="picture"/>
                    <CardContent className = {classes.cardContent} >

                        <div className={classes.nombre}>

                            Hola , Mi nombre es Julian Olarte Vanegas
                        </div>
                        <TypeWriterEffect
                        
                        text = "Soy estudiante de ultimo semestre de la Univerdad Jorge Tadeo Lozano" 
                        textStyle= {{fontSize:"2rem" , fontWeight:"500px", color:"black" , fontFamily: 'Red Hat Display' , marginTop: "1.5rem"}}
                        startDelay= {100}
                        cursorColor="black"
                        typeSpeed={50}
                        hideCursorAfterText = {true}
                        
                        
                        />

                        <TypeWriterEffect
                        textStyle= {{fontSize:"2rem" , fontWeight:"500px", color:"black" ,fontFamily: 'Red Hat Display'}}
                        startDelay= {5800}
                        cursorColor="black"
                        text = "Y actualmente me encuentro trabajando en el Hospital Santa Barbara de Vergara" 
                        typeSpeed={50} 
                        hideCursorAfterText = {true}  
                        />



                        <TypeWriterEffect
                        textStyle= {{fontSize:"1.3rem" , fontWeight:"300px", color:"#3F3D56" ,fontFamily: 'Red Hat Display' , marginTop: "1rem"}}
                        startDelay= {8800}
                        cursorColor="#3F3D56"
                        text = "Fortalezas : Curiosidad y disposibilidad para aprender , disponibilidad para trabajar en equipo , Honestidad , Empatia" 
                        typeSpeed={50} 
                        hideCursorAfterText = {true}  
                        />


                        <div>
                            
                        </div>

                        <TypeWriterEffect
                        textStyle= {{fontSize:"1.3rem" , fontWeight:"300px", color:"#3F3D56" ,fontFamily: 'Red Hat Display' ,  marginTop: "1rem"}}
                        startDelay= {16800}
                        cursorColor="#3F3D56"
                        text = "Debilidades : Poca experiencia , Exceso de autocritica , Demasiado directo al comentar las cosas" 
                        typeSpeed={50} 
                        hideCursorAfterText = {true}  
                        />



                        
                        

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
        position:"relative" ,
        borderRadius: "5px",
        margin: theme.spacing(3),

    },

    nombre:{
        fontFamily: 'Red Hat Display',
        fontSize:"3rem" ,
        fontWeight:"bold",
        color:"#1e91ed" ,
        
    },

   

  }))
  

export default About 