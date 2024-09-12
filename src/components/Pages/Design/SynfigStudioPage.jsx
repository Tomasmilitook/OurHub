import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/SynfigStudio.webp"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

function SynfigStudioPage() {
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
        <PageLanguage install={true} style="Synfig Studio" title="Synfig Studio" subtitle="2D Animation Software" bd_color="#89CFF0" about="Synfig Studio" logo={logo}/>
        <Aboutpage
          des="Synfig Studio es un software de animación 2D gratuito y de código abierto disponible para Windows, Linux y macOS. Es una herramienta potente para la creación de animaciones, permitiendo a los usuarios crear contenido animado de alta calidad utilizando técnicas de animación vectorial y de mapa de bits."
          logo={aboutlogo}
          li1="Animación 2D avanzada"
          li2="Interpolación de esqueleto"
          li3="Capas y efectos flexibles"
          li4="Soporte multiplataforma"
          li5="Curvas y rutas"
          li6="Licencia de código abierto"
          p1="Synfig Studio ofrece capacidades avanzadas para la creación de animaciones 2D, incluida la capacidad de trabajar con capas vectoriales y de mapa de bits, deformaciones, interpolación de esqueletos y más. Esto permite a los animadores crear una amplia variedad de contenido, desde simples animaciones hasta proyectos complejos."
          p2="La interpolación de esqueletos en Synfig Studio permite a los usuarios crear animaciones más orgánicas y realistas mediante la aplicación de movimientos articulados a los personajes y objetos. Esta técnica es especialmente útil para animaciones de personajes y efectos de movimiento complejos."
          p3="Con un sistema de capas y efectos flexible, Synfig Studio ofrece a los usuarios un control completo sobre la apariencia y el comportamiento de sus animaciones. Los usuarios pueden aplicar una variedad de efectos y ajustes a cada capa, lo que permite una gran personalización y creatividad en el proceso de animación."
          p4="Al ser una aplicación multiplataforma, Synfig Studio está disponible para Windows, Linux y macOS, lo que permite a los usuarios trabajar en sus proyectos en diferentes sistemas operativos sin problemas de compatibilidad."
          p5="Synfig Studio ofrece herramientas avanzadas para trabajar con curvas y rutas, lo que permite a los usuarios crear animaciones con movimientos suaves y fluidos. Esto es especialmente útil para animaciones de movimiento complejas, como trayectorias de movimiento y efectos de deformación."
          p6="Synfig Studio se distribuye bajo una licencia de código abierto, lo que significa que es gratuito para descargar, usar y modificar. Esto hace que sea accesible para una amplia comunidad de usuarios y fomenta la colaboración y el desarrollo continuo del software."
        />

        <Doc text="Instalar Synfig Studio" bg="#89CFF0" fbg="#181818" download=".1" url = "https://www.synfig.org/download/"/>

        <ResourcesPage language="Synfig Studio"
          videosArray={[
            [null, "Synfig Studio Tutorial for Beginners", "Synfig", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Synfig Studio Character Animation Tutorial", "Carlos Monteiro", "https://www.youtube.com/watch?v=DaL5gCbQkpo"],
            [null, "Synfig Studio Advanced Techniques", "Synfig", "https://www.youtube.com/watch?v=ffyhRn2QoVU"]
          ]}
        />
      </div>
    </div>
  );
}

export default SynfigStudioPage;
