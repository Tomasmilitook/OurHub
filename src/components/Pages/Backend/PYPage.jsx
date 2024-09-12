import React from 'react'
import "./pagesStyle.css"


// imagenes
import PYpildoras  from "./imagesresourses/PYpildoras.jpg"
import PYholamundo  from "./imagesresourses/PYholamundo.jpg"
import PYmouredev  from "./imagesresourses/PYmouredev.jpg"

// Logos
import logo from "../../../images_logos/python.png"
import aboutlogo from "../../../images/PYabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/PythonDoc.pdf"



function PythonPage() {
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
        <PageLanguage title="Python" subtitle="Python Programming Language" bd_color="#FFE873" about="Python" logo={logo}/>
        <Aboutpage
          des="Python es un lenguaje de programación de alto nivel creado por Guido van Rossum y lanzado por primera vez en 1991. Es conocido por su sintaxis simple y legible, así como por su versatilidad y facilidad de aprendizaje. Python se utiliza en una amplia variedad de campos, incluida la programación web, el desarrollo de software, la ciencia de datos, la inteligencia artificial y más."
          logo={aboutlogo}
          li1="Sintaxis simple y legible"
          li2="Versatilidad y facilidad de aprendizaje"
          li3="Amplia variedad de aplicaciones"
          li4="Comunidad activa y extensa biblioteca estándar"
          li5="Interpretado y de alto nivel"
          li6="Código abierto y gratuito"
          p1="Python se destaca por su sintaxis simple y legible, lo que lo hace ideal tanto para principiantes como para desarrolladores experimentados. Su enfoque en la legibilidad del código fomenta buenas prácticas de programación y facilita la colaboración en proyectos."
          p2="Con una amplia variedad de bibliotecas y marcos de trabajo disponibles, Python es adecuado para una variedad de aplicaciones, desde el desarrollo web hasta la inteligencia artificial. Esta versatilidad lo convierte en una opción popular entre los desarrolladores en diversas industrias."
          p3="La comunidad de Python es activa y colaborativa, lo que significa que siempre hay recursos disponibles para ayudar a los desarrolladores a aprender y resolver problemas. Además, Python cuenta con una extensa biblioteca estándar que facilita el desarrollo de aplicaciones sin tener que reinventar la rueda."
          p4="Python es un lenguaje interpretado y de alto nivel, lo que significa que el código se ejecuta línea por línea por un intérprete en lugar de ser compilado a código máquina. Esto facilita el desarrollo rápido y la depuración de código, aunque puede ser menos eficiente en términos de rendimiento que los lenguajes compilados."
          p5="Python es un lenguaje de código abierto y gratuito, lo que significa que cualquiera puede descargarlo, usarlo y contribuir a su desarrollo. Esta accesibilidad ha contribuido a su popularidad y ha llevado a la creación de una amplia comunidad de desarrolladores en todo el mundo."
          p6="En resumen, Python es un lenguaje poderoso y versátil que se utiliza en una amplia variedad de campos. Su sintaxis simple, su amplia biblioteca estándar y su comunidad activa lo convierten en una excelente opción para proyectos de todos los tamaños y complejidades."
        />
  
        <Doc text="Python Docs" bg="#FFE873" fbg="#181818" download=".1" pdf={documentation}/>
  
        <ResourcesPage language="Python"
          videosArray={[
            [PYpildoras, "Python Curso Completo", "Pildorasinformaticas", "https://www.youtube.com/watch?v=G2FCfQj-9ig&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS"],
            [PYholamundo, "Python Curso Intensivo", "HolaMundo", "https://www.youtube.com/watch?v=tQZy0U8s9LY&pp=ygUMcHlodG9uIGN1cnNv"],
            [PYmouredev, "Curso Completo Python", "MoureDev", "https://www.youtube.com/watch?v=Kp4Mvapo5kc&list=PLNdFk2_brsRdgQXLIlKBXQDeRf3qvXVU_"]
          ]}
        />
      </div>
    </div>
  );
}

export default PythonPage;

