import { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterByGender, getAffecteds } from "../../redux/Actions/actions";
import style from "./FiltersAndSorts.module.css";
export const FilterByGender = (props) => {
    const {data} = props;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAffecteds());
    },[dispatch]);

    const handleChange = (event) => {
        const {value}=event.target;
        let dataFilter = data;
        if(value==="M"){
            dataFilter = data.filter((obj)=>obj.gender===value);
        }else if(value==="F"){
            dataFilter = data.filter((obj)=>obj.gender===value);
        }else if(value==="O"){
            dataFilter = data.filter((obj)=> obj.gender===value);
        }else{
            dispatch(getAffecteds());
        }
        dispatch(filterByGender(dataFilter));
    }

    return(
        <div className={style.filterByGender}>
            <FaFilter/>
            <span>Filter By Gender: </span>
            <select name="" id="" onChange={handleChange} className={style.select}>
                <option value="All">All</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
            </select>

        </div>
    )

}