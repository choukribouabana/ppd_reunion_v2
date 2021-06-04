import React from "react";
import Footer from './Footer';
import Agenda from "../agenda/Vf_agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import UserSearchAppBar from "./UserSearchAppBar";
import UserNavBar from "./UserNavBar";


function HomeUser() {
  return (
    <div>
        {/*<div style={{overflow: "hidden"}}>
          <RessourceList />
          <FilterBar />
          </div>*/}
            <UserNavBar />
            <Agenda/>
          <Footer />
    </div>
  );
}

export default HomeUser;
