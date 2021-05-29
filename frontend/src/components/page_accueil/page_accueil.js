import React from "react";
import Footer from './Footer';
import Agenda from "./Agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import AdminSearchAppBar from "./AdminSearchAppBar";


function PageAccueil() {
    const isAdmin = true;
    return (
        <div>
            {isAdmin== true ?
                <PrimarySearchAppBar />
                : <AdminSearchAppBar/>
            }
            <div style={{overflow: "hidden"}}>
                <RessourceList />
                <FilterBar />
                <Agenda />
            </div>
            <Footer />
        </div>
    );
}

export default PageAccueil;
