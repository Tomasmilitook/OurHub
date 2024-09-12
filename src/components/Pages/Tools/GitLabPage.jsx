import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/gitlab.png"
import aboutlogo from "../../../images/controlversiones.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function GitLabPage() {
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
        <PageLanguage install="Empezar" style="GitLab" title="GitLab" subtitle="DevOps Platform" bd_color="#FC6D26" about="GitLab" logo={logo}/>
        <Aboutpage
          des="GitLab es una plataforma de DevOps completa que permite a los equipos colaborar y trabajar en proyectos de software desde la planificación hasta el despliegue y más allá. Ofrece un conjunto integrado de herramientas para la gestión del ciclo de vida de las aplicaciones."
          logo={aboutlogo}
          li1="Gestión del ciclo de vida de las aplicaciones"
          li2="Colaboración en equipo"
          li3="Integración continua y entrega continua (CI/CD)"
          li4="Seguridad del código"
          li5="Monitoreo del rendimiento"
          li6="Automatización de la infraestructura"
          p1="GitLab abarca todo el ciclo de vida de las aplicaciones, desde la planificación y el seguimiento de problemas hasta la implementación y el monitoreo. Esto permite a los equipos gestionar todos los aspectos de sus proyectos de software en un solo lugar."
          p2="Facilita la colaboración en equipo mediante funciones como control de versiones integrado, seguimiento de problemas, solicitudes de extracción y comentarios en línea. Los equipos pueden trabajar de manera eficiente y transparente en proyectos de cualquier tamaño."
          p3="La integración continua y la entrega continua (CI/CD) están integradas en GitLab, lo que permite a los equipos automatizar las pruebas, la compilación y la implementación de su código de forma rápida y confiable."
          p4="GitLab ofrece herramientas de seguridad del código, incluyendo escaneo de vulnerabilidades y revisión automática de código, para garantizar que el software desarrollado sea seguro y cumpla con los estándares de seguridad."
          p5="El monitoreo del rendimiento en GitLab permite a los equipos supervisar el rendimiento de sus aplicaciones en tiempo real, identificar cuellos de botella y tomar medidas para optimizar el rendimiento."
          p6="La automatización de la infraestructura en GitLab permite a los equipos gestionar y escalar su infraestructura de manera eficiente, utilizando herramientas como la infraestructura como código y la gestión de contenedores."
        />

        <Doc flag = "Empezar" text="Empezar en GitLab" bg="#FC6D26" fbg="#ffffff" download="1" url = "https://gitlab.com/users/sign_in"/>

        <ResourcesPage language="GitLab"
          videosArray={[
            [null, "GitLab Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=0hXqZpqpP9U"],
            [null, "GitLab Crash Course", "Academind", "https://www.youtube.com/watch?v=WPqXP_kLzpo"],
            [null, "Mastering GitLab", "Fireship", "https://www.youtube.com/watch?v=ZzfHjytDceU"]
          ]}
        />
      </div>
    </div>
  );
}

export default GitLabPage;
