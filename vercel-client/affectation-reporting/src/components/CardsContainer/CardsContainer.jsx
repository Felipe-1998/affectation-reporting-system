import { Card } from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAffected, getAffecteds } from "../../redux/Actions/actions";
import { useEffect } from "react";
import FileExcelGenerator from "../FileExcelGenerator/fileExcelGenerator";
import { SortByAge } from "../FiltersAndSorts/SortByAge";
import { FilterByGender } from "../FiltersAndSorts/FilterByGender";
import { Error_404 } from "..";
import swal from "sweetalert";
export const CardsContainer = () => {
    const affecteds = useSelector((state)=>state.aux_affecteds);
    const keys = Object.keys(affecteds);
    const values = Object.values(affecteds);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAffecteds());
    },[dispatch]);


    const handleDelete = (index) => {
        console.log(keys[index]);
        swal(`Acabas de eliminar el registro N° ${index}`);
        dispatch(deleteAffected(keys[index]));
        dispatch(getAffecteds());
    }

    return(
        <div className={style.container}>
            <div className={style.controllers}>
                <FilterByGender data={values}/>
                <SortByAge data={values}/>
                <FileExcelGenerator dataObject={values} listName="reportes" />
            </div>
            <hr/>
            <Card id="Id" name="Nombre" age="Age" location="Location"/>
            {!values.length==0 ? <>{values.map((value, index)=>(
                <div key={keys[index]}>
                    <Card
                        id={index}
                        name={value.name}
                        age={value.age}
                        location={value.location}
                        handle={handleDelete}
                    />
                </div>
            ))}</> : <Error_404/>}
        </div>
    )
}