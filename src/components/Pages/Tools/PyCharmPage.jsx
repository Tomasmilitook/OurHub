import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/pycharm.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

function PyCharmPage() {
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
        <PageLanguage install="Instalar" style="PyCharm" title="PyCharm" subtitle="Integrated Development Environment" bd_color="#000000" about="PyCharm" logo={logo}/>
        <Aboutpage
          des="PyCharm es un entorno de desarrollo integrado (IDE) desarrollado por JetBrains para programar en Python. Es conocido por su robusto conjunto de características, su integración con herramientas de desarrollo populares y su amplia gama de extensiones y plugins."
          logo={aboutlogo}
          li1="Desarrollo en Python"
          li2="Robusto conjunto de características"
          li3="Integración con herramientas populares"
          li4="Amplia gama de extensiones"
          li5="Soporte multiplataforma"
          li6="Entorno de desarrollo completo"
          p1="PyCharm proporciona un entorno de desarrollo completo para programar en Python, incluyendo características como resaltado de sintaxis, finalización de código, depuración, análisis de código estático, y más. Está diseñado para mejorar la productividad de los desarrolladores y facilitar el proceso de desarrollo de software."
          p2="Con un conjunto de características robusto, PyCharm ofrece soporte para una variedad de tareas relacionadas con el desarrollo de software, como la gestión de proyectos, control de versiones, pruebas unitarias, y refactorización de código. Esto permite a los desarrolladores trabajar de manera eficiente y mantener altos estándares de calidad en su código."
          p3="PyCharm se integra con herramientas populares de desarrollo, incluyendo sistemas de control de versiones como Git, herramientas de construcción de proyectos como Docker y Vagrant, y frameworks como Django y Flask. Esto facilita el desarrollo de aplicaciones web y proyectos de ciencia de datos directamente desde el IDE."
          p4="Una de las fortalezas de PyCharm es su ecosistema de extensiones y plugins. Los usuarios pueden ampliar las funcionalidades del IDE instalando extensiones y plugins desarrollados por la comunidad, lo que les permite personalizar su entorno de desarrollo según sus necesidades específicas."
          p5="PyCharm es compatible con múltiples plataformas, incluyendo Windows, Linux y macOS, lo que permite a los desarrolladores utilizar la misma herramienta en diferentes sistemas operativos y compartir configuraciones entre ellos."
          p6="Como un entorno de desarrollo completo, PyCharm ofrece todas las herramientas necesarias para desarrollar, depurar y desplegar aplicaciones de software en Python. Esto incluye características como la gestión de entornos virtuales, soporte para la terminal integrada, y herramientas para el análisis de rendimiento y la optimización del código."
        />

        <Doc text="Instalar PyCharm" bg="#000000" fbg="#ffffff" download=".1" url = "https://www.jetbrains.com/pycharm/download/"/>

        <ResourcesPage language="PyCharm"
          videosArray={[
            [null, "PyCharm Tutorial for Beginners", "Corey Schafer", "https://www.youtube.com/watch?v=--nhgMRO5Ns"],
            [null, "PyCharm Tips and Tricks", "PyCharm by JetBrains", "https://www.youtube.com/watch?v=drRIUbq9DWU"],
            [null, "Python Web Development with PyCharm", "Derek Banas", "https://www.youtube.com/watch?v=F6rzPzlv4ug"]
          ]}
        />
      </div>
    </div>
  );
}

export default PyCharmPage;
