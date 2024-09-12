import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/AdobeIllustrator.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function AdobeIllustratorPage() {
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
        <PageLanguage install={true} style="Adobe Illustrator" title="Adobe Illustrator" subtitle="Vector Graphics Editor" bd_color="#FF9A00" about="Adobe Illustrator" logo={logo}/>
        <Aboutpage
          des="Adobe Illustrator es un editor de gráficos vectoriales utilizado para crear ilustraciones, logotipos, diagramas, iconos y otros tipos de arte visual. Es ampliamente utilizado por diseñadores gráficos, ilustradores, artistas y profesionales del diseño para crear contenido visualmente impresionante."
          logo={aboutlogo}
          li1="Creación de gráficos vectoriales"
          li2="Dibujo y pintura"
          li3="Tipografía"
          li4="Edición de imágenes"
          li5="Diseño de logotipos y branding"
          li6="Integración con Adobe Creative Cloud"
          p1="Adobe Illustrator es una herramienta poderosa para la creación de gráficos vectoriales, lo que permite a los usuarios crear arte escalable con precisión y flexibilidad. Sus herramientas de dibujo incluyen formas básicas, pluma, pincel, lápiz y más, ofreciendo un amplio conjunto de opciones para la creación de arte vectorial."
          p2="Con herramientas de dibujo y pintura avanzadas, Adobe Illustrator permite a los usuarios crear ilustraciones y arte digital con una amplia variedad de estilos y técnicas. Esto incluye la capacidad de aplicar efectos de pincel, mezclar colores y crear efectos artísticos únicos."
          p3="Adobe Illustrator ofrece una amplia gama de opciones tipográficas para diseñar y manipular texto. Los usuarios pueden crear y editar texto de forma libre, así como aplicar efectos de texto, ajustar kerning y espaciado, y trabajar con fuentes personalizadas."
          p4="Además de sus capacidades vectoriales, Adobe Illustrator incluye herramientas para la edición de imágenes y el retoque fotográfico. Esto permite a los usuarios importar imágenes rasterizadas, realizar ajustes de color, aplicar efectos y exportar imágenes en una variedad de formatos."
          p5="Adobe Illustrator es ampliamente utilizado en el diseño de logotipos, branding y diseño de identidad visual. Sus herramientas de diseño de logotipos incluyen opciones para crear formas, combinar elementos, ajustar colores y trabajar con texto, lo que permite a los diseñadores crear logotipos distintivos y memorables."
          p6="Como parte de Adobe Creative Cloud, Adobe Illustrator se integra con otras aplicaciones de Adobe, como Photoshop, InDesign y After Effects. Esto permite a los usuarios trabajar de forma fluida entre diferentes aplicaciones y compartir archivos sin problemas en todo el ecosistema de Adobe."
        />

        <Doc text="Instalar Adobe Illustrator" bg="#FF9A00" fbg="#000000" download="1" url = "https://www.adobe.com/products/illustrator.html"/>

        <ResourcesPage language="Adobe Illustrator"
          videosArray={[
            [null, "Adobe Illustrator Tutorial for Beginners", "Adobe", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Adobe Illustrator Advanced Techniques", "Adobe", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Adobe Illustrator Tips and Tricks", "Adobe", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default AdobeIllustratorPage;
