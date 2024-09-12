import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/git.png"
import aboutlogo from "../../../images/git.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function GitPage() {
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
        <PageLanguage install={true} style="Git" title="Git" subtitle="Version Control System" bd_color="#F05032" about="Git" logo={logo}/>
        <Aboutpage
          des="Git es un sistema de control de versiones distribuido de código abierto que se utiliza para rastrear cambios en archivos y coordinar el trabajo en proyectos de desarrollo de software. Es ampliamente utilizado por equipos de desarrollo en todo el mundo y es conocido por su velocidad, escalabilidad y flexibilidad."
          logo={aboutlogo}
          li1="Distribuido"
          li2="Velocidad"
          li3="Escalabilidad"
          li4="Flexibilidad"
          li5="Control de versiones"
          li6="Colaboración"
          p1="Git es un sistema de control de versiones distribuido, lo que significa que cada desarrollador tiene una copia completa del repositorio en su propia máquina. Esto permite a los desarrolladores trabajar de forma independiente en sus propias ramas y fusionar cambios fácilmente."
          p2="Git es conocido por su velocidad, tanto en términos de rendimiento como de velocidad de desarrollo. Las operaciones como la confirmación, la fusión y la comparación son rápidas, lo que permite a los equipos trabajar de manera eficiente sin retrasos significativos."
          p3="Git es altamente escalable y puede manejar proyectos de cualquier tamaño con facilidad. Ya sea un proyecto pequeño con unos pocos archivos o un proyecto grande con miles de archivos y numerosos colaboradores, Git proporciona un rendimiento consistente y confiable."
          p4="La flexibilidad es una de las características clave de Git. Los desarrolladores pueden trabajar en diferentes flujos de trabajo, como ramificación y fusión, rebase, flujo de trabajo Gitflow, entre otros. Esto permite adaptarse a las necesidades específicas del proyecto y del equipo."
          p5="El control de versiones es fundamental en Git. Cada cambio realizado en el repositorio es rastreado y almacenado, lo que permite a los desarrolladores retroceder en el tiempo, revisar cambios anteriores y colaborar de manera efectiva sin temor a perder trabajo."
          p6="Git facilita la colaboración entre desarrolladores al proporcionar herramientas para compartir código, revisar cambios, resolver conflictos y coordinar el trabajo en equipo. Esto hace que Git sea una opción popular para proyectos de código abierto y empresas de todos los tamaños."
        />

        <Doc text="Instalar Git" bg="#F05032" fbg="#181818" download=".1" url = "https://git-scm.com/downloads"/>

        <ResourcesPage language="Git"
          videosArray={[
            [null, "Git Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=SWYqp7iY_Tc"],
            [null, "Git & GitHub Crash Course", "Academind", "https://www.youtube.com/watch?v=SWYqp7iY_Tc"],
            [null, "Git Tips and Tricks", "Fireship", "https://www.youtube.com/watch?v=SWYqp7iY_Tc"]
          ]}
        />
      </div>
    </div>
  );
}

export default GitPage;
