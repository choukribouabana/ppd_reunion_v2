import React from "react";
import Footer from './Footer';
import Agenda from "../agenda/Vf_agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import UserSearchAppBar from "./UserSearchAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";


function HomeUser() {
  return (
    <div>
          <UserSearchAppBar />
        {/*<div style={{overflow: "hidden"}}>
          <RessourceList />
          <FilterBar />
          </div>*/}
            <Agenda/>
          <Footer />
    </div>
  );
}

export default HomeUser;
