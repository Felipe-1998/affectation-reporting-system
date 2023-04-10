import { useEffect } from "react";
import { FaSort } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getAffecteds, sortByAge } from "../../redux/Actions/actions";
import style from "./FiltersAndSorts.module.css";

export const SortByAge = (props) => {
    
    const {data} = props; 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAffecteds())
    },[dispatch])

    const handleChange = (event) => {
        const {value} = event.target;
        let dataFilter = data;
        if(value==="minAge"){
            dataFilter=dataFilter.sort((a,b)=>a.age-b.age);
        }else if(value==="maxAge"){
            dataFilter=dataFilter.sort((a,b)=>b.age-a.age);
        }else{
            dispatch(getAffecteds())
            dataFilter=dataFilter;
        }
        console.log(dataFilter,"hola");
        dispatch(sortByAge(dataFilter));
    }

    return(
        <div className={style.container}>
            <FaSort/>
            <span>Sort by age: </span>
            <select className={style.select} onChange={handleChange} name="" id="">
                <option value="default">Default</option>
                <option value="minAge">Min Age</option>
                <option value="maxAge">Max Age</option>
            </select>
        </div>
    )
}