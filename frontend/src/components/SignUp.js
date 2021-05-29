import React from 'react';
import ReactDom from 'react-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import logo from './sign1.png';
import AuthService from "../services/auth.service";


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
  
  const ComposantDate = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="form-group">
      <label > { props.label } </label>
      <input type="date" {...props} className="form-control" {...field} />
    </div>
  );

  const ComposantSelect = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="form-group">
      <label > { props.label } </label>
      <select {...props} className="form-control" {...field} >
            <option selected value="user">User</option>
            <option value="admin">Admin</option>
          </select>
</div>
  );

  const ComposantFile = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="form-group">
      <label> { props.label } </label>
      <input type="file" {...props} className="form-control" {...field} />
    </div>
  );
  


export default class SignUp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

      userSchema = Yup.object().shape({
        name: Yup.string('String').min(3, 'Trop court').max(20, 'Trop long').required('champ Requis'),
        username: Yup.string('String').min(3, 'Trop court').max(20, 'Trop long').required('champ Requis'),
        prenom: Yup.string('String').min(3, 'Trop court').max(20, 'Trop long').required('champ Requis'),
        email: Yup.string().email("L'email doit être valide").required('champ Requis'),
        poste: Yup.string('String').min(3, 'Trop court').max(20, 'Trop long').required('champ Requis'),
        date: Yup.date().max(today, 'la date de naissance est fausse').required('champ Requis'),
        password: Yup.string().min(5, 'Trop court').required('champ Requis'),
        
      }); 
render(){
return(
<div className="container-fluid p-5  
      d-flex flex-column justify-content-center align-items-center">
        <Formik onSubmit={(values, actions) => {
          AuthService.register(values)
       .then( (response)=> {
         actions.setSubmitting(false);
         actions.resetForm();
         console.log(values);
         this.setState({
            message: response.data.message,
            successful: true
          });
          setTimeout( () => {
          this.props.history.push("/");
        window.location.reload();
        
          }, 1500);
        
       })
       .catch(error => {
        const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            actions.resetForm();
            console.log(values);
         
          this.setState({
            successful: false,
            message: resMessage
          });
        // actions.isSubmitting= false;
       });
     }}
          
          initialValues={{name: '', email: '', password: '',username: '', poste:'',prenom:'',date: null, roles :'user',Ajoutimage:undefined}}
          validationSchema={this.userSchema}
        >
          {({values,
          handleBlur,
          setFieldValue,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched}) => (
              
            
              <div className="w-25 d-flex flex-column shadow p-2 mb-3 bg-white rounded " >
                  
            <form onSubmit={ handleSubmit } className="bg-white border p-4 d-flex flex-column">
            <div className="h3 d-flex justify-content-center"> Register </div>
            <div className="d-flex justify-content-center">
            <img alt="signup" className="mx-auto d-block w-50" src={logo} />  
            </div>
            
              <Field name="username" label="Nom d'utilisateur" onChange={ handleChange } placeholder="Nom d'utilisateur" autoFocus variant="outlined" component={ComposantInput} />
              <ErrorMessage name="username" component={ComposantErreur} />
              <Field name="password" label="Mot de passe" type="password" onChange={ handleChange } placeholder="xxxxxxxxxx" component={ComposantInput} />
              <ErrorMessage name="password" component={ComposantErreur} />
              <Field name="name" label="Nom" onChange={ handleChange } placeholder="Nom" component={ComposantInput} />
              <ErrorMessage name="name" component={ComposantErreur} />  
              <Field name="prenom" label="Prénom" onChange={ handleChange } placeholder="prénom" component={ComposantInput} />
              <ErrorMessage name="prenom" component={ComposantErreur} />
              <Field name="email" label="Email" type="email" onChange={ handleChange } placeholder="xxxxxxx@xxx.xxx" component={ComposantInput} />
              <ErrorMessage name="email" component={ComposantErreur} />
              <Field name="date" label="Date de Naissance" onChange={ handleChange } component={ComposantDate} />
              <ErrorMessage name="date" component={ComposantErreur} />  
              <Field name="poste" label="Poste" onChange={ handleChange } placeholder="Poset" component={ComposantInput} />
              <ErrorMessage name="poste" component={ComposantErreur} />  
              <Field name="roles" label="Role" onSubmit={ (e)=> setFieldValue('roles',e.target.value) } placeholder="user" component={ComposantSelect} />
              <ErrorMessage name="roles" component={ComposantErreur} />  
              
              <br></br>
              {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Envoyer
              </button>
            </form>
            </div>
          )}
        </Formik>
      </div>

)
}
}