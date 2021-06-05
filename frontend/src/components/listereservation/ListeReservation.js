import React from 'react';
import Reservation from './Reservation';
export default class ListeReservation extends React.Component {

    render(){
        return(
         <table className=" table border p-1 m-1 w-75 shadow-sm table-secondary table-hover  " >
             <thead className="table-light"  >
                 <tr className="p-1 m-1 ">
                     <th className=" p-1 m-1 ">
                        name
                     </th>
                     <th className=" p-1 m-1 ">
                        salle
                     </th>
                     <th className=" p-1 m-1 ">
                        starttime
                     </th>
                     <th className=" p-1 m-1 " >
                        endtime
                     </th>
                    
                     <th  className=" p-1 m-1 " >
                        user
                     </th>
                 </tr>
             </thead>
              <tbody>                               
             { this.props.reservations.map( (m , index) => (
             <Reservation key= { m._id + index} reservation= { m } fet= {this.props.fet} updateSelectedReservation={ () => {this.props.updateSelectedReservation(index)} } />
             ))}  
             </tbody>
        </table>
        );
    }
}
