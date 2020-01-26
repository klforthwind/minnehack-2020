import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar({ signedIn, signOut, signIn, signUp }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [signInDialogOpen, setSignInDialogOpen] = React.useState(false);
  const [signUpDialogOpen, setSignUpDialogOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOutClick = () => {
    signOut();
    setAnchorEl(null);
  }

  const handleSignInClick = () => {
    setSignInDialogOpen(true);
    setAnchorEl(null);
  }
  const hideSignInDialog = () => {
    setSignInDialogOpen(false);
  }

  const handleSignUpClick = () => {
    setSignUpDialogOpen(true);
    setAnchorEl(null);
  }
  const hideSignUpDialog = () => {
    setSignUpDialogOpen(false);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      { signedIn ? 
        <div>
        <Link to="/profile" style={{ textDecoration: 'none', color: '#000000' }}>
          <MenuItem style={{ width: 100 }} onClick={handleMenuClose}>Profile</MenuItem>
        </Link>
        <MenuItem style={{ width: 100 }} onClick={handleSignOutClick}>Sign Out</MenuItem>
        </div> :
        <div>
          <MenuItem style={{ width: 100 }} onClick={handleSignInClick}>Log In</MenuItem>
          <MenuItem style={{ width: 100 }} onClick={handleSignUpClick}>Sign Up</MenuItem>
        </div>
      }
    </Menu>
  );
  
  return (
    <div className={classes.grow}>
      { signInDialogOpen ? <SignInDialog close={hideSignInDialog} signIn={signIn} /> : null }
      { signUpDialogOpen ? <SignUpDialog close={hideSignUpDialog} signUp={signUp} /> : null }
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', textTransform: 'none'}}>
            <Button color="primary" style={{ textTransform: 'none'}}>
              <Typography className={classes.title} style={{color:"#FFFFFF"}} variant="h6" noWrap>
                Volunteer Hack
              </Typography>
            </Button>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/dashboard" style={{ textDecoration: 'none', textTransform: 'none'}}>
                <Button color="primary">
                    <p style={{ color: "#FFFFFF" }}>Dashboard</p>
                </Button>
            </Link>
            <Link to="/explore" style={{ textDecoration: 'none', textTransform: 'none'}}>
              <Button color="primary">
                <p style={{ color: "#FFFFFF" }}>Explore</p>
                {/* TODO: WTF */}
                {/* <div style={makeStyles.searchIcon}>
                    <SearchIcon />
                </div> */}
              </Button>
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
