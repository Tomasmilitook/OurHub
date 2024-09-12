import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/Inkscape.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

function InkscapePage() {
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
        <PageLanguage install={true} style="Inkscape" title="Inkscape" subtitle="Open Source Vector Graphics Editor" bd_color="#000000" about="Inkscape" logo={logo}/>
        <Aboutpage
          des="Inkscape es un editor de gráficos vectoriales de código abierto que ofrece una alternativa gratuita y poderosa a programas comerciales como Adobe Illustrator y CorelDraw. Es ampliamente utilizado para crear ilustraciones, logotipos, diagramas, mapas y más."
          logo={aboutlogo}
          li1="Edición de gráficos vectoriales"
          li2="Diversas herramientas de dibujo"
          li3="Manipulación de trazados"
          li4="Compatibilidad con formatos estándar"
          li5="Extensiones y plugins"
          li6="Disponible en múltiples plataformas"
          p1="Inkscape es una herramienta versátil para la edición de gráficos vectoriales, lo que permite a los diseñadores crear ilustraciones escalables con facilidad. Sus herramientas de dibujo incluyen formas básicas, lápiz, pluma, texto y más, ofreciendo un amplio conjunto de opciones para la creación de arte vectorial."
          p2="Con una variedad de herramientas para manipular trazados, Inkscape permite a los usuarios editar y ajustar formas con precisión. Esto incluye la capacidad de combinar y dividir trazados, aplicar operaciones de ruta y editar nodos para personalizar la apariencia de los objetos vectoriales."
          p3="Inkscape es compatible con una amplia gama de formatos de archivo estándar de la industria, incluidos SVG, PDF, EPS, AI y DXF. Esto facilita la importación y exportación de archivos entre Inkscape y otros programas de diseño, lo que permite a los usuarios trabajar en proyectos colaborativos y compartir archivos sin problemas."
          p4="Además de sus características integradas, Inkscape es altamente personalizable a través de extensiones y plugins. Estos complementos ofrecen funcionalidades adicionales, como efectos especiales, generación de código, herramientas de mapeo y más, ampliando las capacidades de la aplicación."
          p5="Inkscape está disponible en múltiples plataformas, incluyendo Windows, macOS y Linux, lo que lo hace accesible para una amplia audiencia de usuarios. Esto permite a los diseñadores trabajar en sus proyectos en su sistema operativo preferido sin comprometer la funcionalidad."
          p6="Al ser un proyecto de código abierto, Inkscape es gratuito para descargar, usar y modificar. Esto promueve la accesibilidad y la colaboración en el desarrollo del software, y garantiza que Inkscape siga siendo una opción viable para diseñadores de todo el mundo."
        />

        <Doc text="Instalar Inkscape" bg="#000000" fbg="#FFFFFF" download="1" url = "https://inkscape.org/release/inkscape-1.1/"/>

        <ResourcesPage language="Inkscape"
          videosArray={[
            [null, "Inkscape Tutorial for Beginners", "Inkscape", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Inkscape Advanced Techniques", "Inkscape", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Inkscape Tips and Tricks", "Inkscape", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default InkscapePage;
