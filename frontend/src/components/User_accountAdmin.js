import React from "react";
import AdminSearchAppBar from "./page_accueil/AdminSearchAppBar";
import User_account from "./User_account";
import PrimarySearchAppBar from "./page_accueil/PrimarySearchAppBar";

export default function () {
    return(
        <div>
            <PrimarySearchAppBar/>
            <User_account />
        </div>
    )
}
