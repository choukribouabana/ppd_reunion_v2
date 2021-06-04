import React, { Component  } from 'react';
import ListeReservation from './ListeReservation';
import DescReservation from './DescReservation';
import Reservation from './Reservation';
import dataReservations from './data.js';
import Loading from './Loading';
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
import AdminSearchAppBar from '../page_accueil/AdminSearchAppBar';
import UserSearchAppBar from '../page_accueil/UserSearchAppBar';
import Footer from '../page_accueil/Footer';

class Liste extends Component {
 constructor(props){
super(props);
this.state= {
  Reservations : null,
  selectedReservation: 0
}
setTimeout( () => {
this.setState({
  Reservations: dataReservations,
  loaded: true
})
}, 200);
}

updateSelectedReservation = (index) => {
 this.setState({
   selectedReservation: index
 })
}

updateReservations(reservations){
  this.setState({
    reservations,
    loaded: true
  })
}

render(){
  return (
      <div>
        <UserSearchAppBar />

    <div className="App d-flex flex-column">
        <div className="shadow-sm rounded  border mb-2 p-3 d-flex flex-row w-100 align-items-center bg-secondary ">
     <h5 className="p-1 col-sm-9 text-white"> Liste des réservations </h5>
     <button className="btn btn-info btn-sm text-white" type="submit">Ajouter une réservation</button>
         </div>      
    
     { this.state.loaded ? (<div className="d-flex flex-row flex-fill pt-1 p-2">
    <ListeReservation reservations={this.state.Reservations} updateSelectedReservation={ this.updateSelectedReservation } />
    <DescReservation reservation={this.state.Reservations[this.state.selectedReservation]}/>
    </div>
    ) : (
      <Loading />
    ) }
    
    </div>
      <Footer />
      </div>
  );
}
}
export default Liste;
// "test": "react-scripts test",