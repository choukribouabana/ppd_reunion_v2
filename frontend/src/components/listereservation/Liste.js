import React, { Component  } from 'react';
import ListeReservation from './ListeReservation';
import DescReservation from './DescReservation';
import Reservation from './Reservation';
import dataReservations from './data.js';
import Loading from './Loading';
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
import Footer from '../page_accueil/Footer';
import SallesService from "../../services/salles.service";
import ReservationService from "../../services/reservation.service";

class Liste extends Component {
 constructor(props){
super(props);
this.state= {
  reservations : [],
  selectedReservation: 0,
    loaded: false
}
}
async componentDidMount(){
     this.fetch();
}
    fetch = () => {
        this.updateSelectedReservation(0);
        ReservationService.getlisteReservations().then(res => {
            //console.log(res.data);
            this.setState({
                reservations: res.data,
                loaded : true, });
        });
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
          <PrimarySearchAppBar/>
          {/*<div>
              {JSON.stringify(this.state.reservations[0])}
          </div>*/}

          <div className="App d-flex flex-column">
        <div className="shadow-sm rounded  border mb-2 p-3 d-flex flex-row w-100 align-items-center bg-secondary ">
     <h5 className="p-1 col-sm-9 text-white"> Liste des réservations </h5>
   
         </div>      
    
     { this.state.loaded ? (<div className="d-flex flex-row flex-fill pt-1 p-2">
    <ListeReservation reservations={this.state.reservations} updateSelectedReservation={ this.updateSelectedReservation } fet= {this.fetch}/>
    <DescReservation reservation={this.state.reservations[this.state.selectedReservation]}/>
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
