import React, { Component } from "react";
import UserSearchAppBar from "../page_accueil/UserSearchAppBar"; 
import AjoutReservation from "./ajoutReservation";

export default function ajoutReservationAdmin (){
    return(
        <div>
            <UserSearchAppBar />
            <AjoutReservation />
        </div>
    )
}