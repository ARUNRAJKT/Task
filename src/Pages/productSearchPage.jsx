import React from "react";
import Navbar from "../Components/navbar";
import Search from "../Components/productSearch";
export default function searchpage(){
    return(
        <React.Fragment>
            <Navbar/>
            <Search/>
        </React.Fragment>
    )
}