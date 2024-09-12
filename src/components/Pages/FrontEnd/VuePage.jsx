import React from 'react'
import "./pagesStyle.css"

// imagenes
import abidev  from "./imagesresourses/VUEabidev.jpg"
import bluuweb  from "./imagesresourses/VUEbluuweb.jpg"
import gogodev  from "./imagesresourses/VUEgogodev.jpg"

// Logos
import logo from "../../../images_logos/vue.png"
import aboutlogo from "../../../images/Vueabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function VuePage() {
    function load() {
      setTimeout(() => {
        const inicio = document.querySelector(".ocultar")
        inicio.classList.add("mostrar")
      }, 500);
    }
    load()
    return (
      <div className='ocultar'>
        <div>
          <PageLanguage style="Vue" title="Vue.js" subtitle="The Progressive JavaScript Framework" bd_color="#4FC08D" about="Vue.js" logo={logo}/>
          <Aboutpage
            des="Vue.js es un marco progresivo para construir interfaces de usuario. Fue creado por Evan You en 2014 y desde entonces ha ganado popularidad por su facilidad de adopción y su enfoque versátil para el desarrollo web. Vue está diseñado desde el principio para ser adoptado incrementalmente, y la biblioteca se centra en la capa de vista, lo que facilita la integración con otras bibliotecas o proyectos existentes."
            logo = {aboutlogo}
            li1="Facilidad de adopción e integración"
            li2="Enfoque versátil para el desarrollo web"
            li3="Arquitectura de componentes reactivos"
            li4="Ecosistema rico y escalable"
            li5="Rendimiento óptimo y eficiente"
            li6="Comunidad activa y creciente"
            p1="Vue.js facilita la construcción de aplicaciones complejas a través de una arquitectura de componentes reactivos y componibles, permitiendo a los desarrolladores crear interfaces de usuario ricas y interactivas de manera eficiente."
            p2="El ecosistema de Vue, con herramientas como Vue Router para el enrutamiento de aplicaciones y Vuex para la gestión del estado, proporciona una solución integral para el desarrollo de aplicaciones web modernas."
            p3="Además de ser fácilmente integrable en proyectos existentes, Vue.js es lo suficientemente poderoso para impulsar aplicaciones sofisticadas de una sola página (SPA), ofreciendo una experiencia de usuario fluida y reactiva."
            p4="Vue.js se destaca por su rendimiento óptimo, con una implementación eficiente de la actualización del DOM y técnicas de optimización que minimizan la sobrecarga y maximizan la eficiencia."
            p5="La comunidad de Vue.js es activa y acogedora, con una amplia gama de recursos de aprendizaje disponibles, desde documentación oficial hasta tutoriales y cursos en línea, lo que facilita a los nuevos desarrolladores empezar a trabajar con Vue."
            p6="En resumen, Vue.js es una excelente elección para aquellos que buscan un framework moderno, eficiente y fácil de usar para el desarrollo de interfaces de usuario y aplicaciones web."
          />
  
          <Doc text="Vue.js Docs" bg="#4FC08D" fbg="#181818" download=".1" pdf={documentation}/>
  
          <ResourcesPage language="Vue"
            videosArray={[
              [abidev, "Curso de Vue 3 con Typescript", "Abidev", "https://www.youtube.com/watch?v=wwQNOgs-6uo&list=PLQYSrHr7fEYlZ8WOMaVFq13hAVsYb8AQH"],
              [bluuweb, "Curso de Vue JS", "Bluuweb", "https://www.youtube.com/watch?v=PL-aTHv2L3E&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT"],
              [gogodev, "Curso de Vue 3 profesional", "Gogodev", "https://www.youtube.com/watch?v=LAozf_wDejU&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i"]
            ]}
          />
        </div>
      </div>
    );
    
  }
  
  export default VuePage;
  