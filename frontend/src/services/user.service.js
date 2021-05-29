import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  supprimeuser(_id){
    return axios.delete('http://localhost:8080/users/'+_id,{ headers: authHeader() });
}
 getlisteuser(){
    return axios.get('http://localhost:8080/users', { headers: authHeader() } );
 }
}
 


export default new UserService();
