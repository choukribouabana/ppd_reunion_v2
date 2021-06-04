import React from 'react';
import { BsTrash } from  "react-icons/bs"; 
import { BiPencil } from "react-icons/bi";
import axios from 'axios';
import UserService from '../../services/user.service';
import AuthService from "../../services/auth.service";
import { BiBody } from "react-icons/bi";

export default class Utilisateur extends React.Component {

    
    verif = (k) => {
      const t = AuthService.getCurrentUser();
      return t.id==k._id;
    }

    delete = () => {
     
        UserService.supprimeuser(this.props.user._id)
        .then(res => {
            console.log(res.data);
        });
        this.props.fet();
    }
    charger= () =>{
        localStorage.setItem('util',JSON.stringify(this.props.user)); 
        this.props.history.push("/modifUser");
        window.location.reload();
        console.log("zz");

    }
    
    mouseEnter = () => {
    this.props.updateSelectedUser(this.props.user.name);
}
    render(){
        return(
             <tr onMouseEnter={this.mouseEnter} className="border p-1 m-1 bg-white ">                  
               <td className="p-1 m-1 bg-white  ">
               <div className="p-1 "> 
                                { this.props.user.name}
                </div>
               </td >

               <td className="p-1 m-1 bg-white ">
               <div className="p-1 ">
               { this.props.user.prenom}
                </div>
               </td>
               
                <td className="p-1 m-1 bg-white ">
                <div className="p-1 ">
                {this.props.user.email}
                </div>
                </td>
                <td className="p-1 m-1 bg-white col-sm-4  ">
               {  !this.verif(this.props.user) ?(
               <div className="mx-4">
               <button type="button" className="btn btn-outline-danger  btn-sm w-auto px-2 mx-2 " data-toggle="tooltip" data-placement="top" onClick={ this.delete }><BsTrash color="red" ></BsTrash></button>
               <button type="button" class="btn btn-outline-warning  btn-sm w-auto px-2 m-1 "  onClick={this.charger} ><BiPencil color="orange"></BiPencil></button>
               <button type="button" class="btn btn-outline-primary  btn-sm w-auto px-1 mx-2 ">Liste des Réservations</button>
               </div>
               ) 
               : ( 
               <div className="mx-4">
                    <button type="button" className="btn btn-outline-secondary  btn-sm w-auto px-2 mx-2 " data-toggle="tooltip" data-placement="top" ><BiBody color="green" ></BiBody></button>
               <button type="button" class="btn btn-outline-warning  btn-sm w-auto  px-2 m-1 "  onClick={this.charger} ><BiPencil color="orange"></BiPencil></button>
               <button type="button" class="btn btn-outline-primary  btn-sm w-auto px-1 mx-2 ">Liste des Réservations</button>
  
              </div>)
               }
            
               </td>
                </tr>
        ); 
    }
}