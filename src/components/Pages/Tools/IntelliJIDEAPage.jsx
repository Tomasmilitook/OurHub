import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/intellijidea.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function IntelliJIDEAPage() {
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
        <PageLanguage install="Install" style="IntelliJ IDEA" title="IntelliJ IDEA" subtitle="Integrated Development Environment" bd_color="#000000" about="IntelliJ" logo={logo}/>
        <Aboutpage
          des="IntelliJ IDEA es un entorno de desarrollo integrado (IDE) desarrollado por JetBrains para el desarrollo de software en Java, Kotlin y otras tecnologías. Es conocido por su amplia gama de características, su soporte para múltiples lenguajes y su potente conjunto de herramientas de desarrollo."
          logo={aboutlogo}
          li1="Desarrollo en Java, Kotlin y más"
          li2="Potente conjunto de herramientas"
          li3="Soporte para múltiples lenguajes"
          li4="Integración con tecnologías modernas"
          li5="Productividad mejorada"
          li6="Amplia personalización"
          p1="IntelliJ IDEA proporciona un entorno de desarrollo completo para proyectos en Java, Kotlin y otros lenguajes. Ofrece características como refactorización inteligente, finalización de código, análisis estático, depuración avanzada y más, que ayudan a los desarrolladores a escribir código de manera eficiente."
          p2="Con un potente conjunto de herramientas, IntelliJ IDEA facilita el desarrollo de software de alta calidad. Ofrece integración con sistemas de control de versiones, soporte para construcción de proyectos, pruebas unitarias y herramientas de análisis de código, todo dentro de una interfaz unificada y fácil de usar."
          p3="IntelliJ IDEA no se limita al desarrollo en un solo lenguaje; ofrece soporte para una amplia gama de tecnologías y frameworks, lo que lo convierte en una opción versátil para desarrolladores de diferentes áreas. Desde aplicaciones web hasta aplicaciones móviles y servicios en la nube, IntelliJ IDEA puede adaptarse a diversas necesidades de desarrollo."
          p4="Con su integración con tecnologías modernas como Spring Boot, JavaFX, Maven, Gradle y más, IntelliJ IDEA ayuda a los desarrolladores a aprovechar al máximo las herramientas y bibliotecas disponibles en el ecosistema de desarrollo de Java y otras tecnologías."
          p5="IntelliJ IDEA está diseñado para mejorar la productividad del desarrollador con características como la generación de código automatizada, la detección de errores en tiempo real, la navegación inteligente y las plantillas de código. Estas características permiten a los desarrolladores escribir código de manera más rápida y sin errores."
          p6="Con una amplia gama de opciones de personalización, los usuarios pueden adaptar IntelliJ IDEA a sus preferencias y flujo de trabajo específicos. Desde temas y esquemas de color hasta atajos de teclado y configuraciones de proyecto, IntelliJ IDEA se puede ajustar para satisfacer las necesidades de cada desarrollador."
        />

        <Doc text="Instalar IntelliJ IDEA" bg="#000000" fbg="#ffffff" download=".1" url = "https://www.jetbrains.com/idea/download/"/>

        <ResourcesPage language="IntelliJ IDEA"
          videosArray={[
            [null, "IntelliJ IDEA Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=aWnXj3-5-yA"],
            [null, "IntelliJ IDEA Ultimate Guide", "Academind", "https://www.youtube.com/watch?v=Ee_MqBfhMV8"],
            [null, "IntelliJ IDEA Tips and Tricks", "Telusko", "https://www.youtube.com/watch?v=eq3KiAH4IBI"]
          ]}
        />
      </div>
    </div>
  );
}

export default IntelliJIDEAPage;
