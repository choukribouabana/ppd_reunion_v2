import React from 'react';

export default class DescSalle extends React.Component {

    render(){
        return(    
        <div className="w-25 bg-light p-4 d-flex flex-column position-fixed top-1 end-0 shadow-sm ">
            <h5>Salle: { this.props.salle.numsalle}  </h5>
           <hr className="w-25"/>
            <h6> Déscription</h6>
            <hr className="w-50"/>
            <span className="text-secondary p-1">Organization:  </span>
            <span className="text-secondary p-1">Etage: {this.props.salle.etage}</span>
            <span className="text-secondary p-1">Capacite: {this.props.salle.capacite}</span>
            <span className="text-secondary p-1">Place Handicapé: </span>
            <h6> Equipement</h6>
            <hr className="w-50"/>
            <span className="text-secondary p-1">Data-Show: {this.props.salle.description}</span>
            <span className="text-secondary p-1">Tableau: {this.props.salle.year}</span>
            
            
             </div>
        );
    }
}