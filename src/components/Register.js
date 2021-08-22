import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMessage: {
    color: 'red',
  },
}));

const Register = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState([]);
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const registerData = {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      password: values.password,
    };

    axios
      .post('http://localhost:5000/api/v1/user/register', registerData)
      .then((res) => {
        sessionStorage.setItem('token', JSON.stringify(res.data));
        window.location = '/';
      })
      .catch((err) => setErrorMessage(err.response.data));
  };

  React.useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }, [errorMessage]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} onClick={handleSubmit}>
          <TextField
            name='name'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='Name'
            autoFocus
            value={values.name}
            onChange={handleChange}
          />

          <TextField
            variant='outlined'
            required
            margin='normal'
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            value={values.email}
            onChange={handleChange}
          />

          <TextField
            variant='outlined'
            required
            fullWidth
            id='mobile'
            label='Mobile Number'
            margin='normal'
            name='mobile'
            value={values.mobile}
            onChange={handleChange}
          />

          <TextField
            variant='outlined'
            required
            fullWidth
            name='password'
            margin='normal'
            label='Password'
            type='password'
            id='password'
            value={values.password}
            onChange={handleChange}
          />

          <div className={classes.errorMessage}>{errorMessage}</div>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Link href='/login' variant='body2'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Register;
