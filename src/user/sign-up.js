import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

var client = require("../client");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [emailValue, setEmailValue] = React.useState("");
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [pincodeValue, setPincodeValue] = React.useState("");
  const [addressdValue, setAddressValue] = React.useState("");

  // useEffect(() => {
  //  
  // });

  function changeEmailHandler(event){
    setEmailValue(event.target.value);
  };

  function changeFirstNameHandler(event){
    setFirstNameValue(event.target.value);
  };

  function changeLastNameHandler(event){
    setLastNameValue(event.target.value);
  };

  function changePasswordHandler(event){
    setPasswordValue(event.target.value);
  };

  function changeMobileHandler(event){
    setPhoneValue(event.target.value);
  };

  function changePinCodeHandler(event){
    setPincodeValue(event.target.value);
  };

  function changeAddressHandler(event){
    setAddressValue(event.target.value);
  };

  function register() {
    const url = ``;
    var bodyFormData = new FormData();
    bodyFormData.set("first_name", firstNameValue);
    bodyFormData.set("last_name", lastNameValue);
    bodyFormData.set("email", emailValue);
    bodyFormData.set("password", passwordValue);
    bodyFormData.set("phone", phoneValue);
    bodyFormData.set("pincode", pincodeValue);
    bodyFormData.set("address", addressdValue);
    client({
      method: "post",
      url: url,
      data: bodyFormData,
    })
      .then(function(response) {
        if (response.data["status"] == 1) {
        } else {
         console.log("error")
        }
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={changeFirstNameHandler}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={changeLastNameHandler}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeEmailHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="phone"
                label="Mobile No"
                name="mobile"
                onChange={changeMobileHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pincode"
                type="number"
                label="Pin Code"
                name="pincode"
                onChange={changePinCodeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                onChange={changeAddressHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={changePasswordHandler}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}