import React from 'react';
import PieChart from './PieChart';
import { Container, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  button: {
    float: 'right',
  },
  chartContainer: {
    marginTop: theme.spacing(16),
  },
}));

const Home = () => {
  const [name, setName] = React.useState('');
  const classes = useStyles();

  const handleLogOut = () => {
    sessionStorage.clear();
    window.location = '/login';
  };
  React.useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('token'));
    setName(user.user);
  }, []);

  return (
    <Container className={classes.container}>
      <Button
        onClick={handleLogOut}
        variant='contained'
        color='primary'
        className={classes.button}
      >
        Logout
      </Button>
      <Typography variant='h5' align='center'>
        Welcome {name}!
      </Typography>
      <section className={classes.chartContainer}>
        <PieChart />
      </section>
    </Container>
  );
};

export default Home;
