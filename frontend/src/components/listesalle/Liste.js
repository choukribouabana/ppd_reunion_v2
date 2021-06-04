import React, { Component  } from 'react';
import ListeSalle from './ListeSalle';
import DescSalle from './DescSalle';
import Salle from './Salle';
import dataSalles from './data.js';
import axios from 'axios';
import Loading from './Loading';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AjoutSalle from '../ajoutsalle/AjoutSalle';
import Header from './header';
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
import authHeader from '../../services/auth-header';
import SallesService from '../../services/salles.service';
import AdminSearchAppBar from '../page_accueil/AdminSearchAppBar';




class Liste extends Component {

  
 constructor(props){
super(props);
this.state= {
  salles : [],
  selectedSalle: 0,
  loaded : false
}
};
async componentDidMount(){
this.fetch();  
}

 fetch = () => {
  this.updateSelectedSalle(0);
  SallesService.getlistesalle().then(res => {
    //console.log(res.data);
    this.setState({ 
    salles: res.data,
    loaded : true, });    
  });
}



updateSelectedSalle = (index) => {
 this.setState({
   selectedSalle: index
 }) 
}


render(){

  return (
    <div>
      <PrimarySearchAppBar />
      <div className="d-flex flex-column">
     <Header/>
     { this.state.loaded ? (<div className="d-flex flex-row flex-fill pt-1 p-2">
    <ListeSalle history={this.props.history} salles={this.state.salles}  updateSelectedSalle={ this.updateSelectedSalle } fet= {this.fetch}   />
    <DescSalle salle={this.state.salles[this.state.selectedSalle]}  />
    </div>
    
    ) : (
      <Loading />
    ) }
    </div>
    </div>
  );
}
}
export default Liste;
// "test": "react-scripts test",
