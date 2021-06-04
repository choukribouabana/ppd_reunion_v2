import React from 'react';
import ReactDom from 'react-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
import Footer from '../page_accueil/Footer';

const mystyle={
    '&::after':{
      content:'*',
      color : 'red'
    }  
  };
const today = new Date();
const ComposantErreur = props => (
    <div className="row"> 
        <div className="col-sm-3 d-inline w-25"></div>
        <div className="text-danger col-sm-3 w-25">{props.children}</div>
    </div>

  );
  
  const ComposantInput = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="row form-group p-1">
      <label className="col-sm-3 d-inline w-25  "> { props.label } </label>
      <input  {...props} className="col-sm-3 w-25 " {...field} />
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
      <input type="radio" {...props} value="false" className="col-sm-3 w-25 " {...field} />
      { props.ch1 }
      </label>
      <label className="col-sm-3 d-inline w-25  ">  
      <input type="radio" {...props} value="false" className="col-sm-3 w-25 " {...field} />
      { props.ch2 }
      </label>
      </div>
    </div>
  );

export default class AjoutSalle extends React.Component{
constructor(props) {
    super(props);

    this.state = {
      successful: false,
      message: ""
    };
  }




      userSchema = Yup.object().shape({
        numsalle: Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
        etage:  Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
        capacite: Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
        Organisation: Yup.string().required('champ Requis')   
      });
       
render(){   
return(
    <div>
        <PrimarySearchAppBar/>
<div className="container-fluid pt-5  w-75  
      d-flex flex-column justify-content-center align-items-left ">
        <Formik onSubmit={(values, actions) => {
    axios.post('http://localhost:8080/salles/',values)
       .then(response => {
         actions.setSubmitting(false);
         actions.resetForm();
         console.log(values);
         this.setState({
            message: response.data.message,
            successful: true
          });
        setTimeout( () => {
          this.props.history.push("/listeSalle");
       // window.location.reload();
        
          }, 500);
        })
       .catch(error => {
        const resMessage =
            ( error.response &&
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
     }} initialValues={{numsalle: '', etage: '',Organisation:'', capacite: '',Handicape: "false",DataShow: "false", Tableau: "false" }}
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
                  
            <form onSubmit={handleSubmit} className="bg-white border p-4 d-flex flex-column">
            <div className="h4 d-flex justify-content-left "><span className="border-bottom p-2">Ajout d'une salle</span>  </div>
            
              <Field type="number" name="numsalle" label="Numéro de la salle" onChange={handleChange} placeholder="0" autoFocus variant="outlined" component={ComposantInput} />
              <ErrorMessage name="numSalle" component={ComposantErreur} />
              <Field type="number" name="etage" label="Etage" placeholder="0" onChange={handleChange} component={ComposantInput} />
              <ErrorMessage name="etage" component={ComposantErreur} />
              <Field type="number" name="capacite" label="Capacité" placeholder="0" onChange={handleChange} component={ComposantInput} />
              <ErrorMessage name="capacite" component={ComposantErreur} />  
              <Field type="text" name="Organisation" label="Organisation" placeholder="Organisation" onChange={handleChange} component={ComposantInput} />
              <ErrorMessage name="Organisation" component={ComposantErreur} />  

              <div className="row form-group p-1">
               <label className="col-sm-3 d-inline w-25">place Handicapé</label>
                 <div className="col-sm-3 d-inline w-25  ">
                 <label
                     className="d-inline col-sm-3 "
                     htmlFor="true"
                   >
                     Oui
                   </label>
                 <input id="true" type="radio" value={true} name="Handicape" className="Handicape col-sm-9 w-25" onChange={handleChange}
                    defaultChecked={values.Handicape==="true"}
                  />
                    <label
                   className=" d-inline w-25"
                   htmlFor="false"
                  > Non
                  </label>             
                 <input id="false" type="radio" value={false} name='Handicape' className="Handicape col-sm-3 d-inline w-25"
                    onChange={handleChange}
                    defaultChecked={values.Handicape==="false"}
                  />
                  </div>
                  </div>


                  <div className="row form-group p-1">
               <label className="col-sm-3 d-inline w-25">Data-Show</label>
                 <div className="col-sm-3 d-inline w-25  ">
                 <label
                     className="d-inline col-sm-3 "
                     htmlFor="datashow"
                   >
                     Oui
                   </label>
                 <input id="true" type="radio" value={true} name="DataShow" className="DataShow col-sm-9 w-25" onChange={handleChange}
                    defaultChecked={values.DataShow==="true"}
                  />
                    <label
                   className=" d-inline w-25"
                   htmlFor="false"
                  > Non
                  </label>             
                 <input id="false" type="radio" value={false} name='DataShow' className="DataShow col-sm-3 d-inline w-25"
                    onChange={handleChange}
                    defaultChecked={values.DataShow==="false"}
                  />
                  </div>
                  </div>


                  <div className="row form-group p-1">
               <label className="col-sm-3 d-inline w-25">Tableau</label>
                 <div className="col-sm-3 d-inline w-25  ">
                 <label
                     className="d-inline col-sm-3 "
                     htmlFor="datashow"
                   >
                     Oui
                   </label>
                 <input id="true" type="radio" value={true} name="Tableau" className="Tableau col-sm-9 w-25" onChange={handleChange}
                    defaultChecked={values.Tableau==="true"}
                  />
                    <label
                   className=" d-inline w-25"
                   htmlFor="false"
                  > Non
                  </label>             
                 <input id="false" type="radio" value={false} name='Tableau' className="Tableau col-sm-3 d-inline w-25"
                    onChange={handleChange}
                    defaultChecked={values.Tableau==="false"}
                  />
                  </div>
                  </div>










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
      <Footer />
    </div>
)

}


}