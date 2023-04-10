import style from "./Card.module.css";
export const Card = (props) => {
    const { id , name, age, location , handle } = props;
    const nameSplit = name.split(" ");
    const locationSplit = location.split(",");
    return (
        <div className={ id==="Id"? style.cardTop : style.card } >
            <h1>{id}</h1>
            <h1>{`${nameSplit[0]} ${nameSplit[2]?nameSplit[2]:""}`}</h1>
            <h1>{age}</h1>
            {id!=="Id"?<h1>{locationSplit[0].substring(0,4) + "," + locationSplit[1].substring(0,5)}</h1>:<h1>{location}</h1>}
            {id!=="Id"? <div><button onClick={()=>handle(id)}>DELETE</button></div>:<h1></h1>}
        </div>
    )
}