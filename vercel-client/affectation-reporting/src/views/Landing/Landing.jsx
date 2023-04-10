import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import { leer } from "../../funtions/leer";
import { useState } from "react";
export const Landing = () => {
    const text = leer();
    const [string,setString]=useState(text);
    console.log(string);
    
    

    return (
        <div className={style.container}>
            <h1>{string.es.landing.welcome}</h1>
            <Link to='/home'><button className={style.btn}>HOME</button></Link>
        </div>
    )
}