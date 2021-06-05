import React from 'react';
import { BsTrash } from  "react-icons/bs"; 
import { BiPencil } from "react-icons/bi";
import axios from "axios";
export default class Reservation extends React.Component {
    constructor(props){
        super(props);
    };

    delete = () => {
        axios.delete("http://localhost:8080/reservations/"+this.props.reservation._id).then(
            res => {
                window.location.reload();
            }
        )

    }
    mouseEnter = () => {
    this.props.updateSelectedReservation(this.props.reservation.idReservation);
}
    render(){
        return(
             <tr onMouseEnter={this.mouseEnter} className="border p-1 m-1 bg-white ">
               <td className="p-1 m-1 bg-white  ">
               <div className="p-1 ">
                                { this.props.reservation.name}
                </div>
               </td >

               <td className="p-1 m-1 bg-white ">
               <div className="p-1 ">
               { this.props.reservation.salle}
                </div>
               </td>

               
               <td className="p-1 m-1 bg-white ">
               <div className="p-1 ">
               { this.props.reservation.startDateTime}
                </div>
               </td>
              
               
                <td className="p-1 m-1 bg-white ">
                <div className="p-1 ">
                {this.props.reservation.endDateTime}
                </div>
                </td>

                <td className="p-1 m-1 bg-white ">
                <div className="p-1 ">
                {this.props.reservation.idUser}
                </div>
                </td>

                <td className="p-1 m-1 bg-white col-sm-4  ">
               <div className="mx-4">
               <button type="button" className="btn btn-outline-danger  btn-sm w-auto px-2 mx-2 " data-toggle="tooltip" data-placement="top" onClick={this.delete}><BsTrash color="red"></BsTrash></button>
               <button type="button" class="btn btn-outline-warning  btn-sm w-auto px-2 m-1 "><BiPencil color="orange"></BiPencil></button>
               </div>
               </td>
                </tr>
        );
    }
}
