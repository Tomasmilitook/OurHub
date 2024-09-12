import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/kotlin.png"
import aboutlogo from "../../../images/Kotlinabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function KotlinPage() {
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
        <PageLanguage style="Kotlin" title="Kotlin" subtitle="Kotlin Programming Language" bd_color="#7F52FF" about="Kotlin" logo={logo}/>
        <Aboutpage
          des="Kotlin es un lenguaje de programación moderno de tipo estático desarrollado por JetBrains. Fue lanzado en 2011 y ha experimentado un crecimiento significativo en popularidad desde entonces, especialmente entre los desarrolladores de Android. Kotlin está diseñado para ser interoperable con Java y se ejecuta en la JVM (Java Virtual Machine). Ofrece una sintaxis concisa y expresiva, así como características de seguridad y rendimiento que lo hacen ideal para el desarrollo de aplicaciones tanto en el lado del cliente como en el del servidor."
          logo={aboutlogo}
          li1="Interoperabilidad con Java"
          li2="Sintaxis concisa y expresiva"
          li3="Seguridad y rendimiento"
          li4="Multiplataforma"
          li5="Soporte oficial de Google para Android"
          li6="Activo y creciente ecosistema"
          p1="Kotlin se diseñó desde el principio para ser interoperable con Java, lo que significa que puede utilizar bibliotecas de Java existentes y viceversa. Esto permite a los desarrolladores aprovechar el rico ecosistema de Java mientras disfrutan de las ventajas de la sintaxis moderna de Kotlin."
          p2="Kotlin ofrece una sintaxis concisa y expresiva que permite a los desarrolladores escribir código más limpio y legible en menos líneas. Esto facilita la comprensión del código y reduce la probabilidad de errores y bugs."
          p3="La seguridad y el rendimiento son características clave de Kotlin. El sistema de tipos estático de Kotlin atrapa muchos errores en tiempo de compilación que pasarían desapercibidos en otros lenguajes. Además, Kotlin se compila en bytecode de alta calidad que se ejecuta eficientemente en la JVM."
          p4="Kotlin es un lenguaje multiplataforma que puede utilizarse para desarrollar aplicaciones tanto en Android como en otros entornos, como servidores web, aplicaciones de escritorio y más. Esto permite a los desarrolladores compartir código entre diferentes plataformas y reducir la duplicación de esfuerzos."
          p5="Google ha respaldado oficialmente Kotlin como un lenguaje de programación de primera clase para el desarrollo de aplicaciones Android. Esto significa que Kotlin es compatible con todas las API de Android y recibe actualizaciones y mejoras continuas junto con Android Studio."
          p6="Kotlin cuenta con un activo y creciente ecosistema de bibliotecas, herramientas y marcos de trabajo que facilitan el desarrollo de aplicaciones en Kotlin. JetBrains, la empresa detrás de Kotlin, proporciona soporte y recursos adicionales a la comunidad de Kotlin."
        />

        <Doc text="Kotlin Docs" bg="#7F52FF" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="Kotlin"
          videosArray={[
            [null, "Kotlin Tutorial for Beginners", "Codecademy", "https://www.youtube.com/watch?v=123"],
            [null, "Kotlin Programming Course", "freeCodeCamp.org", "https://www.youtube.com/watch?v=456"],
            [null, "Kotlin Android Development", "Telusko", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default KotlinPage;
