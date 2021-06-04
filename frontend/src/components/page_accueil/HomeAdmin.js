import React from "react";
import Footer from './Footer';
import Agenda from "../agenda/Vf_agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import AdminSearchAppBar from "./AdminSearchAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

function HomeAdmin() {
  return (
    <div>
        {/*<div style={{overflow: "hidden"}}>
          <RessourceList />
          <FilterBar />

          </div>*/}
            <PrimarySearchAppBar />
            <Agenda/>
          <Footer />
    </div>
  );
}

export default HomeAdmin;
