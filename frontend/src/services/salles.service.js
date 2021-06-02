import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/salles';

class SallesService {
  getlistesalle() {
    return axios.get(API_URL + '/',{ headers: authHeader() });
  }

  ajoutsalle() {
    return axios.get(API_URL + '/', { headers: authHeader() });
  }
  supprimesalle(_id){
      return axios.delete('http://localhost:8080/salles/'+_id,{ headers: authHeader() });
  }
  modifiesalle(_id,values){
    return axios.put('http://localhost:8080/salles/'+_id, values,{ headers: authHeader() });
 
  }

}


export default new SallesService();
