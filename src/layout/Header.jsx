import React from "react";
import { NavLink } from "react-router-dom";

function Home(){

    return(
        <>
     <NavLink to="/">Home</NavLink>
     <NavLink to="/about">About</NavLink>
     <NavLink to="/contact">contact</NavLink>
     <NavLink to="/login">login</NavLink>
        </>
    )
}
export default Home