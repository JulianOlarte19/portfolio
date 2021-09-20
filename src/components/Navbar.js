
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles , Toolbar ,  } from "@material-ui/core";
import logo from "../images/folder.png"
import {Link, animateScroll as scroll} from "react-scroll"
import  InfoTwoToneIcon  from "@material-ui/icons/InfoTwoTone";
import  EmojiObjectsTwoToneIcon  from "@material-ui/icons/EmojiObjectsTwoTone";
import  ContactMailTwoToneIcon  from "@material-ui/icons/ContactMailTwoTone";
import CancelIcon from "@material-ui/icons/Cancel"
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from "react";




 



const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const links = [
        {
            id:"about",
            text: "About Me" , 
            icon: <InfoTwoToneIcon fontSize="large" className={classes.aboutmeIcon}/>
        } ,
        {
            id:"skills",
            text: "Skills " , 
            icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.skillsIcon}/>
        },
    
        {
            id:"contact",
            text: "Contact " , 
            icon: <ContactMailTwoToneIcon fontSize="large" className={classes.contactIcon}/>
        }
    ]
    return (
     <>
        <AppBar position="sticky" className= {classes.root} >
            <Toolbar className={classes.toolbar}>
                <img src={logo} className= {classes.logo} alt ="Logo"/>
                <List className={classes.menu}>
                    {
                       links.map(({id, text} , index)=> (
                            <Link key= {index} to = {id}
                             spy = {true } 
                             activeClass="active" 
                             smooth = {true} 
                             duration = {500} 
                             offset = { -70}> 
                             {text } </Link>
                        ))
                    }
                </List>
                <IconButton edge ="end"  
                    className={classes.menubutton}
                    onClick={()=>setOpen(!open)}
                    >
                    <MenuIcon fontSize="large"/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                    <IconButton  onClick={()=>setOpen(false)} className= {classes.cancelIcon} >
                        <CancelIcon fontSize= "large"/>
                    </IconButton>

                    <Divider/>

                    {
                       links.map(({id, text,icon} , index)=> (
                            <Link key= {index} to = {id}
                             className={classes.sidebar}
                             spy = {true } 
                             activeClass="active" 
                             smooth = {true} 
                             duration = {500} 
                             offset = { -70}> 
                             <ListItem component ="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                             </ListItem>
                            </Link>
                        ))
                    }
        </Drawer>
     </>

    )

}


const useStyles = makeStyles((theme) =>({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        left:0,
        right:0 ,
        zIndex: 999
    },

    toolbar:{
        display:"flex",
        justifyContent: "flex-start",
        alignItems:"center"
    },
    logo : {
        height: "3.3rem" ,
        objectFit : "contain" ,
        
        "&:hover" : {
            cursor:"pointer"
        }
        
    },

    menu:{
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
        "& a": {
            color:"#333" ,
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3),
        },
         "& a:hover": {
            cursor: "pointer",
            color: "#1e91ed",
            borderBottom: "3px solid #1e91ed"
         },


    },

    menubutton:{
        display:"none",
        [theme.breakpoints.down("sm")]: {
            display:"block",
            color: "#ab49cc",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },

    sidebar:{
        width:"40vw",
        [theme.breakpoints.down("sm")]:{
            width: "60vw",
        },
        "& h5": {
            margin: theme.spacing(10 , 0 , 0 ,4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold" ,
        },
        "& h5:hover":{
            color:"#1e91ed",
            cursor:"pointer"
        },


    },

    cancelIcon: {
        color:"tomato",
        cursor : "pointer",
        position: "absolute",
        top: 0 ,
        right:10 ,



    },

    aboutmeIcon: {
        color:"#77dd77"
    },

    skillsIcon: {
        color:"#fdfd96"
    },

    contactIcon: {
        color:"#84b6f4"
    },
    
  }))

export default Navbar 