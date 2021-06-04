import React, { Component } from "react";
import AdminSearchAppBar from "../page_accueil/AdminSearchAppBar"; 
import AjoutReservation from "./ajoutReservation";

export default function ajoutReservationAdmin (){
    return(
        <div>
            <AdminSearchAppBar />
            <AjoutReservation />
        </div>
    )
}