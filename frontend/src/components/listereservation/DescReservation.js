import React from 'react';

export default class DescReservation extends React.Component {

    render(){
        return(
        <div className="w-25 bg-light p-4 d-flex flex-column position-fixed top-1 end-0 shadow-sm ">
            <h5>idReservation: { this.props.reservation.idReservation}  </h5>
           <hr className="w-25"/>
            <h6> Description</h6>
            <hr className="w-50"/>
            <span className="text-secondary p-1">FullName: { this.props.reservation.fullName}  </span>
            <span className="text-secondary p-1">NumSalle: {this.props.reservation.NumSalle } </span>
            <span className="text-secondary p-1">Date: {this.props.reservation.date}</span>
            <span className="text-secondary p-1">Heure: {this.props.reservation.heure}</span>
             </div>
        );
    }
}