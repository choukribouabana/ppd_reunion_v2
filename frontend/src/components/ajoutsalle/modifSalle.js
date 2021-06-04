import React from 'react';
import ReactDom from 'react-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
import SallesService from '../../services/salles.service';

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
      <label className="col-sm-4 d-inline   "> { props.label } </label>
      <input  {...props} className="col-sm-3 w-25 " {...field} />
    </div>
  );
    
  const ComposantRadio = ({
    field, 
    form: { touched, errors },
    ...props
  }) => (
    <div className="row form-group ">
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


export default class modifSalle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          mod: null,
          val: false,
        };
      }
    

   componentDidMount() {
        const mod = JSON.parse(localStorage.getItem('allo'));
        this.setState({ mod });
        const val = true;
        this.setState({ val });
      
     
    }   
    
 
      userSchema = Yup.object().shape({
        numsalle: Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
        etage:  Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
        capacite: Yup.number().required('champ Requis').positive('le numéro doit etre positif').integer('le numéro doit etre entier'),
      /*  Handicap: Yup.string().required('faite un choix'),
        Equipement: Yup.string().required('faite un choix'),*/
        
      });
       
render(){   
return(
    <div>
      
        <PrimarySearchAppBar/>
        { this.state.val ? (
<div className="container-fluid pt-1  w-50
      d-flex flex-column justify-content-center align-items-left ">
        <Formik onSubmit={(values, actions) => {
       SallesService.modifiesalle(this.state.mod._id, values).then(response => {
         actions.setSubmitting(false);
        // actions.resetForm();
          console.log(values);
        setTimeout( () => {
          this.props.history.push("/listeSalle");
          localStorage.removeItem("allo");
          //window.location.reload();
        
          }, 500);
        })
       .catch(error => {
         actions.isSubmitting= false;
       });
     }} initialValues={{ numsalle: this.state.mod.numsalle, etage: this.state.mod.etage, capacite: this.state.mod.capacite,Handicape: this.state.mod.Handicape ,DataShow: this.state.mod.DataShow, Organisation: this.state.mod.Organisation, Tableau: this.state.mod.Tableau}}
          validationSchema={this.userSchema}
        >
          {({values,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched}) => (
              
            
              <div className="w-auto d-flex flex-column shadow p-1 mb-3 bg-white rounded " >
                  
            <form onSubmit={handleSubmit} className="bg-white border p-3 d-flex flex-column">
            <div className="h4 d-flex justify-content-left "><span className="border-bottom p-2">Modifier une salle</span>  </div>
            
              <Field type="number" name="numsalle" label="Numéro de la salle" onChange={handleChange} autoFocus variant="outlined" component={ComposantInput} />
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
                   className="col-sm-3 d-inline w-25"
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
                   className="col-sm-3 d-inline w-25"
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
                   className="col-sm-3 d-inline w-25"
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
              <div className=" container-fluid   
                        d-flex flex-column justify-content-right  w-50">
                  <button type="submit" className="btn btn-primary w-50 " disabled={isSubmitting}>
                Modifier
              </button>
            </div>
              </form>
            </div>
          )}
        </Formik>
      </div>) : (<div>walou</div>)
      }
    </div>
)

}


}
