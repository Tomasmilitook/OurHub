import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/java.png"
import aboutlogo from "../../../images/Javaabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function JavaPage() {
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
        <PageLanguage style="Java" title="Java" subtitle="A high-level programming language" bd_color="#007396" about="Java" logo={logo}/>
        <Aboutpage
          des="Java es un lenguaje de programación de alto nivel desarrollado por Sun Microsystems (ahora propiedad de Oracle) en 1995. Es conocido por su portabilidad, robustez y capacidad para crear aplicaciones de software escalables y seguras."
          logo={aboutlogo}
          li1="Portabilidad"
          li2="Robustez"
          li3="Orientado a objetos"
          li4="Multiplataforma"
          li5="Amplia adopción en la industria"
          li6="Seguridad"
          p1="Java se diseñó con la portabilidad en mente, lo que significa que el código Java puede ejecutarse en cualquier plataforma que tenga un intérprete Java instalado, sin necesidad de recompilarlo para cada sistema operativo."
          p2="La robustez de Java se basa en su gestión automática de memoria, la verificación de tipos en tiempo de compilación y tiempo de ejecución, y su manejo de excepciones, lo que ayuda a prevenir errores y fallos inesperados en las aplicaciones Java."
          p3="Java es un lenguaje de programación orientado a objetos, lo que significa que se centra en el concepto de objetos y clases. Esto facilita la reutilización de código, el mantenimiento y la organización de grandes proyectos de software."
          p4="La capacidad de ejecutar código Java en diferentes plataformas hace que sea una opción popular para el desarrollo de aplicaciones multiplataforma, incluidas aplicaciones web, móviles y de escritorio."
          p5="Java se utiliza ampliamente en la industria, desde grandes empresas hasta startups, lo que garantiza una amplia variedad de oportunidades de trabajo y una gran cantidad de recursos de aprendizaje y soporte."
          p6="La seguridad es una preocupación importante en Java, y el lenguaje está diseñado con características de seguridad integradas, como el sandbox de seguridad y la gestión de permisos, para proteger las aplicaciones y los datos de los usuarios."
        />

        <Doc text="Java Docs" bg="#007396" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="Java"
          videosArray={[
            [null, "Curso de Java para principiantes", "SoloLearn", "https://www.youtube.com/watch?v=123"],
            [null, "Java Programming Tutorial", "ProgrammingKnowledge", "https://www.youtube.com/watch?v=456"],
            [null, "Java Tutorial for Beginners", "Programming with Mosh", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default JavaPage;
