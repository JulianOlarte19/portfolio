
import javaIcon from "../images/java.png"
import sqlIcon from "../images/sql.png"
import javascriptIcon from "../images/javascript.png"
import gitIcon from "../images/git.png"
import pythonIcon from "../images/python.png"
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import StartRating from './StartRating'



export const Technologies = () => {
    const classes = useStyles() 
    const skills =[
        {
            year: "2017",
            src: javaIcon ,
            title: "Java" ,
            stars: 3  ,  
        },

        {
            year: "2018",
            src: sqlIcon ,
            title: "SQL" ,
            stars: 3 ,
        },
        
        {
            year: "2019",
            src: pythonIcon ,
            title: "Python" ,
            stars: 2 ,

        },

        {
            year: "2020",
            src: javascriptIcon ,
            title: "JavaScript" ,
            stars: 3 ,
        },

        {
            year: "2020",
            src: gitIcon ,
            title: "Git" ,
            stars: 3 ,
        },

        


        


    ]


    return (
        <Timeline align= "left" >
            {
                skills.map(({year , src , title , stars},index)=> (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography variant = "h6" color="textSecondary">
                            {year}
                        </Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <img src = {src} alt = {title} className= {classes.customlogo}/>     
                        <TimelineConnector/>
                    </TimelineSeparator>

                    <TimelineContent>
                        <Paper elevation={5} className={classes.paper}>
                            <Typography variant = "h6" component = "h1">
                                {title}
                            </Typography>
                            <StartRating stars = {stars} />           
                        </Paper>
                    </TimelineContent>

                </TimelineItem>
                    
                ))
            }
        </Timeline>
    )
}


const useStyles = makeStyles((theme) =>({
    customlogo : {
        width: "40px"
    
    }
  }))

export default Technologies

