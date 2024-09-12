import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/react.png"
import aboutlogo from "../../../images/ReactNabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function ReactNativePage() {
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
        <PageLanguage style="JavaScript" title="React Native" subtitle="React Native Framework" bd_color="#61DBFB" about="React Native" logo={logo}/>
        <Aboutpage
          des="React Native es un framework de desarrollo de aplicaciones móviles creado por Facebook que permite a los desarrolladores construir aplicaciones móviles nativas utilizando JavaScript y React. Fue lanzado por primera vez en 2015 y se ha convertido en una opción popular para el desarrollo de aplicaciones móviles tanto en iOS como en Android debido a su enfoque en la eficiencia, la productividad y la experiencia de usuario nativa."
          logo={aboutlogo}
          li1="Desarrollo de aplicaciones nativas"
          li2="JavaScript y React"
          li3="Reutilización de componentes"
          li4="Alto rendimiento"
          li5="Acceso a API nativas"
          li6="Comunidad activa y bibliotecas adicionales"
          p1="React Native permite a los desarrolladores construir aplicaciones móviles nativas utilizando JavaScript y React, lo que permite una mayor reutilización de código y una eficiencia de desarrollo mejorada. Esto reduce significativamente el tiempo y los costos de desarrollo al permitir a los desarrolladores crear aplicaciones móviles para iOS y Android con un solo código base compartido."
          p2="React Native aprovecha las características de JavaScript y React, como la creación declarativa de interfaces de usuario y el uso de componentes reutilizables, lo que facilita el desarrollo y la comprensión del código. Esto permite a los desarrolladores construir aplicaciones móviles de alta calidad con una curva de aprendizaje más rápida."
          p3="React Native permite a los desarrolladores reutilizar componentes de interfaz de usuario en toda la aplicación, lo que facilita la creación de interfaces de usuario coherentes y bien diseñadas. Esto mejora la experiencia del usuario y reduce la complejidad del desarrollo al permitir a los desarrolladores centrarse en la lógica de la aplicación en lugar de en la creación de interfaces de usuario."
          p4="React Native ofrece un rendimiento comparable al de las aplicaciones móviles nativas, ya que compila componentes de interfaz de usuario a código nativo. Esto garantiza una experiencia de usuario fluida y receptiva en todas las plataformas y dispositivos."
          p5="React Native proporciona acceso a API nativas y módulos de plataforma a través de un puente JavaScript nativo, lo que permite a los desarrolladores acceder a características y funcionalidades específicas de la plataforma, como la cámara, el GPS y las notificaciones push."
          p6="React Native cuenta con una comunidad activa de desarrolladores y una amplia gama de bibliotecas adicionales y complementos que pueden mejorar y ampliar las capacidades del framework. Esto proporciona a los desarrolladores acceso a recursos adicionales y soporte de la comunidad."
        />

        <Doc text="React Native Docs" bg="#61DBFB" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="React Native"
          videosArray={[
            [null, "React Native Tutorial for Beginners", "The Net Ninja", "https://www.youtube.com/watch?v=123"],
            [null, "React Native Crash Course", "Traversy Media", "https://www.youtube.com/watch?v=456"],
            [null, "React Native Full Course", "freeCodeCamp.org", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default ReactNativePage;
