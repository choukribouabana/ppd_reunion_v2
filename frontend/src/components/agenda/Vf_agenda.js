import React from "react";
import PrimarySearchAppBar from "../page_accueil/PrimarySearchAppBar";
import Agenda from "./Agenda";
import './Agenda.css';

function Vf_agenda(){
    return(
        <div>
            <PrimarySearchAppBar/>
            <Agenda/>
        </div>
    )
}
export default Vf_agenda
