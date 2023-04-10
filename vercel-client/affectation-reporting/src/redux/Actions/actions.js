import axios from "axios";

export const GET_AFFECTEDS = "GET_AFFECTEDS";
export const FILTER_BY_AGE = "FILTER_BY_AGE";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";

export const getAffecteds =()=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get("/");
            console.log(data, "ACTIONS");
            return dispatch({
                type:GET_AFFECTEDS,
                payload:data
            });
        } catch (error) {
            console.error(error);
        }

    }
}

export const deleteAffected = (id) =>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.delete(`/delete-affected/${id}`)
            console.log(data, "DELETE_ACTION");
        }catch(error){
            console.error(error);
        }        
    }    
}

//actions para usar en el reducer
export const sortByAge = (data) => {
    return{
        type:FILTER_BY_AGE,
        payload:data
    };
}

export const filterByGender = (data) => {
    return{
        type:FILTER_BY_GENDER,
        payload:data
    }
}