import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/google-cloud-logo.png"
import aboutlogo from "../../../images/storage.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function GoogleCloudStoragePage() {
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
        <PageLanguage install="Empezar" style="Google Cloud Storage" title="Google Cloud Storage" subtitle="Object Storage Service" bd_color="#4285F4" about="Google Cloud" logo={logo}/>
        <Aboutpage
          des="Google Cloud Storage es un servicio de almacenamiento de objetos en la nube altamente escalable y duradero. Es utilizado por empresas de todo el mundo para almacenar datos estructurados y no estructurados, y para servir contenido estático y dinámico a aplicaciones web y móviles."
          logo={aboutlogo}
          li1="Almacenamiento de objetos en la nube"
          li2="Escalabilidad y rendimiento"
          li3="Durabilidad y disponibilidad"
          li4="Seguridad de datos"
          li5="Integración con servicios de Google Cloud"
          li6="Facilidad de uso y administración"
          p1="Google Cloud Storage proporciona una solución de almacenamiento de objetos en la nube altamente escalable y duradero, que permite a los usuarios almacenar y recuperar datos de manera eficiente y confiable en aplicaciones web, móviles y de análisis."
          p2="Ofrece escalabilidad y rendimiento excepcionales, con capacidad para manejar grandes volúmenes de datos y un alto número de solicitudes de lectura y escritura simultáneas. Esto garantiza un acceso rápido a los datos y un rendimiento consistente para las aplicaciones en línea y móviles."
          p3="Proporciona durabilidad y disponibilidad líderes en la industria, con redundancia de datos a través de múltiples ubicaciones y opciones de almacenamiento diseñadas para resistir fallos de hardware y errores de red. Esto garantiza que los datos estén siempre disponibles y sean duraderos."
          p4="Prioriza la seguridad de los datos, utilizando cifrado de datos en reposo y en tránsito, autenticación de usuarios y otras medidas de seguridad avanzadas para proteger la privacidad y la integridad de los datos almacenados en la plataforma."
          p5="Se integra estrechamente con otros servicios de Google Cloud Platform, como Compute Engine, BigQuery y App Engine, lo que facilita su uso en aplicaciones y flujos de trabajo existentes en la plataforma de Google Cloud."
          p6="Es fácil de usar y administrar, con una interfaz de usuario intuitiva y herramientas de administración que permiten a los usuarios configurar, supervisar y gestionar su almacenamiento en la nube de manera eficiente."
        />

        <Doc flag="Empezar" text="Empezar con Google Cloud Storage" bg="#4285F4" fbg="#FFFFFF" download="1" url="https://cloud.google.com/storage/docs/getting-started-console"/>

        <ResourcesPage language="Google Cloud Storage"
          videosArray={[
            [null, "Google Cloud Storage Tutorial for Beginners", "TechGumbo", "https://www.youtube.com/watch?v=68HRXU9vdt4"],
            [null, "Google Cloud Storage Overview", "edureka!", "https://www.youtube.com/watch?v=0Ktdw7Hd1eI"],
            [null, "Mastering Google Cloud Storage", "Google Cloud Platform", "https://www.youtube.com/watch?v=fDGTLKnUz5o"]
          ]}
        />
      </div>
    </div>
  );
}

export default GoogleCloudStoragePage;
