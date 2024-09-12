import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/InVision.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function InvisionPage() {
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
        <PageLanguage install={true} style="InVision" title="InVision" subtitle="Digital Product Design Platform" bd_color="#FF3366" about="InVision" logo={logo}/>
        <Aboutpage
          des="InVision es una plataforma de diseño de productos digitales que permite a los equipos de diseño crear prototipos interactivos, colaborar en proyectos y recopilar comentarios de manera efectiva. Es utilizado por diseñadores, desarrolladores y stakeholders para crear y mejorar experiencias digitales."
          logo={aboutlogo}
          li1="Prototipado interactivo"
          li2="Colaboración en tiempo real"
          li3="Recopilación de comentarios"
          li4="Gestión de activos de diseño"
          li5="Integraciones con herramientas de diseño"
          li6="Planes gratuitos y de pago"
          p1="InVision ofrece herramientas potentes para crear prototipos interactivos que permiten a los equipos de diseño simular y probar experiencias digitales antes de la implementación. Esto facilita la validación de conceptos, la identificación de problemas de usabilidad y la toma de decisiones informadas."
          p2="La función de colaboración en tiempo real de InVision permite a los miembros del equipo trabajar juntos en un mismo proyecto, compartir comentarios y realizar ajustes en tiempo real. Esto agiliza el proceso de diseño y fomenta la comunicación y la colaboración entre los diferentes stakeholders."
          p3="Con herramientas para recopilar comentarios y realizar revisiones, InVision facilita la comunicación efectiva entre los miembros del equipo y los stakeholders. Los usuarios pueden dejar comentarios contextualizados directamente en el diseño, lo que simplifica el proceso de revisión y aprobación."
          p4="InVision ofrece funcionalidades para gestionar activos de diseño, incluyendo bibliotecas de componentes reutilizables y sistemas de diseño. Esto promueve la coherencia en el diseño y facilita la actualización de elementos en múltiples lugares."
          p5="InVision se integra con una variedad de herramientas de diseño, gestión de proyectos y desarrollo, lo que permite a los equipos integrar InVision en su flujo de trabajo existente. Estas integraciones incluyen Sketch, Adobe XD, Jira, Slack y más."
          p6="InVision ofrece planes gratuitos y de pago, lo que permite a los usuarios elegir la opción que mejor se adapte a sus necesidades y presupuesto. Los planes de pago ofrecen características adicionales, como más colaboradores, almacenamiento y acceso a funciones avanzadas."
        />

        <Doc text="Instalar InVision" bg="#FF3366" fbg="#FFFFFF" download="1" url = "https://www.invisionapp.com/"/>

        <ResourcesPage language="InVision"
          videosArray={[
            [null, "InVision Tutorial for Beginners", "InVision", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "InVision Advanced Techniques", "InVision", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "InVision Collaboration Tips", "InVision", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default InvisionPage;
