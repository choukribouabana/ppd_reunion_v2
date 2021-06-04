import React from "react";
import AdminSearchAppBar from "../page_accueil/AdminSearchAppBar";
import Footer from "../page_accueil/Footer";
import AjoutSalle from "./AjoutSalle";

export default function () {
    return(
        <div>
            <AdminSearchAppBar />
            <AjoutSalle />
            <Footer />
        </div>
    )
}