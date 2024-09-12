import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/Sketch.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function SketchPage() {
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
        <PageLanguage install={true} style="Sketch" title="Sketch" subtitle="Digital Design Toolkit" bd_color="#F7B500" about="Sketch" logo={logo}/>
        <Aboutpage
          des="Sketch es una herramienta de diseño digital utilizada principalmente para la creación de interfaces de usuario y diseño de productos. Es conocido por su interfaz intuitiva y su conjunto de características centradas en el diseño de interfaces de usuario y la colaboración en equipo."
          logo={aboutlogo}
          li1="Diseño de interfaces de usuario"
          li2="Prototipado interactivo"
          li3="Símbolos reutilizables"
          li4="Colaboración en equipo"
          li5="Compatibilidad con plugins"
          li6="Licencia de pago"
          p1="Sketch es ampliamente utilizado en la industria del diseño para crear interfaces de usuario para aplicaciones móviles y web, así como para diseñar productos digitales en general. Su conjunto de herramientas simplifica el proceso de diseño, lo que permite a los diseñadores crear rápidamente prototipos y mockups de alta calidad."
          p2="La función de prototipado interactivo de Sketch permite a los diseñadores crear prototipos navegables y experiencias de usuario interactivas directamente en la aplicación. Esto facilita la comunicación de ideas y la validación de diseños antes de la implementación."
          p3="Los símbolos reutilizables en Sketch permiten a los diseñadores crear elementos de diseño una vez y reutilizarlos en todo el proyecto. Esto agiliza el proceso de diseño y garantiza la coherencia en toda la interfaz de usuario."
          p4="Sketch ofrece funciones de colaboración en equipo que permiten a los diseñadores compartir fácilmente sus diseños con colegas y clientes para obtener comentarios y revisión. Esto facilita el trabajo en equipo y la iteración rápida en los proyectos de diseño."
          p5="Con una amplia gama de plugins disponibles, Sketch puede ser ampliado y personalizado para adaptarse a las necesidades específicas de cada proyecto y flujo de trabajo. Los plugins pueden añadir funcionalidades adicionales, como integraciones con herramientas de prototipado, generación de código y más."
          p6="Sketch es una aplicación de pago, lo que significa que los usuarios deben adquirir una licencia para utilizarla. Sin embargo, ofrece una versión de prueba gratuita y descuentos para estudiantes y equipos, lo que lo hace accesible para una amplia gama de usuarios."
        />

        <Doc text="Instalar Sketch" bg="#F7B500" fbg="#181818" download=".1" url = "https://www.sketch.com/get/"/>

        <ResourcesPage language="Sketch"
          videosArray={[
            [null, "Sketch Tutorial for Beginners", "Sketch", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Sketch Advanced Techniques", "Sketch", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Sketch Collaboration Tips", "Sketch", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default SketchPage;

