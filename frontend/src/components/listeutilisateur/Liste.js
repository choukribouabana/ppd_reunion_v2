import React, { Component  } from 'react';
import ListeUtilisateur from './ListeUtilisateur';
import DescUser from './DescUser';
import Utilisateur from './Utilisateur';
import dataMovies from './data.js';
import Loading from './Loading';
import axios from 'axios';
import userService from '../../services/user.service';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
import AdminSearchAppBar from '../page_accueil/AdminSearchAppBar';


class Liste extends Component {
 constructor(props){
super(props);
this.state= {
  users : [],
  selectedUser: 0,
  loaded: false
}
};

componentDidMount(){
  this.fetch();  
  }

  fetch =  () => {
    this.updateSelectedUser(0);
    userService.getlisteuser().then(res => {
      //console.log(res.data);
      this.setState({
        users: res.data,
      loaded : true, });    
    });
  }
  
updateSelectedUser = (index) => {
 this.setState({
   selectedUser: index
 }) 
}


render(){
  return (
    <div className=" d-flex flex-column">
            <PrimarySearchAppBar/>
  
        <div className="shadow-sm rounded  border mb-2 p-3 d-flex flex-row w-100 align-items-center bg-secondary ">
     <h5 className="p-1 col-sm-9 text-white"> Liste des utilisateurs </h5>
     <Link className="btn btn-info btn-sm text-white" to="/AjoutUser">Ajouter un utilisateur</Link>
         </div>      
    
     { this.state.loaded && this.state.users.length>0 ? (<div className="d-flex flex-row flex-fill pt-1 p-2">
    <ListeUtilisateur history={this.props.history} users={this.state.users} updateSelectedUser={ this.updateSelectedUser } fet= {this.fetch} />
    <DescUser user={this.state.users[this.state.selectedUser]} />
    </div>
    ) : (
      <Loading />
    ) }
    
    </div>
  );
}
}
export default Liste;
// "test": "react-scripts test",