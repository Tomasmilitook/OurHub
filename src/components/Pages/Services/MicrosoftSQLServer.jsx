import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/MicrosoftSql.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function MicrosoftSqlServerPage() {
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
        <PageLanguage install="Empezar" style="Microsoft SQL Server" title="Microsoft SQL Server" subtitle="Relational Database Management System" bd_color="#CC2927" about="Microsoft SQL Server" logo={logo}/>
        <Aboutpage
          des="Microsoft SQL Server es un sistema de gestión de bases de datos relacionales (RDBMS) desarrollado por Microsoft. Es una solución integral para el almacenamiento, la gestión y el análisis de datos estructurados y relacionales en aplicaciones empresariales y web."
          logo={aboutlogo}
          li1="Gestión de bases de datos relacionales"
          li2="Escalabilidad y rendimiento"
          li3="Seguridad de datos"
          li4="Integración con plataformas de Microsoft"
          li5="Análisis de datos"
          li6="Herramientas de administración avanzadas"
          p1="Microsoft SQL Server ofrece una solución completa para la gestión de bases de datos relacionales, permitiendo a las empresas almacenar, consultar y administrar grandes volúmenes de datos de manera eficiente y segura."
          p2="Ofrece escalabilidad y rendimiento excepcionales, con capacidades para manejar cargas de trabajo de alto rendimiento y grandes volúmenes de datos. Esto garantiza un acceso rápido a los datos y un rendimiento consistente para aplicaciones empresariales críticas."
          p3="Prioriza la seguridad de los datos, utilizando mecanismos de autenticación y autorización avanzados, cifrado de datos y otras medidas de seguridad para proteger la privacidad y la integridad de los datos almacenados en la base de datos."
          p4="Se integra estrechamente con otras plataformas y servicios de Microsoft, como Azure, .NET Framework y Power BI, lo que facilita su implementación en entornos de Microsoft y su uso junto con otras herramientas y servicios de Microsoft."
          p5="Ofrece capacidades avanzadas de análisis de datos, incluyendo soporte para consultas complejas, análisis de datos en tiempo real y generación de informes. Esto permite a las empresas extraer información valiosa de sus datos y tomar decisiones informadas."
          p6="Viene con herramientas de administración avanzadas, como SQL Server Management Studio (SSMS), que permiten a los administradores de bases de datos supervisar, administrar y optimizar el rendimiento de la base de datos de manera eficiente."
        />

        <Doc flag="Empezar" text="Empezar con Microsoft SQL Server" bg="#CC2927" fbg="#FFFFFF" download="1" url="https://www.microsoft.com/en-us/sql-server/get-started/"/>

        <ResourcesPage language="Microsoft SQL Server"
          videosArray={[
            [null, "Microsoft SQL Server Tutorial for Beginners", "edureka!", "https://www.youtube.com/watch?v=fmj4es0hq4o"],
            [null, "Microsoft SQL Server Overview", "TechGumbo", "https://www.youtube.com/watch?v=F3fBXPVuTT0"],
            [null, "Mastering Microsoft SQL Server", "Learn with Me", "https://www.youtube.com/watch?v=nCKRL_jECwY"]
          ]}
        />
      </div>
    </div>
  );
}

export default MicrosoftSqlServerPage;
