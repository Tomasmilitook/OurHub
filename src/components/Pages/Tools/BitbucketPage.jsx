import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/bitbucket.png"
import aboutlogo from "../../../images/controlversiones.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function BitbucketPage() {
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
        <PageLanguage install="Empezar" style="Bitbucket" title="Bitbucket" subtitle="Git Solution for Professional Teams" bd_color="#205081" about="Bitbucket" logo={logo}/>
        <Aboutpage
          des="Bitbucket es una solución de control de versiones basada en Git diseñada para equipos profesionales. Permite a los equipos alojar, revisar y colaborar en código de forma segura y escalable, todo en un solo lugar."
          logo={aboutlogo}
          li1="Alojamiento seguro y escalable"
          li2="Colaboración en equipo"
          li3="Gestión de flujos de trabajo"
          li4="Integración con herramientas de desarrollo"
          li5="Seguimiento de problemas"
          li6="Despliegue automatizado"
          p1="Bitbucket ofrece alojamiento seguro y escalable para repositorios Git, lo que permite a los equipos gestionar y colaborar en su código de manera efectiva, sin preocuparse por la infraestructura subyacente."
          p2="Facilita la colaboración en equipo mediante funciones como solicitudes de extracción, comentarios en línea y seguimiento de problemas. Los equipos pueden trabajar de manera eficiente y transparente en proyectos de cualquier tamaño."
          p3="La gestión de flujos de trabajo en Bitbucket permite a los equipos personalizar y automatizar sus procesos de desarrollo utilizando herramientas como ramas, ganchos de Git y flujos de trabajo de CI/CD."
          p4="Bitbucket se integra con una amplia gama de herramientas de desarrollo, incluidas IDE, sistemas de compilación, herramientas de monitoreo y más. Esto facilita la integración del control de versiones en el flujo de trabajo de desarrollo existente del equipo."
          p5="El seguimiento de problemas integrado en Bitbucket permite a los equipos rastrear, gestionar y priorizar problemas y solicitudes de extracción en un solo lugar, lo que facilita la colaboración y la comunicación entre los miembros del equipo."
          p6="Bitbucket ofrece capacidades de despliegue automatizado que permiten a los equipos implementar su código de manera rápida y confiable en entornos de producción, facilitando la entrega continua y la iteración rápida."
        />

        <Doc flag = "Empezar" text="Empezar en Bitbucket" bg="#205081" fbg="#ffffff" download="1" url = "https://bitbucket.org/account/signup/"/>

        <ResourcesPage language="Bitbucket"
          videosArray={[
            [null, "Bitbucket Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=0hXqZpqpP9U"],
            [null, "Bitbucket Crash Course", "Academind", "https://www.youtube.com/watch?v=WPqXP_kLzpo"],
            [null, "Mastering Bitbucket", "Fireship", "https://www.youtube.com/watch?v=ZzfHjytDceU"]
          ]}
        />
      </div>
    </div>
  );
}

export default BitbucketPage;
