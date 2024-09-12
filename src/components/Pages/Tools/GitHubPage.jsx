import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/github.png"
import aboutlogo from "../../../images/controlversiones.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function GitHubPage() {
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
        <PageLanguage install="Empezar" style="GitHub" title="GitHub" subtitle="Version Control Platform" bd_color="#4078c0" about="GitHub" logo={logo}/>
        <Aboutpage
          des="GitHub es una plataforma de desarrollo colaborativo que permite a los equipos y desarrolladores individuales alojar y revisar código, gestionar proyectos y construir software junto con millones de otros usuarios."
          logo={aboutlogo}
          li1="Control de versiones distribuido"
          li2="Colaboración en equipo"
          li3="Seguimiento de problemas y solicitudes de extracción"
          li4="Gestión de proyectos"
          li5="Integración continua"
          li6="Despliegue automatizado"
          p1="GitHub utiliza un sistema de control de versiones distribuido basado en Git, lo que permite a los desarrolladores realizar un seguimiento de los cambios en su código y colaborar de manera eficiente en proyectos de software de cualquier tamaño."
          p2="Facilita la colaboración en equipo mediante funciones como solicitudes de extracción, que permiten a los desarrolladores revisar y discutir los cambios antes de fusionarlos en el código base."
          p3="Los problemas y las solicitudes de extracción pueden ser rastreados y discutidos en GitHub, lo que facilita la gestión del flujo de trabajo del proyecto y la comunicación entre los miembros del equipo."
          p4="GitHub ofrece herramientas integradas para la gestión de proyectos, que incluyen tableros Kanban, seguimiento de problemas, integración con herramientas de desarrollo y más. Estas herramientas ayudan a los equipos a organizar y priorizar su trabajo de manera efectiva."
          p5="La integración continua en GitHub permite a los equipos automatizar las pruebas y la compilación de su código a medida que se realizan cambios, lo que garantiza la calidad del software y acelera el proceso de desarrollo."
          p6="GitHub proporciona capacidades de despliegue automatizado que permiten a los equipos implementar su software de manera rápida y confiable en entornos de producción, lo que facilita la entrega continua y la iteración rápida."
        />

        <Doc flag = "Empezar" text="Empezar en GitHub" bg="#4078c0" fbg="#ffffff" download="1" url = "https://github.com/join"/>

        <ResourcesPage language="GitHub"
          videosArray={[
            [null, "GitHub Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=0hXqZpqpP9U"],
            [null, "GitHub Crash Course", "Academind", "https://www.youtube.com/watch?v=WPqXP_kLzpo"],
            [null, "Mastering GitHub", "Fireship", "https://www.youtube.com/watch?v=ZzfHjytDceU"]
          ]}
        />
      </div>
    </div>
  );
}

export default GitHubPage;

