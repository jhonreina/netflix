import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  const classes = useStyles();
  return (
  <div>
    <Header/>
  </div>
  )
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {},
}));

