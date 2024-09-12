import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/AdobeAfterEffects.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';




function AdobeAfterEffectsPage() {
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
        <PageLanguage install={true} style="Adobe After Effects" title="Adobe After Effects" subtitle="Motion Graphics and Visual Effects Software" bd_color="#D291BC" about="After Effects" logo={logo}/>
        <Aboutpage
          des="Adobe After Effects es una aplicación de software para crear efectos visuales y gráficos en movimiento utilizados en la postproducción de video, así como en la producción de animaciones. Es ampliamente utilizado en la industria cinematográfica y televisiva para la creación de efectos especiales, animaciones y gráficos en movimiento."
          logo={aboutlogo}
          li1="Creación de efectos visuales"
          li2="Producción de animaciones"
          li3="Gráficos en movimiento"
          li4="Postproducción de video"
          li5="Ampliamente utilizado en la industria"
          li6="Integración con otros productos de Adobe"
          p1="Adobe After Effects proporciona una amplia gama de herramientas para crear efectos visuales impresionantes, como efectos de partículas, composiciones en 3D, efectos de texto animado y mucho más. Los usuarios pueden combinar múltiples elementos para crear resultados visualmente impactantes."
          p2="Los animadores y diseñadores utilizan After Effects para crear animaciones complejas y realistas, desde simples gráficos animados hasta personajes completamente animados. La herramienta ofrece controles precisos sobre la animación, permitiendo la creación de movimientos fluidos y expresivos."
          p3="Con su conjunto de herramientas de animación y composición, After Effects es una opción popular para la creación de gráficos en movimiento, como títulos de crédito, animaciones de logotipos, presentaciones y más. Los usuarios pueden crear diseños dinámicos que capturan la atención del espectador."
          p4="Adobe After Effects se utiliza en la etapa de postproducción de video para agregar efectos visuales, corregir el color, realizar composiciones complejas y más. Es una herramienta esencial para los profesionales que trabajan en la edición y mejora de videos y películas."
          p5="Debido a su potencia y versatilidad, Adobe After Effects es ampliamente utilizado en la industria del cine, la televisión, la publicidad y el diseño gráfico. Es una herramienta fundamental para la creación de efectos visuales impresionantes en proyectos multimedia."
          p6="Adobe After Effects se integra perfectamente con otros productos de Adobe, como Adobe Premiere Pro, Photoshop e Illustrator. Esto permite a los usuarios trabajar de manera fluida entre diferentes aplicaciones, aprovechando al máximo el ecosistema creativo de Adobe."
        />

        <Doc text="Instalar Adobe AE" bg="#D291BC" fbg="#181818" download=".1" url = "https://www.adobe.com/products/aftereffects.html"/>

        <ResourcesPage language="Adobe After Effects"
          videosArray={[
            [null, "Getting Started with Adobe After Effects", "Tutvid", "https://www.youtube.com/watch?v=ZzV-v7UzRuU"],
            [null, "Adobe After Effects Tutorials for Beginners", "Skillshare", "https://www.youtube.com/watch?v=gdSi4nnOAKY"],
            [null, "Mastering Animation in Adobe After Effects", "School of Motion", "https://www.youtube.com/watch?v=zS_qXvrVUcQ"]
          ]}
        />
      </div>
    </div>
  );
}

export default AdobeAfterEffectsPage;
