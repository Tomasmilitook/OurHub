import React from 'react'
import "./pagesStyle.css"

// imagenes
import makigas  from "./imagesresourses/TSmakigas.jpg"
import Midudev  from "./imagesresourses/TSMidudev.jpg"
import sergieC  from "./imagesresourses/TSsergieCode.jpg"

// Logos
import logo from "../../../images_logos/typescript.png"
import aboutlogo from "../../../images/TSabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function TSPage() {
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
          <PageLanguage style="TypeScript" title="TypeScript" subtitle="JavaScript that scales" bd_color="#3178C6" about="TypeScript" logo={logo}/>
          <Aboutpage
            des="TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft. Es un superset de JavaScript que añade tipado estático y objetos basados en clases. TypeScript está diseñado para el desarrollo de aplicaciones grandes y complejas, y compila a JavaScript puro, lo que significa que cualquier código escrito en TypeScript puede ejecutarse en cualquier navegador, en cualquier host y en cualquier sistema operativo."
            logo={aboutlogo}
            li1="Tipado estático y tipado opcional"
            li2="Compatibilidad total con JavaScript"
            li3="Soporte para herramientas modernas de desarrollo"
            li4="Facilita el mantenimiento y la refactorización de código"
            li5="Mejora la legibilidad del código y reduce los errores"
            li6="Ampliamente adoptado en el desarrollo de aplicaciones web modernas"
            p1="TypeScript mejora la experiencia de desarrollo de JavaScript al añadir tipos estáticos. Esto permite a los desarrolladores detectar errores en tiempo de compilación, mucho antes de que el código se ejecute."
            p2="Al ser un superset de JavaScript, cualquier archivo JavaScript es también un archivo TypeScript válido. Esto facilita la adopción de TypeScript en proyectos existentes sin necesidad de reescribir el código existente."
            p3="TypeScript es compatible con todas las características de JavaScript moderno (ES6+), lo que permite a los desarrolladores usar las últimas características del lenguaje mientras se benefician del tipado estático de TypeScript."
            p4="El tipado estático y las herramientas de desarrollo avanzadas como el autocompletado de código, la navegación en el código y las refactorizaciones hacen que el desarrollo y el mantenimiento de proyectos grandes sean más manejables y menos propensos a errores."
            p5="La adopción de TypeScript está en aumento, con una comunidad activa y un ecosistema en crecimiento. Muchas librerías y frameworks populares de JavaScript ofrecen tipos TypeScript, facilitando su uso en proyectos TypeScript."
            p6="En resumen, TypeScript ofrece una poderosa combinación de herramientas de desarrollo que mejoran la productividad, la legibilidad del código y la capacidad de mantenimiento, haciéndolo una opción excelente para el desarrollo de aplicaciones web modernas."
          />
  
          <Doc text="TypeScript Docs" bg="#3178C6" fbg="#181818" download=".1" pdf={documentation}/>
  
          <ResourcesPage language="TypeScript"
            videosArray={[
              [makigas, "Curso Completo de TypeScript", "Makigas", "https://www.youtube.com/watch?v=OMooUQNZbX0&list=PLTd5ehIj0goPbPaN9VEoQQVUwZN2eXdB5"],
              [Midudev, "TypeScript: Desde cero hasta experto", "Midudev", "https://www.youtube.com/watch?v=fUgxxhI_bvc&pp=ygUQdHlwZXNjcmlwdCBjdXJzbw%3D%3D"],
              [sergieC, "Introducción a TypeScript", "Sergie Code", "https://www.youtube.com/watch?v=UTA5bykCx2c&pp=ygUQdHlwZXNjcmlwdCBjdXJzbw%3D%3D"]
            ]}
          />
        </div>
      </div>
    );
    
  }
  
  export default TSPage;
  