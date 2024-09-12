import React from 'react'
import "./pagesStyle.css"


// imagenes
import REACTMidudev  from "./imagesresourses/REACTMidudev.jpg"
import REACTsergieCode  from "./imagesresourses/REACTsergieCode.jpg"
import REACTCarpiCoder  from "./imagesresourses/REACTCarpiCoder.jpg"
// Logos
import logo from "../../../images_logos/react.png"
import aboutlogo from "../../../images/Reactabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/ReactJSDoc.pdf"


function ReactPage() {
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
        <PageLanguage title="React JS" subtitle="React JavaScript Library" bd_color="#61DAFB" about="React" logo={logo}/>
        <Aboutpage
          des="React es una biblioteca de JavaScript de código abierto diseñada para crear interfaces de usuario en aplicaciones web de una sola página. Fue desarrollado por Facebook y lanzado por primera vez en 2013. React utiliza un enfoque basado en componentes para construir interfaces de usuario reutilizables y escalables."
          logo={aboutlogo}
          li1="Biblioteca de JavaScript"
          li2="Interfaces de usuario reactivas"
          li3="Componentes reutilizables"
          li4="Virtual DOM para optimización de rendimiento"
          li5="Flujo unidireccional de datos"
          li6="Amplia comunidad y ecosistema de herramientas"
          p1="React permite a los desarrolladores crear interfaces de usuario reactivas, lo que significa que los componentes se actualizan automáticamente cuando cambian los datos. Esto mejora la experiencia del usuario al proporcionar interfaces fluidas y altamente interactivas."
          p2="Los componentes de React son bloques de construcción reutilizables que encapsulan el estado y el comportamiento de la interfaz de usuario. Esto facilita la creación y el mantenimiento de aplicaciones complejas, ya que los componentes pueden ser combinados y anidados para construir interfaces complejas."
          p3="Una de las características clave de React es su uso del Virtual DOM (Document Object Model), que es una representación virtual de la estructura de la interfaz de usuario. React compara el Virtual DOM con el DOM real y solo actualiza los elementos que han cambiado, lo que mejora el rendimiento y la eficiencia de la aplicación."
          p4="React sigue un flujo unidireccional de datos, lo que significa que los datos fluyen en una sola dirección a través de la aplicación. Esto facilita el seguimiento de los cambios de estado y depurar la aplicación, ya que los datos solo pueden ser modificados en un solo lugar."
          p5="La comunidad de React es amplia y activa, lo que significa que hay una gran cantidad de recursos disponibles para ayudar a los desarrolladores a aprender y resolver problemas. Además, React cuenta con un ecosistema de herramientas robusto que facilita el desarrollo de aplicaciones web de alta calidad."
          p6="En resumen, React es una biblioteca de JavaScript potente y versátil que se utiliza para construir interfaces de usuario interactivas y escalables en aplicaciones web de una sola página. Su enfoque basado en componentes, su rendimiento optimizado y su amplia comunidad lo convierten en una opción popular entre los desarrolladores de todo el mundo."
        />
  
        <Doc text="React Docs" bg="#61DAFB" fbg="#181818" download=".1" pdf={documentation}/>
  
        <ResourcesPage language="React"
          videosArray={[
            [REACTMidudev, "Curso React 2024", "Midudev", "https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29"],
            [REACTsergieCode, "React JS desde 0", "Sergie Code", "https://www.youtube.com/watch?v=ladwC6Lrs-M&pp=ygUOcmVhY3QganMgY3Vyc28%3D"],
            [REACTCarpiCoder, "Curso de React JS", "Carpi Coder", "https://www.youtube.com/watch?v=2SwKpVVNfIE&list=PL8VCLfCNXjSZfAhqZT7RfWv5Anb8I9PfY"]
          ]}
        />
      </div>
    </div>
  );
}

export default ReactPage;
