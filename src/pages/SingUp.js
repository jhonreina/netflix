import { makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import { auth } from '../firebase';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const SingUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {}
    const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then((authUser)=>console.log(authUser))
      .catch((err)=>alert(err.message ))
    };


  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        SingUp
      </Typography>
      <form className={classes.form}>
        <NetflixInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className={classes.email}
        />
        <NetflixInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className={classes.password}
        />
        <NetflixButton onClick={signIn} type='submit' wide="medium" radius>
          Sign In
        </NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ?{" "}
          <span  onClick={register} className={classes.singupLink}>Sing Up now. </span>
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
