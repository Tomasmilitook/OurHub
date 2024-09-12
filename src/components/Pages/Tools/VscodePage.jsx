import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/vscode.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function VSCodePage() {
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
        <PageLanguage install={true} style="Visual Studio Code" title="Visual Studio Code" subtitle="Code Editor" bd_color="#007ACC" about="VS Code" logo={logo}/>
        <Aboutpage
          des="Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Es un editor altamente personalizable que ofrece soporte para una amplia variedad de lenguajes de programación y tecnologías. Visual Studio Code es conocido por su rendimiento, su amplia gama de extensiones disponibles y su integración con herramientas de desarrollo populares."
          logo={aboutlogo}
          li1="Altamente personalizable"
          li2="Amplia gama de extensiones"
          li3="Integración con herramientas populares"
          li4="Soporte multiplataforma"
          li5="Rendimiento"
          li6="Comunidad activa"
          p1="Visual Studio Code ofrece una experiencia altamente personalizable con soporte para temas, esquemas de color, atajos de teclado y más. Los usuarios pueden adaptar el editor a sus preferencias y flujo de trabajo específicos."
          p2="La amplia gama de extensiones disponibles para Visual Studio Code permite a los desarrolladores extender y personalizar aún más su entorno de desarrollo. Las extensiones están disponibles para una variedad de propósitos, como resaltado de sintaxis, depuración, control de versiones, integración con servicios en la nube y mucho más."
          p3="Visual Studio Code se integra con herramientas populares de desarrollo, incluidas herramientas de control de versiones como Git, sistemas de compilación como npm y herramientas de depuración como Chrome DevTools. Esto facilita el desarrollo y la depuración de aplicaciones directamente desde el editor."
          p4="Al ser un editor multiplataforma, Visual Studio Code está disponible para Windows, Linux y macOS. Esto permite a los desarrolladores utilizar la misma herramienta en diferentes sistemas operativos y compartir configuraciones entre ellos."
          p5="Visual Studio Code es conocido por su rendimiento y velocidad, incluso cuando se trabaja con proyectos grandes. El editor está diseñado para ser ligero y rápido, lo que garantiza una experiencia fluida incluso en equipos menos potentes."
          p6="Visual Studio Code cuenta con una comunidad activa de usuarios y desarrolladores que contribuyen con extensiones, temas, tutoriales y soporte en línea. La comunidad es un recurso valioso para los usuarios nuevos y experimentados que buscan maximizar su productividad con el editor."
        />

        <Doc text="Instalar VS Code" bg="#007ACC" fbg="#181818" download=".1" url = "https://code.visualstudio.com/download"/>

        <ResourcesPage language="Visual Studio Code"
          videosArray={[
            [null, "Visual Studio Code Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=0hXqZpqpP9U"],
            [null, "Visual Studio Code Crash Course", "Academind", "https://www.youtube.com/watch?v=WPqXP_kLzpo"],
            [null, "Visual Studio Code Tips and Tricks", "Fireship", "https://www.youtube.com/watch?v=ZzfHjytDceU"]
          ]}
        />
      </div>
    </div>
  );
}

export default VSCodePage;
