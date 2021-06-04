import React from "react";
import Footer from './Footer';
import Agenda from "../agenda/Vf_agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import AdminSearchAppBar from "./AdminSearchAppBar";

function HomeAdmin() {
  return (
    <div>
          <AdminSearchAppBar />
        {/*<div style={{overflow: "hidden"}}>
          <RessourceList />
          <FilterBar />

          </div>*/}
            <Agenda/>
          <Footer />
    </div>
  );
}

export default HomeAdmin;
