import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/atom.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function AtomPage() {
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
        <PageLanguage install={true} style="Atom" title="Atom" subtitle="Text Editor" bd_color="#66595C" about="Atom" logo={logo}/>
        <Aboutpage
          des="Atom es un editor de texto moderno, hackeable y de código abierto desarrollado por GitHub. Es conocido por su enfoque en la usabilidad y la personalización, lo que lo convierte en una opción popular entre los desarrolladores."
          logo={aboutlogo}
          li1="Hackeable y personalizable"
          li2="Integración con GitHub"
          li3="Amplia gama de extensiones"
          li4="Interfaz intuitiva"
          li5="Rendimiento y velocidad"
          li6="Comunidad activa"
          p1="Atom se destaca por ser hackeable y altamente personalizable. Está construido sobre tecnologías web estándar, lo que facilita a los usuarios la creación de sus propios temas, paquetes y configuraciones para adaptar el editor a sus necesidades específicas."
          p2="Como proyecto respaldado por GitHub, Atom ofrece una integración profunda con la plataforma, lo que facilita la colaboración en proyectos alojados en GitHub. Los usuarios pueden realizar acciones como la clonación de repositorios, la creación de bifurcaciones y la realización de solicitudes de extracción directamente desde el editor."
          p3="Una de las fortalezas de Atom es su amplia gama de extensiones disponibles a través de su sistema de paquetes. Estas extensiones abarcan desde mejoras de productividad, como la finalización de código y la depuración, hasta herramientas de desarrollo específicas para diferentes lenguajes y marcos."
          p4="La interfaz de Atom está diseñada para ser intuitiva y fácil de usar. Ofrece características familiares para los usuarios acostumbrados a otros editores de texto, como pestañas de documentos, paneles laterales y un panel de búsqueda integrado."
          p5="Atom está optimizado para ofrecer un rendimiento y velocidad sólidos, incluso cuando se trabaja con proyectos grandes. Se esfuerza por garantizar una experiencia fluida para los usuarios, independientemente del tamaño o la complejidad del proyecto en el que estén trabajando."
          p6="Atom cuenta con una comunidad activa de desarrolladores y usuarios que contribuyen con temas, paquetes y soporte en línea. La comunidad es un recurso invaluable para los usuarios que buscan ayuda, comparten ideas y colaboran en el desarrollo continuo del editor."
        />

        <Doc text="Instalar Atom" bg="#66595C" fbg="#181818" download=".1" url="https://atom-editor.cc"/>

        <ResourcesPage language="Atom"
          videosArray={[
            [null, "Atom Basics Tutorial", "The Net Ninja", "https://www.youtube.com/watch?v=WWwBQQOGllo"],
            [null, "Atom for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=WWwBQQOGllo"],
            [null, "Mastering Atom in 2024", "Codecademy", "https://www.youtube.com/watch?v=ZaBE4NwZrbU"]
          ]}
        />
      </div>
    </div>
  );
}

export default AtomPage;
