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
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import AdminPage from './AdminSearchAppBar';


const useStyles = makeStyles((theme) => ({
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
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

export default function UserSearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElr, setAnchorElr] = React.useState(null);
  const [anchorElrr, setAnchorElrr] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMenuOpenr = Boolean(anchorElr);
  const isMenuOpenrr = Boolean(anchorElrr);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpenr = (event) => {
    setAnchorElr(event.currentTarget);
  };

  const handleProfileMenuOpenrr = (event) => {
    setAnchorElrr(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuCloser = () => {
    setAnchorElr(null);
  };
  const handleMenuCloserr = () => {
    setAnchorElrr(null);
  };

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
      
      <MenuItem onClick={handleMenuClose}><Link to="/userAccount">Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}>Déconnexion</MenuItem> 
    </Menu>
  );

  const menuIdr = 'primary-search-account-menur';
  const renderMenur = (
    <Menu
      anchorEl={anchorElr}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuIdr}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpenr}
      onClose={handleMenuCloser}
    >
      <MenuItem onClick={handleMenuCloser}><Link to="/ajoutReservation">Créer réservation</Link></MenuItem>
      <MenuItem onClick={handleMenuCloser}><Link to="/listeReservation">Liste des réservations</Link></MenuItem>
    </Menu>
  );

  const menuIdrr = 'primary-search-account-menur';
  const renderMenurr = (
      <Menu
          anchorEl={anchorElrr}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuIdrr}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpenrr}
          onClose={handleMenuCloserr}
      >
        <MenuItem onClick={handleMenuCloser}><Link to="/ajoutSalle">Créer une salle</Link></MenuItem>
        <MenuItem onClick={handleMenuCloser}><Link to="/listeSalle">Supprimer une salle</Link></MenuItem>
        <MenuItem onClick={handleMenuCloser}><Link to="/listeSalle">Liste des salles</Link></MenuItem>
      </Menu>
  );

  return (
    <div className={classes.grow} >
      <AppBar position="static" style={{backgroundColor:"#282d32", marginBottom:"50px", fontFamily:"Arial, Helvetica, sans-serif"}}>
        <Toolbar >
        <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              style={{marginLeft:"50px", marginRight:"50px"}}
            >
              <Link className=" text-white" to="/home" style={{textDecoration:"none", fontSize:"30px"}}>Acceuil</Link>
          </IconButton>
          <IconButton
              edge="start"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpenr}
              color="inherit"
            >
              <Link className=" text-white" to="/listeReservation" style={{textDecoration:"none", fontSize:"30px"}}>Reservations</Link>
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <IconButton
              edge="start"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpenr}
              color="inherit"
            >
              <Link className=" text-white" to="/userAccount" style={{textDecoration:"none", fontSize:"30px"}}>Profile</Link>
          </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MenuItem onClick={handleMenuClose} style={{textDecoration:"none", fontSize:"30px"}}>Déconnexion</MenuItem>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}