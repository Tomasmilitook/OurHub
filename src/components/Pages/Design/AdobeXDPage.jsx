import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/AdobeXD.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function AdobeXDPage() {
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
        <PageLanguage install={true} style="Adobe XD" title="Adobe XD" subtitle="Experience Design Tool" bd_color="#FF4500" about="Adobe XD" logo={logo}/>
        <Aboutpage
          des="Adobe XD es una herramienta de diseño de experiencias de usuario (UX) y de interfaces de usuario (UI) desarrollada por Adobe. Está diseñado para ayudar a los diseñadores a crear prototipos de alta calidad, diseños de interfaces de usuario y experiencias de usuario interactivas para aplicaciones web y móviles."
          logo={aboutlogo}
          li1="Diseño de experiencias de usuario"
          li2="Prototipado interactivo"
          li3="Colaboración en equipo"
          li4="Integración con Adobe Creative Cloud"
          li5="Compatibilidad con plugins"
          li6="Licencia de pago"
          p1="Adobe XD ofrece herramientas completas para el diseño de experiencias de usuario, incluyendo la creación de wireframes, prototipos interactivos y diseños de interfaces de usuario. Su interfaz intuitiva y su integración con otras herramientas de Adobe Creative Cloud facilitan el proceso de diseño."
          p2="La función de prototipado interactivo de Adobe XD permite a los diseñadores crear prototipos navegables y experiencias de usuario interactivas directamente en la aplicación. Esto facilita la presentación de ideas y la validación de diseños antes de la implementación."
          p3="Adobe XD ofrece funciones de colaboración en equipo que permiten a los diseñadores compartir fácilmente sus diseños con colegas y clientes para obtener comentarios y revisión. Los usuarios pueden trabajar juntos en tiempo real en el mismo archivo, lo que agiliza el proceso de diseño y garantiza la coherencia en el trabajo."
          p4="Gracias a su integración con Adobe Creative Cloud, Adobe XD permite a los diseñadores importar assets de Photoshop e Illustrator directamente en sus diseños, lo que facilita la creación de diseños cohesivos y la colaboración entre diferentes equipos de diseño."
          p5="Adobe XD es compatible con una amplia gama de plugins que amplían su funcionalidad y permiten a los diseñadores personalizar su flujo de trabajo. Los plugins pueden añadir funcionalidades adicionales, como integraciones con herramientas de prototipado y generación de código."
          p6="Adobe XD es una aplicación de pago, lo que significa que los usuarios deben adquirir una suscripción para utilizarla. Sin embargo, ofrece una versión de prueba gratuita y descuentos para estudiantes y equipos, lo que lo hace accesible para una amplia gama de usuarios."
        />

        <Doc text="Instalar Adobe XD" bg="#FF4500" fbg="#FFFFFF" download="1" url = "https://www.adobe.com/products/xd.html"/>

        <ResourcesPage language="Adobe XD"
          videosArray={[
            [null, "Adobe XD Tutorial for Beginners", "Adobe XD", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Adobe XD Advanced Techniques", "Adobe XD", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Adobe XD Collaboration Tips", "Adobe XD", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default AdobeXDPage;

