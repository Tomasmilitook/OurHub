import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/sublimetext.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function SublimeTextPage() {
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
        <PageLanguage install={true} style="Sublime Text" title="Sublime Text" subtitle="Code Editor" bd_color="#FF9800" about="Sublime Text" logo={logo}/>
        <Aboutpage
          des="Sublime Text es un editor de texto avanzado para código, marcado y prosa. Disponible para Windows, macOS y Linux."
          logo={aboutlogo}
          li1="Rápido y eficiente"
          li2="Amplia gama de características"
          li3="Interfaz altamente personalizable"
          li4="Soporte para complementos"
          li5="Edición de múltiples selecciones"
          li6="Comunidad activa"
          p1="Sublime Text es conocido por su velocidad y eficiencia. Se carga rápidamente, tiene tiempos de respuesta rápidos y no ralentiza el rendimiento incluso con archivos grandes o múltiples instancias del programa abiertas."
          p2="Ofrece una amplia gama de características que incluyen resaltado de sintaxis personalizable, finalización de código, edición de múltiples selecciones, comandos de teclado potentes y una gran cantidad de atajos que agilizan el flujo de trabajo."
          p3="La interfaz de Sublime Text es altamente personalizable, lo que permite a los usuarios ajustarla según sus preferencias. Esto incluye la capacidad de cambiar temas, diseños de ventana y personalizar los atajos de teclado."
          p4="Sublime Text admite la instalación de complementos para extender su funcionalidad. Hay una amplia variedad de complementos disponibles que ofrecen desde herramientas de productividad hasta integraciones con herramientas de desarrollo específicas."
          p5="Una de las características distintivas de Sublime Text es su capacidad para realizar ediciones con múltiples selecciones. Esto permite realizar cambios simultáneos en varias ubicaciones del archivo, lo que puede ahorrar mucho tiempo en determinadas tareas de edición."
          p6="Sublime Text cuenta con una comunidad activa de usuarios y desarrolladores que contribuyen con complementos, temas y soporte en línea. La comunidad proporciona recursos útiles y ayuda a los usuarios a aprovechar al máximo el editor."
        />

        <Doc text="Instalar Sublime Text" bg="#FF9800" fbg="#181818" download=".1" url="https://www.sublimetext.com/download"/>

        <ResourcesPage language="Sublime Text"
          videosArray={[
            [null, "Sublime Text Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=SVkR1ZkNusI"],
            [null, "Sublime Text Tips and Tricks", "Academind", "https://www.youtube.com/watch?v=9Qf_H7SB4d4"],
            [null, "Mastering Sublime Text", "LevelUpTuts", "https://www.youtube.com/watch?v=zVIhUVwTzX8"]
          ]}
        />
      </div>
    </div>
  );
}

export default SublimeTextPage;
