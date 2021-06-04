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
import AuthService from "../../services/auth.service";
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

export default function PrimarySearchAppBar() {

  const  dec = () =>{
    AuthService.logout();
  }  

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

  /*const menuIdr = 'primary-search-account-menur';
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
        
      </Menu>
  );**/

  return (
    <div className="">
      <ul className="d-flex  w-100">
      <li><Link className=" text-white" to="/home">Accueil</Link></li>
  <li><Link className=" text-white" to="/users">Utilisateurs</Link></li>
  <li><Link className=" text-white" to="/listeSalle">Salles</Link></li>
  <li><Link className=" text-white" to="/listeReservation">Réservations</Link></li>
  <li>"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""</li>
  
  <li><Link className=" text-white float-left" onClick={dec}  to="/">Deconnexion</Link></li>            
</ul>
</div>

  /*
  <div class="btn-toolbar text-center well">
    <button type="button" class="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">
      <span class="glyphicon glyphicon-plus" aria-hidden="true"><Link className=" text-white" to="/users">Utilisateurs</Link></span> 
    </button>
    <button type="button" class="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">
      <span class="glyphicon glyphicon-edit" aria-hidden="true"> <Link className=" text-white" to="/listeSalle">Salles</Link> </span> 
    </button>
    <button type="button" class="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left">
      <span class="glyphicon glyphicon-time" aria-hidden="true"><Link className=" text-white" to="/listeReservation">Reservations</Link></span> 
    </button>
    
  </div>**/
   
   
  );
}