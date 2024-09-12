import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/AdobePhotoshop.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

function AdobePhotoshopPage() {
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
        <PageLanguage install={true} style="Adobe Photoshop" title="Adobe Photoshop" subtitle="Raster Graphics Editor" bd_color="#001F3F" about="Adobe Photoshop" logo={logo}/>
        <Aboutpage
          des="Adobe Photoshop es un editor de gráficos rasterizados utilizado para el retoque y la manipulación de imágenes digitales. Es ampliamente utilizado por fotógrafos, diseñadores gráficos, artistas digitales y profesionales del diseño para realizar una amplia gama de tareas de edición y composición."
          logo={aboutlogo}
          li1="Edición y retoque de imágenes"
          li2="Composición y diseño"
          li3="Manipulación avanzada de imágenes"
          li4="Trabajo con capas y máscaras"
          li5="Herramientas de pintura y dibujo"
          li6="Integración con Adobe Creative Cloud"
          p1="Adobe Photoshop ofrece herramientas potentes para la edición y el retoque de imágenes, lo que permite a los usuarios ajustar el color, la exposición, el contraste y otros aspectos de una imagen. Sus herramientas de retoque incluyen opciones para eliminar imperfecciones, suavizar la piel, corregir el color y mucho más."
          p2="Con herramientas de composición y diseño, Adobe Photoshop permite a los usuarios combinar múltiples imágenes, gráficos y elementos de diseño en una sola composición. Esto incluye la capacidad de trabajar con capas, máscaras, selecciones y efectos para crear composiciones complejas y visualmente impresionantes."
          p3="Adobe Photoshop proporciona herramientas avanzadas para la manipulación de imágenes, incluyendo ajustes de transformación, distorsión, perspectiva y más. Esto permite a los usuarios modificar el aspecto de una imagen de formas creativas y expresivas."
          p4="Con un sistema de capas y máscaras, Adobe Photoshop ofrece un control preciso sobre la composición y la edición de imágenes. Los usuarios pueden organizar elementos en capas separadas, aplicar máscaras para ocultar o revelar partes de una imagen y ajustar la opacidad y el modo de fusión de cada capa."
          p5="Adobe Photoshop incluye herramientas de pintura y dibujo que permiten a los usuarios crear arte digital, ilustraciones y gráficos con pinceles personalizables, herramientas de texto, formas vectoriales y más. Esto hace que Photoshop sea una opción popular entre los artistas digitales y los ilustradores."
          p6="Como parte de Adobe Creative Cloud, Adobe Photoshop se integra con otras aplicaciones de Adobe, como Illustrator, InDesign y Lightroom. Esto permite a los usuarios trabajar de forma fluida entre diferentes aplicaciones y compartir archivos sin problemas en todo el ecosistema de Adobe."
        />

        <Doc text="Instalar Adobe Photoshop" bg="#001F3F" fbg="#FFFFFF" download="1" url = "https://www.adobe.com/products/photoshop.html"/>

        <ResourcesPage language="Adobe Photoshop"
          videosArray={[
            [null, "Adobe Photoshop Tutorial for Beginners", "Adobe", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Adobe Photoshop Advanced Techniques", "Adobe", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Adobe Photoshop Tips and Tricks", "Adobe", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default AdobePhotoshopPage;
