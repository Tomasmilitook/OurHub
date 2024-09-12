import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/maven.png"
import aboutlogo from "../../../images/gestorrojo.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function MavenPage() {
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
        <PageLanguage install="Empezar" style="Maven" title="Maven" subtitle="Dependency Management for Java" bd_color="#C71D24" about="Maven" logo={logo}/>
        <Aboutpage
          des="Maven es una herramienta de gestión de proyectos de software que se utiliza principalmente para la construcción, el informe y la documentación de proyectos basados en Java. Simplifica el proceso de construcción y gestión de dependencias en proyectos Java."
          logo={aboutlogo}
          li1="Construcción de proyectos"
          li2="Gestión de dependencias"
          li3="Ciclo de vida del desarrollo de software"
          li4="Informes y documentación"
          li5="Compatibilidad con plugins"
          li6="Integración con repositorios"
          p1="Maven automatiza el proceso de construcción de proyectos Java, facilitando la generación de archivos JAR, WAR, y otros artefactos, así como la ejecución de pruebas y la generación de documentación."
          p2="Facilita la gestión de dependencias en proyectos Java mediante la definición de dependencias en un archivo de configuración (pom.xml) y la descarga automática de las bibliotecas necesarias desde repositorios remotos."
          p3="Define un ciclo de vida estándar para el desarrollo de software en Java, que incluye fases como compilación, prueba, empaquetado y despliegue, facilitando la integración y automatización del proceso de desarrollo."
          p4="Ofrece herramientas integradas para generar informes de calidad de código, cobertura de pruebas, análisis de dependencias y más, así como la generación de documentación a partir de comentarios en el código fuente."
          p5="Maven es altamente extensible a través de plugins, lo que permite a los desarrolladores agregar funcionalidades personalizadas al proceso de construcción y gestión de proyectos."
          p6="Se integra fácilmente con repositorios de artefactos como Maven Central y repositorios corporativos, lo que facilita la distribución y el consumo de bibliotecas y artefactos."
        />

        <Doc flag = "Empezar" text="Empezar con Maven" bg="#C71D24" fbg="#ffffff" download="1" url = "https://maven.apache.org/download.cgi"/>

        <ResourcesPage language="Maven"
          videosArray={[
            [null, "Maven Tutorial for Beginners", "Java Brains", "https://www.youtube.com/watch?v=0CFWeVgzsqY"],
            [null, "Mastering Maven", "Udemy", "https://www.udemy.com/course/maven-fundamentals/"],
            [null, "Advanced Maven Techniques", "Pluralsight", "https://www.pluralsight.com/courses/maven-fundamentals"]
          ]}
        />
      </div>
    </div>
  );
}

export default MavenPage;

