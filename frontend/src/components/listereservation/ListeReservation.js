import React from 'react';
import Reservation from './Reservation';
export default class ListeReservation extends React.Component {

    render(){
        return(
         <table className=" table border p-1 m-1 w-75 shadow-sm table-secondary table-hover  " >
             <thead className="table-light"  >
                 <tr className="p-1 m-1 ">
                     <th className=" p-1 m-1 ">
                        idReservation
                     </th>
                     <th className=" p-1 m-1 ">
                        FullName
                     </th>
                     <th className=" p-1 m-1 ">
                        NumSalle
                     </th>
                     <th className=" p-1 m-1 " >
                        Date
                     </th>
                    
                     <th  className=" p-1 m-1 " >
                        Heure
                     </th>
                 </tr>
             </thead>
              <tbody>                               
             { this.props.reservations.map( (m , index) => (
             <Reservation key= { m.idReservation + index} reservation= { m } updateSelectedReservation={ () => {this.props.updateSelectedReservation(index)} } /> 
             ))}  
             </tbody>
        </table>
        );
    }
}
