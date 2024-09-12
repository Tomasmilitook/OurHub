import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/DynamoDB.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function DynamoDBPage() {
  function load() {
    setTimeout(() => {
      const inicio = document.querySelector(".ocultar");
      inicio.classList.add("mostrar");
    }, 500);
  }
  load(); 
  return (
    <div className='ocultar'>
      <div>
        <PageLanguage install="Empezar" style="Amazon DynamoDB" title="Amazon DynamoDB" subtitle="Fully Managed NoSQL Database Service" bd_color="#4053D6" about="Amazon DynamoDB" logo={logo}/>
        <Aboutpage
          des="Amazon DynamoDB es un servicio de base de datos NoSQL totalmente gestionado y escalable. Es utilizado por empresas de todo el mundo para almacenar y recuperar datos de manera rápida y escalable en aplicaciones web, móviles y de IoT."
          logo={aboutlogo}
          li1="Base de datos NoSQL totalmente gestionada"
          li2="Escalabilidad automática"
          li3="Rendimiento rápido y predecible"
          li4="Modelo de datos flexible"
          li5="Alta disponibilidad y durabilidad"
          li6="Facilidad de integración"
          p1="Amazon DynamoDB proporciona una solución de base de datos NoSQL totalmente gestionada, que permite a los usuarios almacenar y recuperar grandes volúmenes de datos de manera rápida y escalable en aplicaciones web, móviles y de IoT."
          p2="Ofrece escalabilidad automática, lo que significa que puede manejar cualquier carga de trabajo, desde unas pocas solicitudes por segundo hasta millones de solicitudes por segundo, sin necesidad de configuración manual. Esto permite a las aplicaciones escalar sin problemas para satisfacer la demanda."
          p3="Proporciona un rendimiento rápido y predecible a cualquier escala, con tiempos de respuesta de milisegundos para operaciones de lectura y escritura. Esto garantiza una experiencia de usuario rápida y receptiva para aplicaciones en línea y móviles."
          p4="Utiliza un modelo de datos flexible basado en documentos JSON, que permite a los usuarios almacenar y consultar datos de manera flexible según sus necesidades. Esto es especialmente útil para aplicaciones con esquemas de datos dinámicos o cambiantes."
          p5="Ofrece alta disponibilidad y durabilidad, con replicación de datos síncrona y asincrónica en múltiples zonas de disponibilidad y copias de seguridad continuas. Esto garantiza que los datos estén siempre disponibles y sean duraderos incluso en caso de fallo de hardware o de red."
          p6="Es fácil de integrar con otras herramientas y servicios de AWS, como AWS Lambda, Amazon API Gateway y Amazon S3, lo que permite a los usuarios construir aplicaciones escalables y sin servidor de manera rápida y eficiente."
        />

        <Doc flag="Empezar" text="Empezar con Amazon DynamoDB" bg="#4053D6" fbg="#FFFFFF" download="1" url="https://aws.amazon.com/dynamodb/getting-started/"/>

        <ResourcesPage language="Amazon DynamoDB"
          videosArray={[
            [null, "Amazon DynamoDB Tutorial for Beginners", "Academind", "https://www.youtube.com/watch?v=DIQVJqiSUkE"],
            [null, "Amazon DynamoDB Overview", "edureka!", "https://www.youtube.com/watch?v=Of0rAT3G20w"],
            [null, "Mastering Amazon DynamoDB", "AWS Online Tech Talks", "https://www.youtube.com/watch?v=6yqfmXiZTlM"]
          ]}
        />
      </div>
    </div>
  );
}

export default DynamoDBPage;
