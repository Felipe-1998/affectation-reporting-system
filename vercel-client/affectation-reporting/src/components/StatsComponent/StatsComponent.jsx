import { useState } from "react";
import { coordenadas } from "./ClaseStats/distancia";
import { PieChart } from "./pieChart/pieChart";
import style from "./StatsComponent.module.css";
export const StatsComponent = (props) => {
    const {affecteds} = props;
    const [level,setLevel]=useState(100);
    const [cantidad,setCantidad]=useState(1);
    const [data,setData]=useState({
        subtext:"",
        nameSlice:"",
        order:"",
        store:[],
        storeBar:[]
    });
    console.log(affecteds,"Hola");
    const handleDataOne = (subName,nameSlice) => {
        //Affecteds by age
        let objByAge = subName==="Affecteds by age"? affecteds.map((affected)=>{return {value:1, name:`${affected.age} years`}}):[];
        objByAge = objByAge.reduce((arrGroup, current) => {
            let thatItem = arrGroup.find(item => item.name == current.name)
            if (thatItem == undefined) arrGroup = [...arrGroup, {...current}]
            else {
                thatItem.value += current.value
            }
            return arrGroup
        }, []);

        const array = [...objByAge]
        setCantidad(array.length);
        setData({...data,store:array,subtext:subName,nameSlice:nameSlice});

    }

    const handleDataTwo = (subName,nameSlice) => {
        let objByGender = subName==="Affecteds by gender"? affecteds.map((affected)=>{return {value:1, name:affected.gender}}):[];
        objByGender = objByGender.reduce((arrGroup, current) => {
            let thatItem = arrGroup.find(item => item.name == current.name)
            if (thatItem == undefined) arrGroup = [...arrGroup, {...current}]
            else {
                thatItem.value += current.value
            }
            return arrGroup
        }, []);
        //
        const array = [...objByGender]
        setCantidad(array.length);
        setData({...data,store:array,subtext:subName,nameSlice:nameSlice});

    }

    const handleDataThree = (subName, nameSlice) => {
        let objByRh = subName==="Affecteds by rh"? affecteds.map((affected)=>{return {value:1, name:affected.RH}}):[];
        objByRh = objByRh.reduce((arrGroup, current) => {
            let thatItem = arrGroup.find(item => item.name == current.name)
            if (thatItem == undefined) arrGroup = [...arrGroup, {...current}]
            else {
                thatItem.value += current.value
            }
            return arrGroup
        }, []);
        //
        const array = [...objByRh]
        setCantidad(array.length);
        setData({...data,store:array,subtext:subName,nameSlice:nameSlice});
    }

    const handleDataFour = (subName,nameSlice) => {
        const central = ["3.424723","-76.463918"];
        const p1 = new coordenadas(central[0],central[1]);

        let objByDis = subName==="Affecteds by distance"? affecteds.map((affected)=>{
            const destino = affected.location.split(",");
            const p2 = new coordenadas(destino[0],destino[1]);
            const distancia = coordenadas.distancia(p1,p2);
            return {value:distancia, name:affected.name}
        }):[];

        objByDis = objByDis.reduce((arrGroup, current) => {
            let thatItem = arrGroup.find(item => item.name == current.name)
            if (thatItem == undefined) arrGroup = [...arrGroup, {...current}]
            else {
                thatItem.value += current.value
            }
            return arrGroup
        }, []);
        //
        const array = [...objByDis]
        setCantidad(array.length);
        setData({...data,store:array,subtext:subName,nameSlice:nameSlice});
    }

    const handleOrderData = () => {
        if(data.order==="DESC"){
            const obj = data.store.sort((a,b)=>a.value-b.value);
            return setData({...data,store:obj,order:"ASC"});
          }else{
            const obj = data.store.sort((a,b)=>b.value-a.value);
            return setData({...data,store:obj,order:"DESC"});
          }
    }

    const handleCantidad = (value) => {
        value = cantidad + value;
        value>=0 && value<=data.store.length?setCantidad(value):null
    }

    return(
        <div className={style.statsContainer}>
            {level&&level===100?<PieChart data={data} cantidad={cantidad} handles={{handleCantidad,handleDataOne,handleDataTwo,handleDataThree,handleDataFour,handleOrderData}} />:<></>}
        </div>
    )
}