import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/mongodb.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function MongoDBPage() {
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
        <PageLanguage install="Empezar" style="MongoDB" title="MongoDB" subtitle="Document-Oriented NoSQL Database" bd_color="#13AA52" about="MongoDB" logo={logo}/>
        <Aboutpage
          des="MongoDB es una base de datos NoSQL orientada a documentos que ofrece alta escalabilidad, rendimiento y flexibilidad. Es utilizado por empresas de todo el mundo para almacenar, consultar y analizar datos estructurados y no estructurados en aplicaciones web, móviles y de IoT."
          logo={aboutlogo}
          li1="Base de datos NoSQL orientada a documentos"
          li2="Escalabilidad y rendimiento"
          li3="Modelo de datos flexible"
          li4="Alta disponibilidad y durabilidad"
          li5="Consultas avanzadas y análisis de datos"
          li6="Integración con lenguajes de programación populares"
          p1="MongoDB es una base de datos NoSQL que utiliza un modelo de datos basado en documentos JSON, lo que permite a los usuarios almacenar y consultar datos de manera flexible y eficiente."
          p2="Ofrece escalabilidad y rendimiento excepcionales, con capacidades para manejar grandes volúmenes de datos y un alto número de solicitudes de lectura y escritura simultáneas. Esto garantiza un acceso rápido a los datos y un rendimiento consistente para aplicaciones en línea y móviles."
          p3="Proporciona un modelo de datos flexible que permite a los usuarios almacenar datos de forma dinámica, sin la necesidad de definir un esquema rígido. Esto facilita la evolución y adaptación de la base de datos a medida que cambian los requisitos de la aplicación."
          p4="Ofrece alta disponibilidad y durabilidad, con replicación de datos síncrona y asincrónica y opciones de almacenamiento diseñadas para resistir fallos de hardware y errores de red. Esto garantiza que los datos estén siempre disponibles y sean duraderos."
          p5="Permite realizar consultas avanzadas y análisis de datos mediante su lenguaje de consulta flexible y potente. Los usuarios pueden realizar consultas complejas, filtrar datos y realizar análisis en tiempo real para extraer información valiosa de sus datos."
          p6="Se integra fácilmente con lenguajes de programación populares, como JavaScript, Python y Java, mediante bibliotecas y controladores que facilitan el acceso y la manipulación de datos desde la aplicación."
        />

        <Doc flag="Empezar" text="Empezar con MongoDB" bg="#13AA52" fbg="#FFFFFF" download="1" url="https://www.mongodb.com/try/download/community"/>

        <ResourcesPage language="MongoDB"
          videosArray={[
            [null, "MongoDB Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=-56x56UppqQ"],
            [null, "MongoDB Crash Course", "Academind", "https://www.youtube.com/watch?v=PAhn3JYJ1uA"],
            [null, "Mastering MongoDB", "The Net Ninja", "https://www.youtube.com/watch?v=bx3--22DfXs"]
          ]}
        />
      </div>
    </div>
  );
}

export default MongoDBPage;
