import React from 'react'
import "./pagesStyle.css"


// imagenes
import HTMLMidudev  from "./imagesresourses/HTMLMidudev.jpg"
import HTMLdalto  from "./imagesresourses/HTMLdalto.jpg"
import HTMLsergieCode  from "./imagesresourses/HTMLsergieCode.jpg"

// Logos
import logo from "../../../images_logos/html-5.png"
import aboutlogo from "../../../images/HTMLabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/HTMLDoc.pdf"



function HTMLPage() {
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
        <PageLanguage style="CSS" title="HTML" subtitle="Hypertext Markup Language" bd_color="#FF5722" about="HTML" logo={logo}/>
        <Aboutpage
          des="Hypertext Markup Language (HTML) es el lenguaje estándar para crear páginas web. Fue creado por Tim Berners-Lee en 1990 como parte del World Wide Web Project. HTML se utiliza para estructurar el contenido de una página web y define la jerarquía y el significado de los elementos en ella."
          logo={aboutlogo}
          li1="Estructura de la página web"
          li2="Hipertexto y enlaces"
          li3="Etiquetas semánticas"
          li4="Compatibilidad con diferentes navegadores"
          li5="Integración con otras tecnologías web"
          li6="Facilidad de aprendizaje y uso"
          p1="HTML se utiliza para definir la estructura básica de una página web, incluidos elementos como encabezados, párrafos, listas, enlaces y otros elementos de contenido."
          p2="Una de las características clave de HTML es su capacidad para crear hipertexto, lo que permite enlazar documentos y recursos relacionados en la web. Los enlaces HTML permiten a los usuarios navegar de una página a otra con facilidad."
          p3="HTML5 introduce una serie de etiquetas semánticas que permiten a los desarrolladores especificar el significado y la estructura del contenido de manera más precisa. Esto mejora la accesibilidad y la indexabilidad de las páginas web."
          p4="HTML es compatible con todos los navegadores web modernos, lo que garantiza que el contenido se renderice correctamente en diferentes plataformas y dispositivos."
          p5="HTML se integra estrechamente con otras tecnologías web, como CSS para el diseño y JavaScript para la interactividad, lo que permite crear experiencias web ricas y dinámicas."
          p6="Debido a su sintaxis sencilla y su amplia documentación, HTML es fácil de aprender y usar para crear páginas web básicas y avanzadas."
        />
  
        <Doc text="HTML Docs" bg="#FF5722" fbg="#181818" download=".1" pdf={documentation}/>
  
        <ResourcesPage language="HTML"
          videosArray={[
            [HTMLMidudev, "Curso completo de HTML", "Midudev", "https://www.youtube.com/watch?v=3nYLTiY5skU&pp=ygUKaHRtbCBjdXJzbw%3D%3D"],
            [HTMLdalto, "HTML Curso Completo", "Soy dalto", "https://www.youtube.com/watch?v=kN1XP-Bef7w&pp=ygUKaHRtbCBjdXJzbw%3D%3D"],
            [HTMLsergieCode, "HTML desde 0", "Sergie Code", "https://www.youtube.com/watch?v=bNV6iw13Rnk&pp=ygUKaHRtbCBjdXJzbw%3D%3D"]
          ]}
        />
      </div>
    </div>
  );
}

export default HTMLPage;
