import axios from "axios";
import { useHistory } from "react-router-dom";
const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(donnee) {
    return axios
      .post(API_URL + "signin", donnee)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
   useHistory().push('/');
   return axios.post(API_URL + "logout");
  }

  register(donnee) {
    return axios.post(API_URL + "signup", donnee);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
