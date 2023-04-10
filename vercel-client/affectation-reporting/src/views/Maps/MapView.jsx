import { useEffect, useState } from "react"
import { Circle, LayerGroup, LayersControl, MapContainer, Marker, Polygon, Polyline, Popup, TileLayer } from "react-leaflet"
import style from "./MapView.module.css";
import './react-leaflet.css';
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from "react-redux";
import { getAffecteds } from "../../redux/Actions/actions";
import { MarkerIcon } from "./Markert-Icon";


export const MapView = () => {
    const dispatch = useDispatch();
    const affecteds = useSelector((state)=>state.affecteds);
    const affectedsData = Object.values(affecteds);
    let polyline = affectedsData.map((obj)=>obj.location.split(",")).sort((a,b)=> b[0]-a[0]);
    const triangle = polyline.slice(0,3);
    const triagleBig = polyline.splice(1,polyline.length-1);
    let latitudMedia = affectedsData.length>0 && (affectedsData.map((obj)=>Number(obj.location.split(",")[0])).reduce((a,b)=>a+b))/affectedsData.length;
    let longitudMedia =affectedsData.length>0 && (affectedsData.map((obj)=>Number(obj.location.split(",")[1])).reduce((a,b)=>a+b))/affectedsData.length;
    console.log(latitudMedia, longitudMedia);
    const [state, setState]=useState({
        currentLocation:[[ "3.4293462", "-76.4692499" ]],
        zoom:12,
    });


    const funcionInit = () => {
        const onUbicacionConcedida = ubicacion => {
            console.log("Tengo la ubicación: ", ubicacion.coords);
            setState({
                ...state,
                currentLocation:[
                    [
                        ubicacion.coords.latitude.toString(),
                        ubicacion.coords.longitude.toString()
                    ]]})

        }

        navigator.geolocation.getCurrentPosition(onUbicacionConcedida);
    }
    useEffect(()=>{ 
        dispatch(getAffecteds()); 
    },[dispatch]);

    const handleClick=(name)=>{
        console.log(name);
    }

    console.log(state);
    return(
        <div className={style.mapContainer} onClick={funcionInit}>
            <MapContainer center={state.currentLocation[0]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution={`© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors`}
                />
                <LayersControl position="topright">
                    <LayersControl.Overlay name="Mi ubicación   ">
                        <Marker position={state.currentLocation[0]} icon={MarkerIcon}>
                            <Popup className={style.pre}>
                                <pre>
                                    Lat: {state.currentLocation[0][0].substring(0,7)}, 
                                    Long: {state.currentLocation[0][1].substring(0,7)},
                                    name:{"Your ubication"}
                                </pre>
                            </Popup>
                        </Marker>
                    </LayersControl.Overlay>
                  
                    <LayersControl.Overlay name="radio de 2km">
                        <Circle center={state.currentLocation[0]} pathOptions={{color:"blue"}} radius={2000}/>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Afectados">
                        <LayerGroup>
                        {affectedsData.map((currentLocation,index)=>(
                            // console.log(currentLocation.location, index)
                            <div key={index} onClick={()=>handleClick(currentLocation.name)}>
                                <Marker position={currentLocation.location.split(",")} icon={MarkerIcon}>
                                    <Popup className={style.pre}>
                                        <pre>
                                            Latitude: {currentLocation.location.split(",")[0]}, 
                                            Longitude: {currentLocation.location.split(",")[1]},
                                            name: {currentLocation.name}
                                        </pre> 
                                    </Popup>
                                </Marker>
                            </div>
                        ))}
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Zona afectada">
                        <Polygon pathOptions={{color:"red"}} positions={triagleBig}/>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Area radial afectada">
                        <Circle center={[latitudMedia,longitudMedia]} pathOptions={{color:"green"}} radius={11000}/>
                    </LayersControl.Overlay>
                </LayersControl>
                
                <Polyline pathOptions={{color:"green"}} positions={polyline}/>
                <Polygon pathOptions={{color:"yellow"}} positions={triangle}/>
                

            </MapContainer>
        </div>
    )
}
