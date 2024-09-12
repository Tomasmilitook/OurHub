import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/netbeans.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function NetBeansPage() {
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
        <PageLanguage install="Instalar" style="NetBeans" title="NetBeans" subtitle="Integrated Development Environment" bd_color="#1B6AC6" about="NetBeans" logo={logo}/>
        <Aboutpage
          des="NetBeans es un entorno de desarrollo integrado (IDE) de código abierto y multiplataforma que permite a los desarrolladores escribir, compilar y depurar código en una variedad de lenguajes de programación, incluyendo Java, JavaScript, PHP, HTML, y más. Es conocido por su facilidad de uso, su amplia gama de características y su fuerte comunidad de usuarios."
          logo={aboutlogo}
          li1="Desarrollo en múltiples lenguajes"
          li2="Amplia gama de características"
          li3="Facilidad de uso"
          li4="Soporte multiplataforma"
          li5="Integración con herramientas populares"
          li6="Comunidad activa"
          p1="NetBeans ofrece soporte para una amplia variedad de lenguajes de programación, incluyendo Java, JavaScript, PHP, HTML, CSS, y más. Esto permite a los desarrolladores trabajar en proyectos que abarcan diferentes tecnologías, todo dentro de un único entorno de desarrollo."
          p2="Con una amplia gama de características, NetBeans proporciona herramientas para escribir, compilar, depurar y desplegar aplicaciones de software. Ofrece características como resaltado de sintaxis, finalización de código, refactorización, pruebas unitarias, y control de versiones, que ayudan a los desarrolladores a mejorar su productividad y mantener altos estándares de calidad en su código."
          p3="NetBeans está diseñado para ser fácil de usar, con una interfaz intuitiva y familiar que facilita la navegación y el uso de las herramientas del IDE. Los desarrolladores pueden personalizar su entorno de desarrollo según sus preferencias, lo que les permite adaptar NetBeans a su flujo de trabajo específico."
          p4="Como un IDE multiplataforma, NetBeans está disponible para Windows, Linux y macOS, lo que permite a los desarrolladores utilizar la misma herramienta en diferentes sistemas operativos y compartir configuraciones entre ellos."
          p5="NetBeans se integra con herramientas populares de desarrollo, incluyendo sistemas de control de versiones como Git, frameworks como JavaFX y Apache Cordova, y servidores de aplicaciones como GlassFish y Apache Tomcat. Esto facilita el desarrollo de aplicaciones web, móviles y empresariales directamente desde el IDE."
          p6="NetBeans cuenta con una comunidad activa de usuarios y desarrolladores que contribuyen con extensiones, plugins, y soporte en línea. La comunidad es un recurso valioso para los usuarios nuevos y experimentados que buscan ayuda, tutoriales, y recursos adicionales relacionados con NetBeans."
        />

        <Doc text="Instalar NetBeans" bg="#1B6AC6" fbg="#FFFFFF" download=".1" url = "https://netbeans.apache.org/download/index.html"/>

        <ResourcesPage language="NetBeans IDE"
          videosArray={[
            [null, "NetBeans IDE Tutorial for Beginners", "ProgrammingKnowledge", "https://www.youtube.com/watch?v=uo0zIpmJTLY"],
            [null, "NetBeans IDE 8.2 - Java, HTML5, PHP, C/C++", "ProgrammingKnowledge", "https://www.youtube.com/watch?v=N9Qo2mqKplQ"],
            [null, "NetBeans IDE Tips and Tricks", "The Crazy Programmer", "https://www.youtube.com/watch?v=VWZNSiJaetY"]
          ]}
        />
      </div>
    </div>
  );
}

export default NetBeansPage;
