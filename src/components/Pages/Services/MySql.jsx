import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/MySql.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function MySQLPage() {
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
        <PageLanguage install="Empezar" style="MySQL" title="MySQL" subtitle="Database Management System" bd_color="#4479A1" about="MySQL" logo={logo}/>
        <Aboutpage
          des="MySQL es un sistema de gestión de bases de datos relacional de código abierto ampliamente utilizado. Es una opción popular para aplicaciones web y de servidor debido a su rendimiento, confiabilidad y facilidad de uso."
          logo={aboutlogo}
          li1="Gestión de bases de datos relacional"
          li2="Lenguaje de consulta estructurado (SQL)"
          li3="Escalabilidad y rendimiento"
          li4="Seguridad de datos"
          li5="Alta disponibilidad y tolerancia a fallos"
          li6="Compatibilidad con estándares"
          p1="MySQL es conocido por su capacidad para gestionar bases de datos relacionales de manera eficiente, lo que permite a los usuarios organizar y acceder a datos estructurados de forma rápida y segura."
          p2="Utiliza el lenguaje de consulta estructurado (SQL) como su lenguaje principal para realizar consultas, actualizaciones y administrar la base de datos. Esto hace que sea compatible con una amplia variedad de aplicaciones y herramientas que utilizan SQL."
          p3="MySQL es altamente escalable y puede manejar grandes volúmenes de datos y un alto número de conexiones simultáneas. Esto lo hace adecuado para aplicaciones web y de servidor que experimentan un crecimiento rápido."
          p4="Ofrece características de seguridad robustas para proteger los datos sensibles, incluyendo cifrado de datos, autenticación de usuarios, control de acceso y auditoría de registros."
          p5="MySQL proporciona opciones para configurar la alta disponibilidad y la tolerancia a fallos, lo que garantiza que las aplicaciones puedan seguir funcionando incluso en caso de fallo del servidor o de la base de datos."
          p6="Es compatible con estándares de la industria y se integra fácilmente con otras tecnologías y herramientas, lo que facilita su uso en una variedad de entornos y aplicaciones."
        />

        <Doc flag="Empezar" text="Empezar con MySQL" bg="#4479A1" fbg="#FFFFFF" download="1" url="https://www.mysql.com/downloads/"/>

        <ResourcesPage language="MySQL"
          videosArray={[
            [null, "MySQL Tutorial for Beginners", "Academind", "https://www.youtube.com/watch?v=7S_tz1z_5bA"],
            [null, "MySQL Crash Course", "Traversy Media", "https://www.youtube.com/watch?v=9ylj9NR0Lcg"],
            [null, "Mastering MySQL", "The Net Ninja", "https://www.youtube.com/watch?v=7S_tz1z_5bA"]
          ]}
        />
      </div>
    </div>
  );
}

export default MySQLPage;
