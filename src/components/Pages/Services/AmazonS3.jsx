import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/amazon-s3.png"
import aboutlogo from "../../../images/storage.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function AmazonS3Page() {
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
        <PageLanguage install="Empezar" style="Amazon S3" title="Amazon S3" subtitle="Simple Storage Service" bd_color="#FF9900" about="Amazon S3" logo={logo}/>
        <Aboutpage
          des="Amazon S3 (Amazon Simple Storage Service) es un servicio de almacenamiento en la nube altamente escalable y duradero. Es utilizado por empresas y desarrolladores para almacenar y recuperar grandes cantidades de datos de forma segura y confiable."
          logo={aboutlogo}
          li1="Almacenamiento en la nube escalable"
          li2="Durabilidad y disponibilidad"
          li3="Seguridad de datos"
          li4="Gestión de acceso y control"
          li5="Integración con servicios de AWS"
          li6="Facilidad de uso y administración"
          p1="Amazon S3 proporciona una solución de almacenamiento en la nube altamente escalable, que permite a los usuarios almacenar y recuperar grandes volúmenes de datos de manera eficiente y económica."
          p2="Ofrece durabilidad y disponibilidad de datos líderes en la industria, con redundancia de datos a través de múltiples ubicaciones y opciones de almacenamiento diseñadas para resistir fallas de hardware y errores de red."
          p3="Amazon S3 ofrece características de seguridad avanzadas para proteger los datos almacenados, incluyendo cifrado de datos en reposo y en tránsito, control de acceso granular y capacidades de auditoría detalladas."
          p4="Proporciona herramientas para gestionar el acceso y el control de los datos almacenados en Amazon S3, lo que permite a los usuarios definir políticas de acceso, establecer permisos y controlar el acceso a los datos."
          p5="Amazon S3 se integra estrechamente con otros servicios de AWS, lo que facilita su uso en aplicaciones y flujos de trabajo existentes en la plataforma de AWS."
          p6="Es fácil de usar y administrar, con una interfaz de usuario intuitiva y herramientas de administración que permiten a los usuarios configurar y supervisar su almacenamiento en la nube de manera eficiente."
        />

        <Doc flag="Empezar" text="Empezar con Amazon S3" bg="#FF9900" fbg="#000000" download="1" url="https://aws.amazon.com/s3/getting-started/"/>

        <ResourcesPage language="Amazon S3"
          videosArray={[
            [null, "Amazon S3 Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=I1uefzJJ6nM"],
            [null, "Amazon S3 Overview", "AWS", "https://www.youtube.com/watch?v=3ZSvxzVm0Qc"],
            [null, "Amazon S3 Advanced Concepts", "Tech with Tim", "https://www.youtube.com/watch?v=OD3JyH-3D2g"]
          ]}
        />
      </div>
    </div>
  );
}

export default AmazonS3Page;
