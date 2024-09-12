import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/Figma.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function FigmaPage() {
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
        <PageLanguage install={true} style="Figma" title="Figma" subtitle="Collaborative Interface Design Tool" bd_color="#2C2C2C" about="Figma" logo={logo}/>
        <Aboutpage
          des="Figma es una herramienta de diseño de interfaces de usuario basada en la web conocida por su enfoque en la colaboración en tiempo real y su facilidad de uso. Permite a los equipos de diseño crear, colaborar y prototipar diseños de forma eficiente en un entorno en la nube."
          logo={aboutlogo}
          li1="Diseño colaborativo en tiempo real"
          li2="Prototipado y animación"
          li3="Componentes reutilizables"
          li4="Integraciones con herramientas de diseño"
          li5="Compatibilidad multiplataforma"
          li6="Planes gratuitos y de pago"
          p1="Figma facilita la colaboración entre diseñadores y equipos al permitirles trabajar juntos en tiempo real en el mismo archivo. Esto elimina la necesidad de enviar archivos adjuntos o sincronizar versiones, lo que agiliza el proceso de diseño y garantiza la coherencia en el trabajo."
          p2="Además de su capacidad para crear diseños de interfaces de usuario, Figma también ofrece herramientas integradas para prototipado y animación. Los diseñadores pueden crear prototipos interactivos y agregar animaciones a sus diseños directamente en la aplicación."
          p3="Los componentes reutilizables en Figma permiten a los diseñadores crear bibliotecas de elementos de diseño que pueden ser compartidos y reutilizados en todo el proyecto. Esto promueve la coherencia en el diseño y facilita la actualización de elementos en múltiples lugares."
          p4="Figma se integra con una variedad de herramientas de diseño y desarrollo, lo que permite a los equipos integrar fácilmente Figma en su flujo de trabajo existente. Estas integraciones incluyen herramientas de prototipado, gestión de proyectos y sistemas de diseño."
          p5="Al ser una aplicación basada en la web, Figma es compatible con múltiples plataformas y dispositivos. Los usuarios pueden acceder a sus archivos y colaborar en ellos desde cualquier lugar, lo que facilita el trabajo remoto y la colaboración en equipos distribuidos."
          p6="Figma ofrece planes gratuitos y de pago, lo que permite a los usuarios elegir la opción que mejor se adapte a sus necesidades y presupuesto. Los planes de pago ofrecen características adicionales, como más almacenamiento y acceso a bibliotecas de activos premium."
        />

        <Doc text="Instalar Figma" bg="#2C2C2C" fbg="#FFFFFF" download="1" url = "https://www.figma.com/"/>

        <ResourcesPage language="Figma"
          videosArray={[
            [null, "Figma Tutorial for Beginners", "Figma", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Figma Advanced Techniques", "Figma", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Figma Collaboration Tips", "Figma", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default FigmaPage;
