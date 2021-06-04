import React from "react"; 
import UserSearchAppBar from "./page_accueil/UserSearchAppBar";
import User_account from "./User_account";
import UserNavBar from "./page_accueil/UserNavBar";
export default function (){
    return(
        <div>
            <UserNavBar />
            <User_account />
        </div>
    )
}
