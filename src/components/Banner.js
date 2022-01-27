import { makeStyles } from '@material-ui/core';
import HeroBanner from "../images/netflix.jpg"

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      Banner
   </div>
  )
};


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${HeroBanner})`,
    position:"relative",
    height:"440px",
    objectFit:"contain",
    backgroundSize:"cover",
    backgroundPosition:"center",
  },
}));


export default Banner;
