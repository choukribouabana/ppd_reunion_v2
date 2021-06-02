import React from 'react';
import { BsTrash } from  "react-icons/bs"; 
import { BiPencil } from "react-icons/bi";
import axios from 'axios';
import SallesService from '../../services/salles.service';
import ajout from '../ajoutsalle/AjoutSalle';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class Salle extends React.Component {
       
    constructor(props){
        super(props);
        };
        
 
    delete = () => {

        SallesService.supprimesalle(this.props.salle._id)
        .then(res => {
            console.log(res.data);   
            
        });
        this.props.fet();
        
    }
    charger= () =>{
        console.log(this.props.salle);
        localStorage.setItem('allo',JSON.stringify(this.props.salle)); 
        this.props.history.push("/modif");
        window.location.reload();
        console.log("zz");

    }
    mouseEnter = () => {
    this.props.updateSelectedSalle(this.props.salle.numsalle);
}

render(){
        return(
              
             <tr onMouseEnter={this.mouseEnter} className="border p-1 m-1 bg-white ">                  
               <td className="p-1 m-1 bg-white  ">
               <div className="p-1 "> 
                                { this.props.salle.numsalle}
                </div>
               </td >

               <td className="p-1 m-1 bg-white ">
               <div className="p-1 ">
               { this.props.salle.etage}
                </div>
               </td>
               
                <td className="p-1 m-1 bg-white ">
                <div className="p-1 ">
                {this.props.salle.capacite}
                </div>
                </td>
                <td className="p-1 m-1 bg-white col-sm-4  ">
               <div className="mx-4">
               <button type="button" className="btn btn-outline-danger  btn-sm w-auto px-2 mx-2 " data-toggle="tooltip" data-placement="top" onClick={this.delete}><BsTrash color="red" ></BsTrash></button>
               <button type="button" class="btn btn-outline-warning  btn-sm w-auto px-2 m-1 " onClick={this.charger} ><BiPencil color="orange"    ></BiPencil></button>
               <button type="button" class="btn btn-outline-primary  btn-sm w-auto px-1 mx-2 ">Liste des Réservations</button>
               </div>
               </td>
                </tr>
        ); 
    }
}
