import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/composer.png"
import aboutlogo from "../../../images/gestormarron.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

function ComposerPage() {
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
        <PageLanguage install="Empezar" style="Composer" title="Composer" subtitle="Dependency Manager for PHP" bd_color="#885630" about="Composer" logo={logo}/>
        <Aboutpage
          des="Composer es un gestor de dependencias para PHP que simplifica el proceso de gestión e instalación de bibliotecas y paquetes de software. Permite a los desarrolladores de PHP definir y gestionar las dependencias de sus proyectos de forma sencilla y eficiente."
          logo={aboutlogo}
          li1="Gestión de dependencias"
          li2="Instalación de paquetes"
          li3="Autocarga de clases"
          li4="Actualización de paquetes"
          li5="Creación de proyectos"
          li6="Compatibilidad con bibliotecas externas"
          p1="Composer simplifica la gestión de dependencias en proyectos de PHP al permitir a los desarrolladores definir las bibliotecas y paquetes necesarios en un archivo de configuración simple."
          p2="Facilita la instalación de paquetes y bibliotecas de software desde el repositorio Packagist, así como desde otros repositorios, con un simple comando, lo que agiliza el proceso de desarrollo."
          p3="Ofrece una funcionalidad de autocarga de clases que simplifica la inclusión de archivos de clase en los scripts PHP, eliminando la necesidad de incluir manualmente cada archivo."
          p4="Permite a los desarrolladores actualizar fácilmente los paquetes instalados a sus últimas versiones con un simple comando, lo que garantiza que los proyectos estén utilizando las últimas características y correcciones de errores."
          p5="Composer facilita la creación de nuevos proyectos de PHP al proporcionar una plantilla de proyecto estándar y un proceso de inicialización simple."
          p6="Es compatible con bibliotecas y paquetes de software de terceros, lo que permite a los desarrolladores utilizar fácilmente bibliotecas externas en sus proyectos de PHP."
        />

        <Doc flag = "Empezar" text="Empezar con Composer" bg="#885630" fbg="#ffffff" download="1" url = "https://getcomposer.org/download/"/>

        <ResourcesPage language="Composer"
          videosArray={[
            [null, "Composer Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=akx-3nKulAY"],
            [null, "Mastering Composer", "Codecourse", "https://www.youtube.com/watch?v=DDhT7c0cGYY"],
            [null, "Advanced Composer Techniques", "SymfonyCasts", "https://symfonycasts.com/screencast/composer"]
          ]}
        />
      </div>
    </div>
  );
}

export default ComposerPage;
