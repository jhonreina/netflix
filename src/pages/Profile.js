import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Plans from '../components/Plans';
import { auth } from '../firebase';
import netflixavatar from "../images/netfilxavatar.jpg";
import { NetflixButton } from '../styled/styledcomponents';

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  const signout = () => {
    auth.signOut();
    history.push("/login")
  }

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3">Edit Profile</Typography>
      <div className={classes.info}>
        <img src={netflixavatar} alt="avatar" />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">email usario</Typography>
            <Typography variant="h5" gutterBottom className={classes.plansText}>
              Plans
            </Typography>
            <Plans cont={7.99}>Netflix Standard</Plans>
            <Plans cont={11.99}>Netflix Basic</Plans>
            <Plans wide="medium" color='gray' cont={15.99}>Netflix Premium</Plans>
            <NetflixButton onClick={signout} wide="fullWidth">Sign Out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Profile;

const useStyles = makeStyles((theme) => ({
  root: {
    color:"#fff",
    minHeight:"100vh",
    maxWidth:"800px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  info:{
    width:"80%",
    display:"flex",
    "& img":{
      height:"100px",
      [theme.breakpoints.down("xs")]:{
        display:"none",
      }
    }
  },
  details:{
    width:"100%",
    marginLeft: theme.spacing(3),
    "& h6":{
      backgroundColor:"#aaa",
      padding: theme.spacing(1),
      marginBottom:theme.spacing(1),
      fontSize:"18px",
    }
  },
  plans:{
    width:"100%",
  },
  plansText:{
    borderBottom:"1px solid lightgray",
  }
}));
