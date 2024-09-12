import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/oracle.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function OracleDBPage() {
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
        <PageLanguage install="Empezar" style="Oracle Database" title="Oracle Database" subtitle="Relational Database Management System" bd_color="#F80000" about="Oracle Database" logo={logo}/>
        <Aboutpage
          des="Oracle Database es un sistema de gestión de bases de datos relacional (RDBMS) desarrollado por Oracle Corporation. Es una de las soluciones de bases de datos más populares y ampliamente utilizadas en el mundo, utilizada por empresas de todos los tamaños y sectores."
          logo={aboutlogo}
          li1="Gestión de bases de datos relacionales"
          li2="Escalabilidad y rendimiento"
          li3="Seguridad de datos"
          li4="Alta disponibilidad y durabilidad"
          li5="Herramientas de administración avanzadas"
          li6="Integración con aplicaciones empresariales"
          p1="Oracle Database ofrece una solución completa para la gestión de bases de datos relacionales, permitiendo a las empresas almacenar, consultar y administrar grandes volúmenes de datos de manera eficiente y segura."
          p2="Ofrece escalabilidad y rendimiento excepcionales, con capacidades para manejar grandes cargas de trabajo y un alto número de transacciones simultáneas. Esto garantiza un acceso rápido a los datos y un rendimiento consistente para aplicaciones empresariales críticas."
          p3="Prioriza la seguridad de los datos, utilizando mecanismos de autenticación y autorización avanzados, cifrado de datos y otras medidas de seguridad para proteger la privacidad y la integridad de los datos almacenados en la base de datos."
          p4="Ofrece alta disponibilidad y durabilidad, con opciones de replicación de datos, recuperación ante desastres y copias de seguridad diseñadas para garantizar la continuidad del negocio y la integridad de los datos en caso de fallo."
          p5="Viene con herramientas de administración avanzadas, como Oracle Enterprise Manager, que permiten a los administradores de bases de datos supervisar, administrar y optimizar el rendimiento de la base de datos de manera eficiente."
          p6="Se integra fácilmente con aplicaciones empresariales y herramientas de desarrollo, como Oracle Application Express (APEX), Oracle Fusion Middleware y Oracle Developer Tools, lo que facilita su uso en entornos empresariales existentes."
        />

        <Doc flag="Empezar" text="Empezar con Oracle Database" bg="#F80000" fbg="#FFFFFF" download="1" url="https://www.oracle.com/database/technologies/"/>

        <ResourcesPage language="Oracle Database"
          videosArray={[
            [null, "Oracle Database Tutorial for Beginners", "edureka!", "https://www.youtube.com/watch?v=v8Rz1yFOk60"],
            [null, "Oracle Database Overview", "TechGumbo", "https://www.youtube.com/watch?v=fdIIJX2vXHE"],
            [null, "Mastering Oracle Database", "Oracle Learning Library", "https://www.youtube.com/watch?v=9yeOJLB_L50"]
          ]}
        />
      </div>
    </div>
  );
}

export default OracleDBPage;
