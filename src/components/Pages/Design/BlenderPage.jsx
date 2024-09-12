import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/Blender.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function BlenderPage() {
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
        <PageLanguage install={true} style="Blender" title="Blender" subtitle="Open Source 3D Creation Suite" bd_color="#F5792A" about="Blender" logo={logo}/>
        <Aboutpage
          des="Blender es una suite de creación 3D de código abierto que ofrece una amplia gama de herramientas para modelado, animación, renderizado, composición, edición de video y más. Es utilizado por artistas, animadores, diseñadores y desarrolladores para crear contenido 3D de alta calidad."
          logo={aboutlogo}
          li1="Modelado 3D"
          li2="Animación y rigging"
          li3="Renderizado"
          li4="Edición de video y VFX"
          li5="Simulación y dinámicas"
          li6="Licencia de código abierto"
          p1="Blender ofrece potentes herramientas para el modelado 3D, incluyendo modelado poligonal, esculpido, texturizado y pintura. Esto permite a los artistas crear una amplia variedad de objetos y personajes con detalle y precisión."
          p2="Con herramientas de animación y rigging, Blender permite a los usuarios dar vida a sus modelos 3D mediante la creación de esqueletos, controladores y animaciones. Esto incluye técnicas avanzadas como la animación de personajes y la simulación de movimiento."
          p3="Blender cuenta con un motor de renderizado integrado que permite a los usuarios crear imágenes fotorrealistas y animaciones de alta calidad. Ofrece opciones de renderizado en tiempo real y por lotes, así como soporte para iluminación global, sombreado y efectos visuales avanzados."
          p4="Además de su funcionalidad 3D, Blender incluye herramientas para la edición de video y efectos visuales. Los usuarios pueden importar clips de video, agregar efectos, editar secuencias y renderizar proyectos completos, todo dentro de la misma aplicación."
          p5="Blender ofrece herramientas para simulaciones físicas y dinámicas, que permiten a los usuarios simular fluidos, tejidos, partículas y más. Esto es útil para la creación de efectos especiales, animaciones realistas y simulaciones científicas."
          p6="Como proyecto de código abierto, Blender es gratuito para descargar, usar y modificar. Esto lo hace accesible para una amplia comunidad de usuarios y fomenta la colaboración y el desarrollo continuo del software."
        />

        <Doc text="Instalar Blender" bg="#F5792A" fbg="#FFFFFF" download="1" url = "https://www.blender.org/download/"/>

        <ResourcesPage language="Blender"
          videosArray={[
            [null, "Blender Tutorial for Beginners", "Blender", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Blender Advanced Techniques", "Blender", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Blender Animation Tips", "Blender", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default BlenderPage;
