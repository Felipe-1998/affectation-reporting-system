import style from "./About.module.css";
import image from "../../assets/about_image.jpeg";
import arbol from "../../assets/arbol_problemas.jpeg";
import { Link } from "react-router-dom";
export const About = () => {

    const ObjUrls = { 
        cruzRoja: {
            image:"https://elordenmundial.com/wp-content/uploads/2022/05/Que-es-la-Cruz-Roja-y-como-brinda-ayuda-humanitaria-en-el-mundo.png",
            url:"https://www.cruzrojacolombiana.org/"
        },
        defensaCivil:{
            image:"https://seeklogo.com/images/D/defensa-civil-colombiana-logotipo-nuevo-logo-77F9660C5D-seeklogo.com.png",
            url:"https://www.defensacivil.gov.co/"
        },
        UNGRD:{
            image:"https://pbs.twimg.com/media/DS0wTDvWkAYVq1b.jpg:large",
            url:"https://portal.gestiondelriesgo.gov.co/"
        }
    }



    return(
        <div className={style.container}>
            <div>
                <h1>SANTIAGO DE CALI RESILIENTE</h1>
                <p>
                    La resiliencia urbana se puede definir como la capacidad de las personas,  
                    las instituciones y los sistemas que componen una ciudad para sobrevivir, 
                    adaptarse y desarrollarse sin importar a los eventos que se enfrenten.
                </p>
            </div>
            <div className={style.image_events}>
                <img src={image} alt="Eventos-urbanos"/>
            </div>
            <div>
                <h1>PROBLEMÁTICA</h1>
                <p>
                    La ciudad de Santiago de Cali se encuentra ubicada en una zona de alto riesgo sísmico, 
                    por lo tanto en un sismo de gran magnitud la ciudad se puede ver afectada por:
                </p>
                <ul>
                    <li>Daños en la red eléctrica.</li>
                    <li>Daños en la infraestructura de telecomunicaciones ( Antenas, Fibra óptica y fuentes de respaldo)</li>
                    <li>Inestabilidad de los sistemas de telecomunicaciones.</li>
                    <li>Saturación de servicios de telecomunicaciones.</li>
                </ul>
            </div>
            <div className={style.image_events}>
                <img src={arbol} alt="Arbol de problema"/>
            </div>
            <div>
                <h1>OBJETIVO GENERAL</h1>
                <p>Desarrollar un Sistema de reporte de afectaciones en situaciones de emergencia catastrófica, 
                    como soporte a organismos de rescate ante la desaparición de los mecanismos normales de comunicación.</p>
                <hr />
            </div>
            <div className={style.objEsp}>
                <h1>OBJETIVOS ESPECÍFICOS</h1>
                <h2>1</h2>
                <p>
                    Determinar la información más importante que requieren los organismos de rescate para la
                    atención oportuna y pertinente de emergencias catastróficas.</p>
            </div>
            <div>
                <div className={style.logos}>
                    <Link to={ObjUrls.cruzRoja.url}><img src={ObjUrls.cruzRoja.image} alt="cruz roja" width={250}/></Link>
                    <Link to={ObjUrls.defensaCivil.url}><img src={ObjUrls.defensaCivil.image} alt="cruz roja" width={200} /></Link>
                    <Link to={ObjUrls.UNGRD.url}><img src={ObjUrls.UNGRD.image} alt="cruz roja" width={250} /></Link>
                </div>
                <br />
                <hr />
            </div>
            <div className={style.objEsp}>
                <h2>2</h2>
                <p>
                    Determinar las alternativas que puedan ser usadas para la comunicación entre dispositivos ante la ausencia de infraestructura
                    básica de telecomunicaciones como la red celular e internet.
                </p>
                <hr />
                <h2>3</h2>
                <p>
                    Desarrollar un servicio que permita trasmitir información de afectaciones por medio de dispositivos móviles hasta llegar a un 
                    dispositivo con conexión a internet o red celular.
                </p>
                <hr />
                <h2>4</h2>
                <p>
                    Desarrollar un servicio que permita trasmitir información de afectaciones por medio de dispositivos móviles hasta llegar a un 
                    dispositivo con conexión a internet o red celular.
                </p>
            </div>
            <hr />
            <a href="https://drive.google.com/file/d/17AIKy3lu7quF9caMFf1N1l1hb8DkFcJB/view?usp=sharing" download="app-debug.apk"> Download Here Final Doc </a>
            <hr />
            <a href="https://drive.google.com/file/d/17AIKy3lu7quF9caMFf1N1l1hb8DkFcJB/view?usp=sharing" download="app-debug.apk"> Download Here APK </a>
        </div>
    )
}