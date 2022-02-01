import { makeStyles, Typography } from "@material-ui/core";
import logo from "../images/Netflix-Logo.png";
import HeroBanner from "../images/HeroBanner2.jpg";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";
import { useState } from "react";
import SingUp from "./SingUp";

const Login = () => {
  const classes = useStyles();
  const [signIn, setSingIn] = useState(false);
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
      <NetflixButton radius className={classes.sesion}>Iniciar sesion</NetflixButton>
      <div className={classes.info}>
        {!signIn ? (
          <SingUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Unlimited films,TV programmes and more.
            </Typography>
            <Typography variant="h5">
              Watch anywhere. Cancel at any time.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ready to watch ? Enter your email create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <NetflixInput placeholder="Email address" />
              <NetflixButton>GET STARTED</NetflixButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sesion: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
}));
