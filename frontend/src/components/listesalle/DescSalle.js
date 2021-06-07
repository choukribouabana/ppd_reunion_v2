import React from 'react';
let ver=(val)=>{
    if(val==="true"){
        return "avec";
        }
        else{
            return "sans";
        }
    }
export default class DescSalle extends React.Component {

    render(){
        return(    
            <div className="w-25 bg-light p-4 d-flex flex-column position-fixed top-1 end-0 shadow-sm ">
            <h5>Salle { this.props.salle.numsalle}  </h5>
           <hr className="w-100"/>
            <h6> Description</h6>
            <hr className="w-100"/>
            <span className="text-secondary p-1">Organization: {this.props.salle.Organisation} </span>
            <span className="text-secondary p-1">Etage: {this.props.salle.etage}</span>
            <span className="text-secondary p-1">Capacite: {this.props.salle.capacite}</span>
            <span className="text-secondary p-1">Place Handicapé: {ver(this.props.salle.Handicape)} </span>
            <hr className="w-100"/>
            <h6> Equipement</h6>
            <hr className="w-100"/>
            <span className="text-secondary p-1">Data-Show: {ver(this.props.salle.DataShow)}</span>
            <span className="text-secondary p-1">Tableau: {ver(this.props.salle.Tableau)}</span>


             </div>
        );
    }
}