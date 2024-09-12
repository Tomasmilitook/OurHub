import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/npm.png"
import aboutlogo from "../../../images/gestorrojo.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function NpmPage() {
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
        <PageLanguage install="Empezar" style="npm" title="npm" subtitle="Node Package Manager" bd_color="#CB3837" about="npm" logo={logo}/>
        <Aboutpage
          des="npm es el administrador de paquetes predeterminado para Node.js, un entorno de tiempo de ejecución de JavaScript. Permite a los desarrolladores instalar, compartir y gestionar las dependencias de sus proyectos de forma sencilla y eficiente."
          logo={aboutlogo}
          li1="Instalación de paquetes"
          li2="Gestión de dependencias"
          li3="Publicación de paquetes"
          li4="Versionamiento semántico"
          li5="Scripts de automatización"
          li6="Exploración de paquetes"
          p1="npm facilita la instalación de paquetes de JavaScript desde el registro público de npm, así como desde repositorios privados. Los desarrolladores pueden instalar y actualizar fácilmente las dependencias de sus proyectos con simples comandos de línea de comandos."
          p2="Permite a los desarrolladores gestionar las dependencias de sus proyectos de forma eficiente, incluyendo la resolución de conflictos de versiones, la instalación de dependencias de desarrollo y la eliminación de dependencias obsoletas."
          p3="Los desarrolladores pueden publicar sus propios paquetes en el registro público de npm, lo que les permite compartir su código con la comunidad de desarrollo de JavaScript y facilitar su reutilización en otros proyectos."
          p4="npm sigue el versionamiento semántico para la gestión de versiones de los paquetes, lo que garantiza que las actualizaciones sean compatibles y predecibles. Esto facilita la actualización de las dependencias sin introducir conflictos en el proyecto."
          p5="Los desarrolladores pueden definir scripts de automatización en el archivo package.json de su proyecto, lo que les permite ejecutar tareas comunes, como pruebas, compilación y despliegue, con un simple comando npm."
          p6="El registro público de npm ofrece una amplia gama de paquetes de JavaScript para una variedad de propósitos, lo que permite a los desarrolladores explorar y descubrir nuevas herramientas y bibliotecas para sus proyectos."
        />

        <Doc flag = "Empezar" text="Empezar con npm" bg="#CB3837" fbg="#ffffff" download="1" url = "https://www.npmjs.com/get-npm"/>

        <ResourcesPage language="npm"
          videosArray={[
            [null, "npm Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=0hXqZpqpP9U"],
            [null, "npm Crash Course", "Academind", "https://www.youtube.com/watch?v=WPqXP_kLzpo"],
            [null, "Mastering npm", "Fireship", "https://www.youtube.com/watch?v=ZzfHjytDceU"]
          ]}
        />
      </div>
    </div>
  );
}

export default NpmPage;
