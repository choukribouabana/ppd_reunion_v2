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
import ajoutReservationAdmin from './components/ajoutReservation/ajoutReservationAdmin';
import AjoutreservationUser from './components/ajoutReservation/ajoutReservationUser';
import AjoutSalle from'./components/ajoutsalle/AjoutSalle';
import PageAccueil from "./components/page_accueil/page_accueil";
import HomeAdmin from "./components/page_accueil/HomeAdmin";
import HomeUser from "./components/page_accueil/HomeUser";
import AdminSearchAppBar from "./components/page_accueil/AdminSearchAppBar"
import UserSearchAppBar from "./components/page_accueil/UserSearchAppBar"
import ListeUsers from './components/listeutilisateur/Liste';
import User_accountAdmin from "./components/User_accountAdmin";
import User_accountUser from "./components/User_accountUser";
import AjoutSalleAdmin from "./components/ajoutsalle/AjoutSalleAdmin";
import AjoutSalleUser from "./components/ajoutsalle/AjoutSalleUser";
import Liste from "./components/listereservation/Liste";
import ListeAdmin from "./components/listereservation/ListeAdmin";
import ListeUser from "./components/listereservation/ListeUser";
//import HomeAdmin from "./components/page_accueil/HomeAdmin";
import Agenda from "./components/agenda/Vf_agenda";


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
    console.log(this.state.showAdminBoard);
    console.log(this.state.showModeratorBoard);
    console.log(this.state.currentUser);

    return (
        <div>  

          <Switch>
            <Route exact path="/" component={SignIn} />

            {showAdminBoard ? (<Route exact path="/userAccount" component={User_accountAdmin} />) : (<Route exact path="/userAccount" component={User_accountUser} />)}
            
            {showAdminBoard ? (<Route exact path="/ajoutSalle" component={AjoutSalleAdmin} />) :(<Route exact path="/ajoutSalle" component={AjoutSalleUser} />)}

            <Route exact path="/users" component={ListeUsers} />

            <Route exact path="/listeSalle" component={ListeSalle} />
            {/*<Route exact path="/agenda" component={Agenda} />*/}

            { showAdminBoard ? (<Route path="/ajoutReservation" component={ajoutReservationAdmin} />) :(<Route path="/ajoutReservation" component={AjoutreservationUser} />)}

            {showAdminBoard ? (<Route path="/listeReservation" component={ListeAdmin} />) : (<Route path="/listeReservation" component={ListeUser} />)}

            {showAdminBoard ? (<Route path="/home" component={HomeAdmin} />) : (<Route path="/home" component={HomeUser} />) }
            <Route path="/signup" component={SignUp} />
            
           
          </Switch>
        </div>
    );
  }
}

export default App;
