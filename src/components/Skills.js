import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Technologies } from "./Technologies";

const Skills = ({title , dark , id} ) => {
    const classes = useStyles();
    return (
        <div className= {`${classes.section} ${dark && classes.sectiondark }`}> 
           <div className={classes.sectioncontent} id ={id}>
                <Typography variant = "h3" >{title}</Typography>
                <Technologies/>

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

    

  }))

export default Skills 