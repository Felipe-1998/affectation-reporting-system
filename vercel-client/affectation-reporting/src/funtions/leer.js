import datos from "../assets/strings.json";

export const leer=()=>{
    
    const data = JSON.stringify(datos);
    const dataObj = JSON.parse(data)
    return dataObj;
}