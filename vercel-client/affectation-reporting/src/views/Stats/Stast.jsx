import style from "./Stast.module.css"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { getAffecteds } from "../../redux/Actions/actions";
import { StatsComponent } from "../../components";
export const Stast = () => {

    const dispatch = useDispatch();
    const affecteds = useSelector((state)=> state.affecteds);
    const data_ids = Object.keys(affecteds);
    const data = Object.values(affecteds);

    useEffect(()=>{
        dispatch(getAffecteds());
    },[]);

    return(
        <div className={style.containe}>
            <StatsComponent affecteds={data}/>
        </div>
    )
}