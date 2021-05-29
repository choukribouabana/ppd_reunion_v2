import React from 'react';
export default class DescUser extends React.Component {
modif(){
    let k;
if(this.props.user.roles=="60ad14b1fe499d555ccbae8b")
  {k="Admin";}
  else{ 
   k="User";}
return k;
}
    render(){

        return(

        <div className="w-25 bg-light p-4 d-flex flex-column position-fixed top-1 end-0 shadow-sm ">
           <h5>{ this.props.user.name} {this.props.user.prenom } </h5>
           <hr className="w-100"/>
            <div >
             <img alt="movie" className="mx-auto d-block w-75 " src= "https://img.icons8.com/bubbles/2x/user-male.png" />
            </div>
            <hr className="w-100"/>
            <h6> INFORMATIONS</h6>
            <hr className="w-50"/>
            <span className="text-secondary p-1">AGE: {this.props.user.date } </span>
            <span className="text-secondary p-1">Email: {this.props.user.email}</span>
            <span className="text-secondary p-1">Poste: {this.props.user.poste}</span>
            <span className="text-secondary p-1">Role: {this.modif()}</span>
          
             </div>
        );
    }
}
