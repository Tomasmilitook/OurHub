import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/azure-storage.png"
import aboutlogo from "../../../images/storage.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function AzureStoragePage() {
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
        <PageLanguage install="Empezar" style="Microsoft Azure Storage" title="Azure Storage" subtitle="Cloud Storage Solution" bd_color="#0089D6" about="Azure Storage" logo={logo}/>
        <Aboutpage
          des="Microsoft Azure Storage es una solución de almacenamiento en la nube altamente escalable y duradera ofrecida por Microsoft Azure. Es utilizada por empresas y desarrolladores para almacenar, proteger y acceder a grandes volúmenes de datos de manera eficiente y confiable."
          logo={aboutlogo}
          li1="Solución de almacenamiento en la nube"
          li2="Escalabilidad y rendimiento"
          li3="Durabilidad y disponibilidad"
          li4="Seguridad de datos"
          li5="Integración con servicios de Microsoft Azure"
          li6="Facilidad de uso y administración"
          p1="Microsoft Azure Storage proporciona una solución de almacenamiento en la nube altamente escalable y duradera, que permite a los usuarios almacenar y acceder a grandes volúmenes de datos de manera eficiente y confiable en aplicaciones web, móviles y de análisis."
          p2="Ofrece escalabilidad y rendimiento excepcionales, con capacidad para manejar grandes volúmenes de datos y un alto número de solicitudes de lectura y escritura simultáneas. Esto garantiza un acceso rápido a los datos y un rendimiento consistente para las aplicaciones en línea y móviles."
          p3="Proporciona durabilidad y disponibilidad líderes en la industria, con redundancia de datos a través de múltiples ubicaciones y opciones de almacenamiento diseñadas para resistir fallos de hardware y errores de red. Esto garantiza que los datos estén siempre disponibles y sean duraderos."
          p4="Prioriza la seguridad de los datos, utilizando cifrado de datos en reposo y en tránsito, autenticación de usuarios y otras medidas de seguridad avanzadas para proteger la privacidad y la integridad de los datos almacenados en la plataforma."
          p5="Se integra estrechamente con otros servicios de Microsoft Azure, como Azure Compute, Azure SQL Database y Azure Functions, lo que facilita su uso en aplicaciones y flujos de trabajo existentes en la plataforma de Microsoft Azure."
          p6="Es fácil de usar y administrar, con una interfaz de usuario intuitiva y herramientas de administración que permiten a los usuarios configurar, supervisar y gestionar su almacenamiento en la nube de manera eficiente."
        />

        <Doc flag="Empezar" text="Empezar con Microsoft Azure Storage" bg="#0089D6" fbg="#FFFFFF" download="1" url="https://azure.microsoft.com/en-us/get-started/storage/"/>

        <ResourcesPage language="Microsoft Azure Storage"
          videosArray={[
            [null, "Microsoft Azure Storage Tutorial for Beginners", "edureka!", "https://www.youtube.com/watch?v=zrgFHTn0opg"],
            [null, "Microsoft Azure Storage Overview", "Microsoft Azure", "https://www.youtube.com/watch?v=7eY1x6u1YQA"],
            [null, "Mastering Microsoft Azure Storage", "Cloud Academy", "https://www.youtube.com/watch?v=5FAyZv9E5Vg"]
          ]}
        />
      </div>
    </div>
  );
}

export default AzureStoragePage;

