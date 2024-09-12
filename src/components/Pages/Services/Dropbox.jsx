import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/dropbox.png"
import aboutlogo from "../../../images/storage.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function DropboxPage() {
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
        <PageLanguage install="Empezar" style="Dropbox" title="Dropbox" subtitle="File Hosting Service" bd_color="#007EE5" about="Dropbox" logo={logo}/>
        <Aboutpage
          des="Dropbox es un servicio de alojamiento de archivos en la nube que permite a los usuarios almacenar y sincronizar archivos en línea y entre dispositivos. Es utilizado por individuos y empresas para acceder y compartir archivos de manera segura y conveniente desde cualquier lugar."
          logo={aboutlogo}
          li1="Almacenamiento en la nube"
          li2="Sincronización de archivos"
          li3="Acceso remoto"
          li4="Colaboración en equipo"
          li5="Seguridad de datos"
          li6="Integraciones con aplicaciones"
          p1="Dropbox proporciona almacenamiento en la nube seguro y confiable para archivos y carpetas, lo que permite a los usuarios acceder a sus datos desde cualquier lugar y en cualquier momento a través de una conexión a Internet."
          p2="Ofrece sincronización de archivos automática entre dispositivos, lo que garantiza que los cambios realizados en un dispositivo estén disponibles en todos los demás dispositivos conectados."
          p3="Permite el acceso remoto a archivos y carpetas, lo que facilita la colaboración y el trabajo en equipo en proyectos compartidos. Los usuarios pueden acceder y editar archivos desde cualquier lugar con una conexión a Internet."
          p4="Facilita la colaboración en equipo mediante funciones como compartir archivos y carpetas, comentarios en línea, control de versiones y permisos de acceso granular."
          p5="Ofrece características de seguridad avanzadas, como cifrado de datos en reposo y en tránsito, autenticación de dos factores, controles de acceso y capacidades de auditoría."
          p6="Se integra con una variedad de aplicaciones y herramientas, lo que facilita su uso en flujos de trabajo existentes y aumenta la productividad de los usuarios."
        />

        <Doc flag="Empezar" text="Empezar con Dropbox" bg="#007EE5" fbg="#FFFFFF" download="1" url="https://www.dropbox.com/register"/>

        <ResourcesPage language="Dropbox"
          videosArray={[
            [null, "Dropbox Tutorial for Beginners", "TechGumbo", "https://www.youtube.com/watch?v=jNnWNx0MyIs"],
            [null, "Dropbox Overview", "Techquickie", "https://www.youtube.com/watch?v=OFb0NaeRmdg"],
            [null, "Mastering Dropbox", "Skillshare", "https://www.youtube.com/watch?v=4kOvVQsh6-Y"]
          ]}
        />
      </div>
    </div>
  );
}

export default DropboxPage;
