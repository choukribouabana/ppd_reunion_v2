import React from 'react';
import { BsTrash } from  "react-icons/bs"; 
import { BiPencil } from "react-icons/bi";
import axios from "axios";
import ReactAgendaCtrl from "../agenda/page_agenda/reactAgendaCtrl";
import ModalView from "../agenda/page_agenda/Modal/Modal";


var colors= {
    'color-1':"rgba(102, 195, 131 , 1)" ,
    "color-2":"rgba(242, 177, 52, 1)" ,
    "color-3":"rgba(235, 85, 59, 1)" ,
    "color-4":"rgba(70, 159, 213, 1)",
    "color-5":"rgba(170, 59, 123, 1)"
}

export default class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            selected: [],
            items: []
        }
        this._closeModal = this._closeModal.bind(this)
        this.editEvent = this.editEvent.bind(this)

    };
    editEvent (items , item){

        this.setState({showModal:false ,selected:[] , items:items});
        this._closeModal();
    }
    _closeModal(e){
        if(e){
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({showModal:false})
        window.location.reload(false);
    }


    delete = () => {
        axios.delete("http://localhost:8080/reservations/"+this.props.reservation._id).then(
            res => {
                window.location.reload();
            }
        )

    }
    edit =() => {
        return (
                    <div></div>
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
               <button type="button" class="btn btn-outline-warning  btn-sm w-auto px-2 m-1 " onClick={this.edit}><BiPencil color="orange" ></BiPencil></button>
               </div>
               </td>
                </tr>
        );
    }
}
