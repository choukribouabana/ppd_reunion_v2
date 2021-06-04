import React from 'react';
export default class DescUser extends React.Component {
modif(){
    let k;
if(this.props.user.roles[0].name=="admin")
  {k="Administrateur";}
  else{ 
   k="Utilisateur";}
return k;
}

calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  }

    render(){

        return(

        <div className="w-25 bg-light p-4 d-flex flex-column position-fixed top-1 end-0 shadow-sm ">
           <h5>{ this.props.user.name} {this.props.user.prenom } </h5>
           <hr className="w-100"/>
            <div >
             <img alt="movie" className="mx-auto d-block w-75 " src="https://img.icons8.com/bubbles/2x/user-male.png" />
            </div>
            <h6> INFORMATIONS</h6>
            <hr className="w-50"/>
            <span className="text-secondary p-1">AGE: { this.calculate_age(this.props.user.date)+" ans" } </span>
            <span className="text-secondary p-1">Email: {this.props.user.email}</span>
            <span className="text-secondary p-1">Poste: {this.props.user.poste}</span>
            <span className="text-secondary p-1">Role: {this.modif()}</span>
          
             </div>
        );
    }
}