import React, { Component  } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class Header extends React.Component {

    render(){
        return( 
<div className="shadow-sm rounded  border mb-2 p-3 d-flex flex-row w-100 align-items-center bg-secondary ">
<h5 className="p-1 col-sm-9 text-white"> Liste des Salles </h5>
<Link className="btn btn-info btn-sm text-white" to="/ajoutSalle">Ajouter une Salle</Link>
     
     

    </div>      )}

}