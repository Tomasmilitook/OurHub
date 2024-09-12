import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/Cinema4D.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

function Cinema4DPage() {
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
        <PageLanguage install={true} style="Cinema 4D" title="Cinema 4D" subtitle="3D Modeling, Animation, and Rendering Software" bd_color="#E5177D" about="Cinema 4D" logo={logo}/>
        <Aboutpage
          des="Cinema 4D es un software de modelado, animación y renderizado 3D desarrollado por Maxon. Es ampliamente utilizado en la industria del cine, la televisión, el diseño de videojuegos y la visualización arquitectónica para crear contenido visualmente impresionante en 3D."
          logo={aboutlogo}
          li1="Modelado 3D"
          li2="Animación y rigging"
          li3="Renderizado fotorrealista"
          li4="Simulación y dinámicas"
          li5="Motion graphics"
          li6="Integración con herramientas de postproducción"
          p1="Cinema 4D ofrece una amplia gama de herramientas para el modelado 3D, incluyendo modelado poligonal, esculpido, texturizado y pintura. Esto permite a los artistas crear una variedad de objetos y personajes con detalle y precisión."
          p2="Con herramientas de animación y rigging, Cinema 4D permite a los usuarios dar vida a sus modelos 3D mediante la creación de esqueletos, controladores y animaciones. Esto incluye técnicas avanzadas como la animación de personajes y la simulación de movimiento."
          p3="Cinema 4D cuenta con un motor de renderizado integrado que permite a los usuarios crear imágenes fotorrealistas y animaciones de alta calidad. Ofrece opciones de renderizado en tiempo real y por lotes, así como soporte para iluminación global, sombreado y efectos visuales avanzados."
          p4="Además de sus capacidades de modelado y animación, Cinema 4D incluye herramientas para la simulación física y las dinámicas, que permiten a los usuarios simular fluidos, tejidos, partículas y más. Esto es útil para la creación de efectos especiales, animaciones realistas y simulaciones científicas."
          p5="Cinema 4D es ampliamente utilizado en la creación de motion graphics para televisión, publicidad y videos musicales. Sus herramientas de motion graphics permiten a los usuarios crear animaciones de texto, gráficos en movimiento y efectos visuales dinámicos con facilidad."
          p6="Cinema 4D se integra con una variedad de herramientas de postproducción, como Adobe After Effects, Photoshop y Illustrator. Esto permite a los usuarios importar fácilmente proyectos de Cinema 4D en sus flujos de trabajo de postproducción y realizar ajustes finales en sus proyectos."
        />

        <Doc text="Instalar Cinema 4D" bg="#E5177D" fbg="#FFFFFF" download="1" url = "https://www.maxon.net/en/cinema-4d/"/>

        <ResourcesPage language="Cinema 4D"
          videosArray={[
            [null, "Cinema 4D Tutorial for Beginners", "Maxon", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Cinema 4D Advanced Techniques", "Maxon", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Cinema 4D Motion Graphics Tutorial", "Maxon", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default Cinema4DPage;
