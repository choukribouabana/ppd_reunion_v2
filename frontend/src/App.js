import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import SignUp from "./components/SignUp";


import User_account from "./components/User_account";
import ListeSalle from './components/listesalle/Liste';
import ListeReservation from './components/listereservation/Liste';
import SignIn from './components/SignIn';
import Ajoutreservation from './components/ajoutReservation/ajoutReservation';
import AjoutSalle from'./components/ajoutsalle/AjoutSalle';
import PageAccueil from "./components/page_accueil/page_accueil";
import ListeUsers from './components/listeutilisateur/Liste';
import Vf_agenda from './components/agenda/Vf_agenda';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
        <div>         
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/agenda" component={Vf_agenda} />
            <Route exact path="/userAccount" component={User_account} />
            <Route exact path="/ajoutSalle" component={AjoutSalle} />
            <Route exact path="/users" component={ListeUsers} />
            <Route exact path="/listeSalle" component={ListeSalle} />
            <Route path="/ajoutReservation" component={Ajoutreservation} />
            <Route path="/listeReservation" component={ListeReservation} />
            <Route path="/home" component={PageAccueil} />
            <Route path="/signup" component={SignUp} />
            
           
          </Switch>
        </div>
    );
  }
}

export default App;
