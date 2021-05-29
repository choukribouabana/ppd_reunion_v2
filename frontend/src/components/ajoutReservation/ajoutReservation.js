import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";

const mystyle={
    '&::after':{
      content:'*',
      color : 'red'
    }  
  };
const today = new Date();
// connexion au backend 
/*const handleSubmit=()=> {
  axios.get("/reservations").then(response => {
    this.setState({
      reservations : response.data
    })
  });
};**/
const ComposantErreur = props => (
    <div className="row"> 
        <div className="col-sm-3 d-inline w-25"></div>
        <div className="text-danger col-sm-3 w-25">{props.children}</div>
    </div>

  );
  const ComposantDate = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="row form-group p-1">
      <label className="col-sm-3 d-inline w-25  "> { props.label } </label>
      <input type="date" {...props} className="col-sm-3 w-25 " {...field} />
    </div>
  );
  
  const ComposantHeure = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="row form-group p-1">
      <label className="col-sm-3 d-inline w-25  "> { props.label } </label>
      <input type="time" {...props} className="col-sm-3 w-25 " {...field} />
    </div>
  );
  const ComposantInputName = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="row form-group p-1">
      <label className="col-sm-3 d-inline w-25  "> { props.label } </label>
      <input type="text" {...props} className="col-sm-3 w-25 " {...field} />
    </div>
  );

  const ComposantInputNumber = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="row form-group p-1">
      <label className="col-sm-3 d-inline w-25  "> { props.label } </label>
      <input type="number" {...props} className="col-sm-3 w-25 " {...field} />
    </div>
  );
    
  const ComposantRadio = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="row form-group p-1">
      <label className="col-sm-3 d-inline w-25 " id="lab" > { props.label } </label>  
      <div className="col-sm-3 d-inline w-25  ">
      <label className="col-sm-3 d-inline w-25  ">  
      <input type="radio" {...props} className="col-sm-3 w-25 " {...field} />
      { props.ch1 }
      </label>
      <label className="col-sm-3 d-inline w-25  ">  
      <input type="radio" {...props} className="col-sm-3 w-25 " {...field} />
      { props.ch2 }
      </label>
      </div>
    </div>
  );
 

export default class AjoutReservation extends React.Component{
    submit = (values, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.isSubmitting = false;
          actions.resetForm();
        }, 1000);
      }
      userSchema = Yup.object().shape({
        idReservation:Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
        fullName: Yup.string('String').min(3, 'Trop court').max(20, 'Trop long').required('champ Requis'),
        NumSalle:  Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
        heure: Yup.string().required('champ Requis'),
        date: Yup.date().max(today, 'la date  est fausse').required('champ Requis'),
      });
render(){   
return(
    <div>
        <PrimarySearchAppBar/>
<div className="container-fluid pt-5  w-75  
      d-flex flex-column justify-content-center align-items-left ">
        <Formik
          onSubmit={this.submit}
          initialValues={{idReservation: '', fullName: '', NumSalle: '',heure: '',date: '' }}
          validationSchema={this.userSchema}
        >
          {({values,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched}) => (
              
            
              <div className="w-auto d-flex flex-column shadow p-2 mb-3 bg-white rounded " >
                  
            <form onSubmit={ handleSubmit } className="bg-white border p-4 d-flex flex-column">
            <div className="h4 d-flex justify-content-left "><span className="border-bottom p-2">Ajout d'une réservation</span>  </div>
             
             <Field name="idReservation" label="Réservation" placeholder="1" component={ComposantInputNumber} />
              <ErrorMessage name="idReservation" component={ComposantErreur} />  
              <Field name="NumSalle" label="Numéro de la salle" placeholder="0" autoFocus variant="outlined" component={ComposantInputNumber} />
              <ErrorMessage name="NumSalle" component={ComposantErreur} />
              <Field name="fullName" label="fullName"  component={ComposantInputName} />
              <ErrorMessage name="fullName" component={ComposantErreur} />
              <Field name="heure" label="heure" placeholder="10:00:00" component={ComposantHeure} />
              <ErrorMessage name="heure" component={ComposantErreur} />  
              <Field name="date" label="date" placeholder="10/01/2021" component={ComposantDate} />
              <ErrorMessage name="date" component={ComposantErreur} />  
            
              <br></br>
              <div className=" container-fluid   
                        d-flex flex-column justify-content-right  w-50">
                  <button type="submit" className="btn btn-primary w-25 " disabled={isSubmitting}>
                Ajouter
              </button>
            </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
)

}


}
