import { TableFooter } from "@material-ui/core";
import React from "react";
import "../../styles/Footer.css"
import ReactDOM from "react-dom";

function Footer(){
    return(
        <div class="footer-dark" style={{marginTop: "400px"}}>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p class="copyright">Company Name © 2021</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer;

