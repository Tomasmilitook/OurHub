import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/postgresql.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function PostgreSQLPage() {
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
        <PageLanguage install="Empezar" style="PostgreSQL" title="PostgreSQL" subtitle="Relational Database Management System" bd_color="#336791" about="PostgreSQL" logo={logo}/>
        <Aboutpage
          des="PostgreSQL es un sistema de gestión de bases de datos relacional de código abierto y gratuito. Conocido por su confiabilidad, escalabilidad y características avanzadas, PostgreSQL es utilizado por empresas de todo el mundo para almacenar, consultar y administrar datos de manera eficiente."
          logo={aboutlogo}
          li1="Gestión de bases de datos relacionales"
          li2="Escalabilidad y rendimiento"
          li3="Seguridad de datos"
          li4="Características avanzadas"
          li5="Compatibilidad con SQL"
          li6="Comunidad activa y soporte"
          p1="PostgreSQL ofrece una solución completa para la gestión de bases de datos relacionales, permitiendo a las empresas almacenar, consultar y administrar grandes volúmenes de datos de manera eficiente y segura."
          p2="Ofrece escalabilidad y rendimiento excepcionales, con capacidades para manejar grandes cargas de trabajo y un alto número de transacciones simultáneas. Esto garantiza un acceso rápido a los datos y un rendimiento consistente para aplicaciones críticas."
          p3="Prioriza la seguridad de los datos, utilizando mecanismos de autenticación y autorización avanzados, cifrado de datos y otras medidas de seguridad para proteger la privacidad y la integridad de los datos almacenados en la base de datos."
          p4="Ofrece características avanzadas, como soporte para procedimientos almacenados, disparadores, transacciones ACID, replicación y particionamiento de datos, que permiten a los usuarios crear aplicaciones robustas y escalables."
          p5="Es compatible con SQL estándar, lo que facilita la migración de aplicaciones existentes y la integración con otras herramientas y servicios que utilizan SQL como lenguaje de consulta."
          p6="Cuenta con una comunidad activa de desarrolladores y usuarios que proporcionan soporte, contribuyen al desarrollo del software y mantienen una amplia documentación y recursos en línea."
        />

        <Doc flag="Empezar" text="Empezar con PostgreSQL" bg="#336791" fbg="#FFFFFF" download="1" url="https://www.postgresql.org/download/"/>

        <ResourcesPage language="PostgreSQL"
          videosArray={[
            [null, "PostgreSQL Tutorial for Beginners", "edureka!", "https://www.youtube.com/watch?v=qw--VYLpxG4"],
            [null, "PostgreSQL Overview", "Tech with Tim", "https://www.youtube.com/watch?v=qw--VYLpxG4"],
            [null, "Mastering PostgreSQL", "The Net Ninja", "https://www.youtube.com/watch?v=qw--VYLpxG4"]
          ]}
        />
      </div>
    </div>
  );
}

export default PostgreSQLPage;
