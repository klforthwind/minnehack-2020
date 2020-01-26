import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    marginEmail: {
      marginTop: theme.spacing(0.5),
    },
    textField: {
      width: 200,
    },
    info: {
      flexDirection: 'column'
    }
  }));
  
export default function SignUpDialog({ close }) {

  const [newAccount, setNewAccount] = React.useState(null);

  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    email: '',
    username: ''
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSignUpClick = () => {
    close();
    getNewUserData();
  }

  const getNewUserData = () => {
    console.log(values.email);
    console.log(values.password);
    console.log(values.username);
    return {
      email: values.email,
      password: values.password,
      username: values.username
    }
  }

  return (
    //   <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    //     Open form dialog
    //   </Button>
      <Dialog open={true} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter information:
          </DialogContentText>
          <FormControl className={clsx(classes.margin, classes.textField, classes.marginEmail, classes.info)} >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="username"
              fullWidth
              onChange={handleChange('username')}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              onChange={handleChange('email')}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              onChange={handleChange('email')}
            />
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} >
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSignUpClick()} color="primary">
            Sign Up
          </Button>
          <Button onClick={close} color="primary">
            <p style={{ color: "#8b0000" }}>Cancel</p>
          </Button>
        </DialogActions>
      </Dialog>

  );
}
