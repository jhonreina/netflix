import {  makeStyles } from '@material-ui/core';
import logo from "../images/Netflix-Logo.png";
import HeroBanner from "../images/HeroBanner2.jpg"
import { NetflixButton } from '../styled/styledcomponents';

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt='logo'/>
      <NetflixButton className={classes.sesion}>Iniciar sesion</NetflixButton>
    </div>
  )
};

export default Login;

const useStyles = makeStyles((theme) => ({
  root: {
    position:"relative",
    height:"100vh",
    backgroundImage:`url(${HeroBanner})`,
    objectFit:"contain",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    
  },
  sesion:{
    position:"fixed",
    zIndex:15,
    right:20,
    top:20,
  },
  logo:{
     position:"fixed",
     top:0,
     left:20,
     width:"150px",
     cursor:"pointer",
  },
}));
