import React from 'react';
import Salle from './Salle';

export default class ListeSalle extends React.Component {

    render(){
        return(
         <table className=" table border p-1 m-1 w-75 shadow-sm table-secondary table-hover  " >
             <thead className="table-light"  >
                 <tr className="p-1 m-1 ">
                     <th className=" p-1 m-1 ">
                        Numéro Salle 
                     </th>
                     <th className=" p-1 m-1 ">
                        Etage 
                     </th>
                     <th colspan="2" className=" p-1 m-1 " >
                        Capacité 
                     </th>
                 </tr>
             </thead>
              <tbody>                               
             { this.props.salles.map( (m , index) => (
             <Salle  key= { m.numsalle + index} salle= { m }  fet= {this.props.fet} updateSelectedSalle={ () => {this.props.updateSelectedSalle(index)} } /> 
             ))}  
             </tbody>
        </table>
        ); 
    }
}
