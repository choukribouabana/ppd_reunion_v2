import React from 'react';
import Utilisateur from './Utilisateur';



export default class ListeUtilisateur extends React.Component {

    render(){
        return(
         <table className=" table border p-1 m-1 w-75 shadow-sm table-secondary table-hover  " >
             <thead className="table-light"  >
                 <tr className="p-1 m-1 ">
                     <th className=" p-1 m-1 ">
                        NOM 
                     </th>
                     <th className=" p-1 m-1 ">
                        PRENOM 
                     </th>
                     <th colspan="2" className=" p-1 m-1 " >
                        EMAIL 
                     </th>
                 </tr>
             </thead>
              <tbody>                               
             { this.props.users.map( (m , index) => (
             <Utilisateur history={this.props.history} key= { m.name + index} user= { m } fet= {this.props.fet} updateSelectedUser={ () => {this.props.updateSelectedUser(index)} } /> 
             ))}  
             </tbody>
        </table>
        ); 
    }
}