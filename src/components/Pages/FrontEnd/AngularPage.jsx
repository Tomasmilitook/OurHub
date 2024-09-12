import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/angular.png"
import aboutlogo from "../../../images/Angularabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function AngularPage() {
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
          <PageLanguage style="Angular" title="Angular" subtitle="Angular Framework" bd_color="#DD0031" about="Angular" logo={logo}/>
          <Aboutpage
            des="Angular es un marco de desarrollo para construir aplicaciones web dinámicas y de una sola página. Desarrollado y mantenido por Google, fue lanzado inicialmente en 2010 como AngularJS, para luego ser completamente reescrito y lanzado como Angular 2 en 2016. Angular utiliza TypeScript, un superconjunto de JavaScript, ofreciendo herramientas robustas para desarrollar aplicaciones grandes y escalables."
            logo = {aboutlogo}
            li1="Desarrollo de aplicaciones web dinámicas"
            li2="Utiliza TypeScript para mayor robustez"
            li3="Facilita el desarrollo de aplicaciones de una sola página (SPA)"
            li4="Inyección de dependencias integrada"
            li5="Arquitectura de componentes y servicios"
            li6="Gestión eficiente del estado y enrutamiento"
            p1="Angular proporciona una plataforma coherente para el desarrollo, con un conjunto de herramientas integradas que incluyen inyección de dependencias, enrutamiento, animaciones, y más. Esto permite a los desarrolladores construir aplicaciones complejas de manera más eficiente."
            p2="La arquitectura de Angular se centra en la reutilización de componentes, lo que facilita la gestión y mantenimiento del código. Los componentes se pueden encapsular y reutilizar a través de diferentes partes de la aplicación, mejorando así la coherencia y la facilidad de prueba."
            p3="Con su sistema de inyección de dependencias, Angular simplifica la configuración y la integración de diferentes servicios en las aplicaciones, lo que resulta en un código más modular y fácil de mantener."
            p4="Angular también incluye un potente sistema de enrutamiento que ayuda en la construcción de aplicaciones de una sola página (SPA), donde la navegación entre vistas se realiza sin recargar la página completa, ofreciendo una experiencia de usuario fluida y rápida."
            p5="El enfoque de Angular hacia el desarrollo frontend promueve prácticas de desarrollo limpias y eficientes, con una curva de aprendizaje que se compensa con la escalabilidad y mantenibilidad del código."
            p6="En resumen, Angular es un framework completo para el desarrollo de aplicaciones web modernas, ofreciendo un rico conjunto de características y herramientas que permiten a los desarrolladores construir aplicaciones robustas, eficientes y fácilmente mantenibles."
          />
  
          <Doc text="Angular Docs" bg="#DD0031" fbg="#181818" download=".1" pdf={documentation}/>
  
          <ResourcesPage language="Angular"
            videosArray={[
              [sergieC, "ANGULAR desde cero", "Sergie Code", "https://www.youtube.com/watch?v=soInCF7nbDw&pp=ygUNYW5ndWxhciBjdXJzbw%3D%3D"],
              [Midudev, "Aprende ANGULAR 17", "Midudev", "https://www.youtube.com/watch?v=f7unUpshmpA&pp=ygUNYW5ndWxhciBjdXJzbw%3D%3D"],
              [pildoras, "Curso Angular", "Pildoras Informaticas", "https://www.youtube.com/watch?v=fXpMiweCC_o&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO"]
            ]}
          />
        </div>
      </div>
    );
    
  }
  
  export default AngularPage;
  