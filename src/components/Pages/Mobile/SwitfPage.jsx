import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/swift.png"
import aboutlogo from "../../../images/Swiftabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"
function SwiftPage() {
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
        <PageLanguage style="Swift" title="Swift" subtitle="Swift Programming Language" bd_color="#FF3B30" about="Swift" logo={logo}/>
        <Aboutpage
          des="Swift es un lenguaje de programación de código abierto desarrollado por Apple para crear aplicaciones para iOS, macOS, watchOS y tvOS. Fue lanzado por primera vez en 2014 como un reemplazo más seguro y moderno para Objective-C. Swift combina potencia y expresividad con un sintaxis clara y concisa, lo que lo hace ideal para el desarrollo de aplicaciones tanto para principiantes como para desarrolladores experimentados."
          logo={aboutlogo}
          li1="Seguridad y rendimiento"
          li2="Sintaxis clara y concisa"
          li3="Interoperabilidad con Objective-C"
          li4="Multiplataforma"
          li5="Activa y creciente comunidad"
          li6="Soporte oficial de Apple"
          p1="Swift está diseñado para ser seguro y eficiente. Utiliza inferencia de tipos para atrapar errores en tiempo de compilación y proporciona características como opcionales, guardias y estructuras de datos inmutables que ayudan a evitar bugs y mejorar el rendimiento."
          p2="La sintaxis de Swift es clara y concisa, lo que facilita la lectura y escritura de código. Características como la eliminación automática de semicolons y la inferencia de tipos reducen la verbosidad del código y hacen que el desarrollo sea más rápido y menos propenso a errores."
          p3="Swift es interoperable con Objective-C, lo que significa que puede utilizar bibliotecas de Objective-C existentes y viceversa. Esto permite a los desarrolladores migrar gradualmente el código existente a Swift y aprovechar las ventajas de ambos lenguajes."
          p4="Swift es un lenguaje multiplataforma que puede utilizarse para desarrollar aplicaciones no solo para iOS, sino también para macOS, watchOS y tvOS. Esto permite a los desarrolladores compartir código entre diferentes plataformas y maximizar la reutilización del código."
          p5="Swift cuenta con una activa y creciente comunidad de desarrolladores que comparten recursos, bibliotecas y experiencias de desarrollo. Apple proporciona soporte oficial para Swift y sigue mejorando el lenguaje y las herramientas en cada nueva versión."
          p6="Apple respalda oficialmente Swift como el lenguaje de programación principal para el desarrollo de aplicaciones para sus plataformas, lo que garantiza un soporte continuo y actualizaciones regulares del lenguaje y las herramientas."
        />

        <Doc text="Swift Docs" bg="#FF3B30" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="Swift"
          videosArray={[
            [null, "Swift Tutorial for Beginners", "CodeWithChris", "https://www.youtube.com/watch?v=123"],
            [null, "iOS App Development Course", "The Swift Guy", "https://www.youtube.com/watch?v=456"],
            [null, "SwiftUI Tutorials", "Paul Hudson", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default SwiftPage;
