import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const SingUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h5' align='left'>
        SingUp
      </Typography>
      <form className={classes.form}>
        <NetflixInput placeholder='Email' className={classes.email}/>
        <NetflixInput placeholder='Password' className={classes.password}/>
        <NetflixButton wide="medium" radius>Sign In</NetflixButton>
        <Typography variant='subtitle2'>
          New to Netflix ?{" "}
          <span className={classes.singupLink}>
            Sing Up now.{" "}
          </span>
        </Typography>
      </form>
    </div>
  );
  
};

export default SingUp;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:"350px",
    width:"20rem",
    height:"25rem",
    background:"rgba(0,0,0,0.65)",   
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center", 
  },
  form:{
    width:"80%",
  },
  email:{
    marginBottom:theme.spacing(2),
  },
  password:{
    marginBottom:theme.spacing(4),
  },
  singupLink:{
    color:"#fff", 
    cursor:"pointer",
    "&:hover":{
      textDecoration:"underline",
    }
  }

}));
