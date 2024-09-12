import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/eclipse.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function EclipsePage() {
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
        <PageLanguage install="Instalar" style="Eclipse IDE" title="Eclipse IDE" subtitle="Integrated Development Environment" bd_color="#2C2255" about="Eclipse" logo={logo}/>
        <Aboutpage
          des="Eclipse es un entorno de desarrollo integrado (IDE) popularmente utilizado para el desarrollo de software en una variedad de lenguajes de programación, incluyendo Java, C/C++, y más. Es conocido por su flexibilidad, extensibilidad y su amplia comunidad de usuarios y desarrolladores."
          logo={aboutlogo}
          li1="Desarrollo en múltiples lenguajes"
          li2="Amplia gama de herramientas"
          li3="Extensible mediante plugins"
          li4="Comunidad activa"
          li5="Soporte multiplataforma"
          li6="Entorno de desarrollo completo"
          p1="Eclipse proporciona un entorno de desarrollo completo para una variedad de lenguajes de programación, incluyendo Java, C/C++, PHP, y más. Ofrece características como resaltado de sintaxis, finalización de código, depuración, y refactorización, facilitando el proceso de desarrollo."
          p2="Con una amplia gama de herramientas integradas, Eclipse es capaz de satisfacer las necesidades de diferentes tipos de desarrollo de software. Desde el desarrollo de aplicaciones de escritorio hasta el desarrollo web y móvil, Eclipse ofrece herramientas y perspectivas específicas para cada tipo de proyecto."
          p3="Una de las características más destacadas de Eclipse es su capacidad para ser extendido mediante plugins. La comunidad de Eclipse desarrolla y mantiene una amplia gama de plugins que añaden funcionalidades adicionales al IDE, permitiendo a los usuarios personalizar su entorno de desarrollo según sus necesidades."
          p4="Eclipse cuenta con una comunidad activa de usuarios y desarrolladores que contribuyen con plugins, temas, y soporte en línea. La comunidad es un recurso valioso para los usuarios nuevos y experimentados que buscan ayuda, tutoriales, y recursos adicionales relacionados con Eclipse."
          p5="Eclipse es compatible con múltiples plataformas, incluyendo Windows, Linux y macOS, lo que permite a los desarrolladores utilizar la misma herramienta en diferentes sistemas operativos y compartir configuraciones entre ellos."
          p6="Como un entorno de desarrollo completo, Eclipse ofrece todas las herramientas necesarias para desarrollar, compilar, depurar y desplegar aplicaciones de software. Esto incluye integración con sistemas de control de versiones, herramientas de construcción de proyectos, y soporte para pruebas unitarias."
        />

        <Doc text="Instalar Eclipse" bg="#2C2255" fbg="#FFFFFF" download=".1" url = "https://www.eclipse.org/downloads/"/>

        <ResourcesPage language="Eclipse IDE"
          videosArray={[
            [null, "Eclipse IDE Tutorial for Beginners", "ProgrammingKnowledge", "https://www.youtube.com/watch?v=UhwiNYF6BjY"],
            [null, "Eclipse IDE for Java Developers", "John Purcell", "https://www.youtube.com/watch?v=NGj2cTlTdeo"],
            [null, "Eclipse IDE Tips and Tricks", "CodeJava", "https://www.youtube.com/watch?v=-xLjVR5_g4g"]
          ]}
        />
      </div>
    </div>
  );
}

export default EclipsePage;
