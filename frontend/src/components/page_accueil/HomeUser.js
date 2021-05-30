import React from "react";
import Footer from './Footer';
import Agenda from "./Agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";


function HomeUser() {
  return (
    <div>
          <PrimarySearchAppBar/>
          <div style={{overflow: "hidden"}}>
          <RessourceList />
          <FilterBar />
          <Agenda />
          </div>
          <Footer />
    </div>
  );
}

export default HomeUser;