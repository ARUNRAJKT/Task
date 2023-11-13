import React from "react";
import Suggest from "../Components/productsuggest";
import Navbar from "../Components/navbar";
export default function suggestpage(){
    return(
        <React.Fragment>
            <Navbar/>
            <Suggest/>
        </React.Fragment>
    )
  
}