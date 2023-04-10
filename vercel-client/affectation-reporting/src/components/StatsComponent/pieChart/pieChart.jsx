import style from "../pieChart/pieChart.module.css";
import ReactEcharts from "echarts-for-react";
import { useState } from "react";
export const PieChart=({data,cantidad,handles})=>{
    const {handleCantidad,handleDataOne,handleDataTwo,handleDataThree,handleDataFour,handleOrderData}=handles;
    const[type,setType]=useState([]);

    console.log(data);

    const handleSelect = (event)=>{
      const value = event.target.value;
      type.includes(value)?setType([...type.filter(t=>t!==value)]):setType([...type,value]);
    }

    return(
    <div className={style.pieChartContainer}>
        {<div className={style.filtersAndSorts}>
          <div className={style.checkBoxContainer}>
            <div className={style.checkBoxConn}>
              <input type="checkbox" value={"Bar"} onClick={handleSelect}/><label>Diagrama de barras</label></div>
            <div className={style.checkBoxConn}>
              <input type="checkbox" value={"Pie"} onClick={handleSelect}/><label>Gráfico circular</label></div>
          </div>
          <div>
            <button onClick={()=>handleCantidad(-1)}> - </button> Quantity: {cantidad} <button onClick={()=>handleCantidad(1)}> + </button>
          </div>
          <button onClick={()=>handleDataOne("Affecteds by age","Years")}>Afectados por edad</button>
          <button onClick={()=>handleDataTwo("Affecteds by gender","")}>Afectados por genero</button>
          <button onClick={()=>handleDataThree("Affecteds by rh", "rh Factor")}>Afectados por Rh</button>
          <button onClick={()=>handleDataFour("Affecteds by distance", "meters")}>Afectados por Distancia</button>
          <button onClick={handleOrderData}>Order</button>
        </div>}
        <div className={style.global}>
        <div className={style.GraphContainer}>
          {type.includes("Pie")?<div className={style.ReactEchartsComp}>
          <ReactEcharts
            key={Date.now()}
            theme="dark"
            option = {{
              title: {
                text: 'Affecteds',
                subtext: data.subtext+" ("+data.nameSlice+") "+" - "+ data.order,
                left: 'center'
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: data.nameSlice,
                  type: 'pie',
                  radius: '50%',
                  data:data.store.slice(0,cantidad),
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            }}
            style={{ width: "60vw", height:"65vh" }}
          />
          </div>:<></>}
          <br />
          {type.includes("Bar")?(<div className={style.ReactEchartsComp}>
            <ReactEcharts
              key={Date.now(2)}
              option={{
                title: {
                  text: 'Affecteds',
                  subtext: data.subtext+" ("+data.nameSlice+") "+" - "+ data.order,
                  left: 'center'
                },
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                  orient: 'vertical',
                  left: 'left'
                },
                dataset: [
                  {
                    dimensions: data.store.length<1?["value","name"]: Object.keys(data.store[0]),
                    source: data.store.length<1?[[0,"Hola"]]:[...data.store.map((obj)=>Object.values(obj))].slice(0,cantidad),
                  },
                  {
                    transform: {
                      type: 'sort',
                      config: { dimension: 'value', order: data.order===""?"asc":data.order.toLowerCase()}
                    }
                  }
                ],
                xAxis: {
                  type: 'category',
                  axisLabel: { interval: 0, rotate: 30 }
                },
                yAxis: {},
                series: {
                  type: 'bar',
                  encode: { x: 'name', y: 'value' },
                  datasetIndex: 1
                }
              }}
              style={{ width: "60vw", height:"60vh"}}
            />
          </div>):<></>}
        </div>
        </div>
    </div>
    )
}