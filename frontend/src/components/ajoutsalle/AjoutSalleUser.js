import React from "react";
import Footer from "../page_accueil/Footer";
import UserSearchAppBar from "../page_accueil/UserSearchAppBar";
import AjoutSalle from "./AjoutSalle";

export default function () {
    return(
        <div>
            <UserSearchAppBar />
            <AjoutSalle />
            <Footer />
        </div>
    )
}