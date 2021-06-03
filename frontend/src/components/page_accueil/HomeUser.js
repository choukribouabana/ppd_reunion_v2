import React from "react";
import Footer from './Footer';
import Agenda from "./Agenda";
import RessourceList from "./RessourceList";
import FilterBar from "./FilterBar";
import UserSearchAppBar from "./UserSearchAppBar";


function HomeUser() {
  return (
    <div>
          <UserSearchAppBar />
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
