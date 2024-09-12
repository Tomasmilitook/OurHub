import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/nodejs.png"
import aboutlogo from "../../../images/Nodeabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function NodeJSPage() {
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
        <PageLanguage style="Node.js" title="Node.js" subtitle="JavaScript runtime built on Chrome's V8 engine" bd_color="#68A063" about="Node.js" logo={logo}/>
        <Aboutpage
          des="Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Chrome. Fue creado por Ryan Dahl en 2009 y desde entonces ha ganado popularidad en el desarrollo de aplicaciones web y servidores. Node.js utiliza un modelo de entrada/salida sin bloqueo y orientado a eventos, lo que lo hace ideal para aplicaciones escalables y de alta concurrencia."
          logo={aboutlogo}
          li1="Entorno de ejecución de JavaScript en el lado del servidor"
          li2="Modelo de entrada/salida sin bloqueo y orientado a eventos"
          li3="Altamente escalable y eficiente en términos de recursos"
          li4="Amplia variedad de módulos y paquetes disponibles"
          li5="Facilita el desarrollo de aplicaciones en tiempo real"
          li6="Comunidad activa y soporte extenso"
          p1="Node.js permite ejecutar código JavaScript en el lado del servidor, lo que unifica el desarrollo tanto del lado del cliente como del servidor bajo un mismo lenguaje de programación, facilitando la coherencia y la reutilización del código."
          p2="El modelo de entrada/salida sin bloqueo y orientado a eventos de Node.js permite manejar múltiples solicitudes concurrentes de manera eficiente, lo que lo hace ideal para aplicaciones escalables y de alta concurrencia, como las aplicaciones web en tiempo real."
          p3="Node.js es altamente escalable y eficiente en términos de recursos debido a su arquitectura basada en eventos. Puede manejar una gran cantidad de solicitudes con un consumo mínimo de recursos, lo que lo hace ideal para aplicaciones que necesitan escalar horizontalmente."
          p4="El ecosistema de Node.js cuenta con una amplia variedad de módulos y paquetes disponibles a través de npm (Node Package Manager), lo que facilita la integración de funcionalidades adicionales en las aplicaciones de forma rápida y sencilla."
          p5="Node.js es especialmente adecuado para el desarrollo de aplicaciones en tiempo real, como aplicaciones de chat, juegos multijugador, sistemas de votación en tiempo real y más, gracias a su capacidad para manejar conexiones de larga duración de forma eficiente."
          p6="La comunidad de Node.js es activa y ofrece un amplio soporte, con una gran cantidad de recursos de aprendizaje disponibles, incluyendo documentación oficial, tutoriales, cursos en línea y una comunidad de desarrolladores dispuesta a ayudar."
        />

        <Doc text="Node.js Docs" bg="#68A063" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="Node.js"
          videosArray={[
            [null, "Curso Completo de Node.js", "Fernando Herrera", "https://www.youtube.com/watch?v=123"],
            [null, "Node.js: Guía para principiantes", "Academind", "https://www.youtube.com/watch?v=456"],
            [null, "Introducción a Node.js", "The Net Ninja", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default NodeJSPage;
