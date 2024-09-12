import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/Cassandra.webp"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function CassandraPage() {
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
        <PageLanguage install="Empezar" style="Apache Cassandra" title="Apache Cassandra" subtitle="Distributed NoSQL Database Management System" bd_color="#1287B1" about="Apache Cassandra" logo={logo}/>
        <Aboutpage
          des="Apache Cassandra es un sistema de gestión de bases de datos NoSQL distribuido y altamente escalable. Es utilizado por empresas de todo el mundo para gestionar grandes volúmenes de datos de forma distribuida y tolerante a fallos."
          logo={aboutlogo}
          li1="Base de datos NoSQL distribuida"
          li2="Escalabilidad lineal"
          li3="Alta disponibilidad y tolerancia a fallos"
          li4="Modelo de datos flexible"
          li5="Rendimiento y velocidad"
          li6="Facilidad de administración"
          p1="Apache Cassandra proporciona una solución de base de datos NoSQL distribuida, que permite a los usuarios almacenar y recuperar grandes volúmenes de datos de forma distribuida en múltiples nodos."
          p2="Ofrece escalabilidad lineal, lo que significa que puede manejar un aumento en la carga de trabajo añadiendo simplemente más nodos al clúster. Esto hace que sea ideal para aplicaciones que necesitan escalar horizontalmente para soportar un crecimiento rápido."
          p3="Proporciona alta disponibilidad y tolerancia a fallos, con redundancia de datos a través de múltiples nodos y opciones de replicación configurables. Esto garantiza que los datos estén siempre disponibles incluso en caso de fallo de hardware o de red."
          p4="Cassandra utiliza un modelo de datos flexible basado en columnas, que permite a los usuarios almacenar y recuperar datos de manera eficiente según sus necesidades. Esto es especialmente útil para aplicaciones con requisitos de acceso rápido a datos estructurados y no estructurados."
          p5="Ofrece un rendimiento y velocidad excepcionales, con tiempos de respuesta bajos incluso con grandes volúmenes de datos y cargas de trabajo intensivas. Esto lo hace adecuado para aplicaciones donde el rendimiento es crítico, como aplicaciones web de alta velocidad y análisis en tiempo real."
          p6="Es fácil de administrar, con herramientas de administración intuitivas y capacidades de monitoreo que permiten a los usuarios supervisar y gestionar su clúster de Cassandra de manera eficiente."
        />

        <Doc flag="Empezar" text="Empezar con Apache Cassandra" bg="#1287B1" fbg="#FFFFFF" download="1" url="https://cassandra.apache.org/doc/latest/getting_started/"/>

        <ResourcesPage language="Apache Cassandra"
          videosArray={[
            [null, "Apache Cassandra Tutorial for Beginners", "Academind", "https://www.youtube.com/watch?v=HbZ6hZ3N6P8"],
            [null, "Apache Cassandra Overview", "edureka!", "https://www.youtube.com/watch?v=LIdAup-Jc1I"],
            [null, "Mastering Apache Cassandra", "Simplilearn", "https://www.youtube.com/watch?v=pxykYm9VwJ4"]
          ]}
        />
      </div>
    </div>
  );
}

export default CassandraPage;
