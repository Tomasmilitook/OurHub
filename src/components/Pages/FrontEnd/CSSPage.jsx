import React from 'react'
import "./pagesStyle.css"

// imagenes
import DorianD  from "./imagesresourses/CSSDorianDesigns.jpg"
import dalto  from "./imagesresourses/CSSdalto.jpg"
import sergieC  from "./imagesresourses/CSSsergieCode.jpg"

// Logos
import logo from "../../../images_logos/css-3.png"
import aboutlogo from "../../../images/CSSabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"



function CSSPage() {
  function load() {
    setTimeout(() => {
        const inicio = document.querySelector(".ocultar")
        inicio.classList.add("mostrar")
    }, 500);
    
}
  load()
  return (
    <div className='ocultar' >
      <div>
        <PageLanguage style="CSS" title="CSS" subtitle="Cascading Style Sheets" bd_color="#2196F3" about="CSS" logo={logo}/>
        <Aboutpage
          des="Cascading Style Sheets (CSS) es un lenguaje utilizado para definir la presentación de documentos HTML. Junto con HTML y JavaScript, CSS es una de las tecnologías fundamentales de la World Wide Web. CSS fue propuesto por primera vez por Håkon Wium Lie en 1994 y ha pasado por varias revisiones desde entonces."
          logo = {aboutlogo}
          li1="Estilo de presentación"
          li2="Separación de contenido y diseño"
          li3="Fácil mantenimiento"
          li4="Compatibilidad con diferentes dispositivos"
          li5="Eficiencia en la carga"
          li6="Control de diseño"
          p1="CSS permite a los desarrolladores separar el contenido de un documento HTML de su presentación. Esto facilita la actualización y el mantenimiento de sitios web, ya que los cambios en el diseño se pueden hacer de manera centralizada en archivos CSS sin modificar el HTML."
          p2="Al separar el contenido del diseño, CSS permite a los desarrolladores adaptar la apariencia de un sitio web a diferentes dispositivos y tamaños de pantalla. Esto es fundamental para crear sitios web responsivos que funcionen bien en computadoras de escritorio, tabletas y teléfonos inteligentes."
          p3="Una de las principales ventajas de CSS es su capacidad para controlar el diseño de un sitio web de manera eficiente. Los estilos CSS se pueden aplicar a múltiples elementos HTML, lo que permite una gestión centralizada y un cambio rápido y fácil del diseño."
          p4="CSS también ofrece una amplia gama de características para el diseño de sitios web, incluidas opciones de posicionamiento, diseño de cuadrículas, tipografía personalizada, efectos de animación y mucho más. Esto permite a los desarrolladores crear diseños creativos y atractivos."
          p5="Al utilizar archivos CSS externos y técnicas de almacenamiento en caché, los sitios web pueden cargar más rápidamente, lo que mejora la experiencia del usuario y puede beneficiar el posicionamiento en los motores de búsqueda."
          p6="En resumen, CSS es una tecnología esencial para el diseño web moderno. Permite a los desarrolladores controlar la presentación y el diseño de los sitios web de manera eficiente y crear experiencias de usuario atractivas y receptivas."
        />
  
        <Doc text="CSS Docs" bg="#2196F3" fbg="#181818" download=".1" pdf={documentation}/>
  
        <ResourcesPage language="CSS"
          videosArray={[
            [DorianD, "Curso de CSS", "Dorean Designs", "https://www.youtube.com/watch?v=-k-w8JpTNwA&list=PLROIqh_5RZeDbvISffzihyxzqJBt_z3-Z"],
            [dalto, "CSS: desde 0", "Soy dalto", "https://www.youtube.com/watch?v=OWKXEJN67FE&t=7642s&pp=ygUJY3NzIGN1cnNv"],
            [sergieC, "CSS desde 0 | Curso Tutorial", "Sergie Code", "https://www.youtube.com/watch?v=rTtC6Q-71qg&pp=ygUJY3NzIGN1cnNv"]
          ]}
        />
      </div>
    </div>
  );
  
}

export default CSSPage