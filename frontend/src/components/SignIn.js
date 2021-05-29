import React from 'react';
import ReactDom from 'react-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import logo from './sign2.png';
import AuthService from "../services/auth.service";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const today = new Date();
const ComposantErreur = props => (
    <div className="text-danger">{props.children}</div>
  );
  
  const ComposantInput = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="form-group">
      <label> { props.label } </label>
      <input type="text" {...props} className="form-control" {...field} />
    </div>
  );
   
  
  
export default class SignIn extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  userSchema = Yup.object().shape({
        email: Yup.string().email("L'email doit être valide").required('champ Requis'),
        password: Yup.string().min(5, 'Trop court').required('champ Requis')
      }); 
render(){
return(
<div className="container-fluid pt-5 
      d-flex flex-column justify-content-center align-items-center mt-auto ">
        <Formik onSubmit={(values, actions) => {
     AuthService.login(values)
       .then( ()=> {
        this.props.history.push("/home");
        window.location.reload();
         actions.setSubmitting(false);
         actions.resetForm();
         console.log(values);
       })
       .catch(error => {
        const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            actions.resetForm();
         
          this.setState({
            loading: false,
            message: resMessage
          });
        // actions.isSubmitting= false;
       });
     }}
        
          initialValues={{email: '', password: ''}}
          validationSchema={this.userSchema}
        >
          {({values,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched}) => (
              
            
              <div className="d-flex flex-column shadow p-2 mb-3 bg-white rounded " >
                  
            <form onSubmit={ handleSubmit } className="bg-white border p-4 d-flex flex-column">
            <div className="h3 d-flex justify-content-center"> Authentification </div>
            <div className="d-flex justify-content-center">
            <img alt="signup" className="mx-auto d-block w-50" src={logo} />  
            </div>
            <Field name="email" label="Email" type="email" onChange={handleChange} placeholder="Votre Adreese Email"  component={ComposantInput} />
            <ErrorMessage name="email" component={ComposantErreur} />
        
            <Field name="password"  label="Mot de passe" type="password" onChange={handleChange} placeholder="Mot de Passe" component={ComposantInput} />
            <ErrorMessage name="password" component={ComposantErreur} />
            <div className="p-1 d-block">
                <a className="d-block" href="#">Mot de passe oublié?</a>   
                <Link to="/signup">S'inscrire</Link>
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
              <div className="p-2 d-flex justify-content-center">
              <button type="submit" className=" btn btn-primary" disabled={isSubmitting}>
                S'authentifier
              </button>

              </div>
            </form>
            </div>
          )}
        </Formik>
             

      </div>
      

)

}


}
