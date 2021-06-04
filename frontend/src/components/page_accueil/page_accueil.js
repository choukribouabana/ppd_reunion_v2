import React from "react";
import Footer from './Footer';
import Agenda from "../agenda/Vf_agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import AdminSearchAppBar from "./AdminSearchAppBar";


function PageAccueil() {
    const isAdmin = true;
    return (
        <div>
            <Agenda />
            <Footer />
        </div>
    );
}

export default PageAccueil;
