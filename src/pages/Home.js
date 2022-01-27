import { makeStyles } from '@material-ui/core';
import Banner from "../components/Banner"
import Header from '../components/Header';

const Home = () => {
  const classes = useStyles();
  return (
  <div>
    <Header/>
    <Banner/>
  </div>
  )
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {},
}));

