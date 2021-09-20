import { makeStyles } from "@material-ui/core";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";




function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title= "About Me" id="about" dark = {true}/>
      <Skills title = "My Skills" id="skills" dark = {false }/>
      <Contact title = "Contact" id="contact" dark = {true}/>

    </div>
  );
}

const useStyles = makeStyles((theme) =>({
  root : {
  
  }
}))
export default App;
