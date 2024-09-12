import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/pip.png"
import aboutlogo from "../../../images/gestorazul.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function PipPage() {
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
        <PageLanguage install="Empezar" style="pip" title="pip" subtitle="Python Package Manager" bd_color="#3775A9" about="pip" logo={logo}/>
        <Aboutpage
          des="pip es el gestor de paquetes de Python, que facilita la instalación, actualización y administración de paquetes de software escritos en Python. Es una herramienta fundamental para los desarrolladores de Python para gestionar las dependencias de sus proyectos."
          logo={aboutlogo}
          li1="Instalación de paquetes"
          li2="Actualización de paquetes"
          li3="Gestión de dependencias"
          li4="Creación de entornos virtuales"
          li5="Publicación de paquetes"
          li6="Integración con herramientas de desarrollo"
          p1="pip simplifica la instalación de paquetes de Python desde el Python Package Index (PyPI) y otros repositorios. Los desarrolladores pueden instalar fácilmente paquetes de software con un simple comando, lo que facilita la configuración de entornos de desarrollo."
          p2="Facilita la actualización de paquetes instalados a sus últimas versiones con un comando simple, lo que garantiza que los proyectos estén utilizando las últimas características y correcciones de errores."
          p3="Permite a los desarrolladores gestionar las dependencias de sus proyectos de manera eficiente, asegurando que todas las bibliotecas necesarias estén instaladas y en las versiones correctas."
          p4="pip es compatible con la creación y gestión de entornos virtuales, lo que permite a los desarrolladores crear entornos aislados para proyectos individuales, con sus propias dependencias y configuraciones."
          p5="Los desarrolladores pueden publicar sus propios paquetes de Python en PyPI utilizando pip, lo que facilita la distribución y el uso de su software por parte de otros desarrolladores."
          p6="Se integra fácilmente con herramientas de desarrollo populares como PyCharm, VS Code y Jupyter Notebook, proporcionando una experiencia de desarrollo fluida y eficiente."
        />

        <Doc flag = "Empezar" text="Empezar con pip" bg="#3775A9" fbg="#ffffff" download="1" url = "https://pip.pypa.io/en/stable/installation/"/>

        <ResourcesPage language="pip"
          videosArray={[
            [null, "pip Tutorial for Beginners", "Corey Schafer", "https://www.youtube.com/watch?v=U2ZN104hIcc"],
            [null, "Mastering pip", "Real Python", "https://realpython.com/"],
            [null, "Advanced pip Tricks", "Python Bytes", "https://pythonbytes.fm/episodes/show/20"]
          ]}
        />
      </div>
    </div>
  );
}

export default PipPage;
