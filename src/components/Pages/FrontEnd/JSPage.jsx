import React from 'react'
import "./pagesStyle.css"


// imagenes
import miduJS  from "./imagesresourses/JSMidudev.jpg"
import daltoJS  from "./imagesresourses/JSdalto.jpg"
import todocodeJS  from "./imagesresourses/JStodocode.jpg"

// Logos
import logo from "../../../images_logos/js_logo.png"
import aboutlogo from "../../../images/JSabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


// Doc
import documentation from "../../Doc/pdfs/JavaScriptDoc.pdf"


function JSPage() {
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
        <PageLanguage title = "JavaScript" subtitle = "Programming Language" bd_color = "#FFDF00" about = "JS" logo = {logo}/>
        
        <Aboutpage
        des = "JavaScript (JS) es un lenguaje de programación de alto nivel, interpretado y multi-paradigma principalmente conocido por su uso en el desarrollo web. Fue creado originalmente por Brendan Eich en 1995. Desde entonces, ha evolucionado significativamente y se ha convertido en uno de los pilares fundamentales de la web moderna."
        logo = {aboutlogo}
        li1 = "Interpretado y de alto nivel"
        li2 = "Multi-paradigma"
        li3 = "Cliente-servidor:"
        li4 = "Dinámico y flexible:"
        li5 = "Event-driven:"
        li6 = "Ampliamente utilizado en el desarrollo web:"
        p1  = "JavaScript es un lenguaje de script interpretado, lo que significa que no necesita ser compilado antes de ejecutarse. Esto facilita la escritura y la ejecución de código, ya que se puede probar y modificar rápidamente."
        p2  = "JavaScript admite varios paradigmas de programación, incluidos el paradigma imperativo, funcional y orientado a objetos. Esto significa que los desarrolladores pueden escribir código de diferentes maneras, según las necesidades del proyecto"
        p3  = "JavaScript admite varios paradigmas de programación, incluidos el paradigma imperativo, funcional y orientado a objetos. Esto significa que los desarrolladores pueden escribir código de diferentes maneras, según las necesidades del proyecto"
        p4  = "JavaScript es un lenguaje dinámico y flexible que permite la manipulación de objetos en tiempo de ejecución. Esto significa que los desarrolladores pueden agregar, modificar y eliminar propiedades y métodos de objetos en tiempo de ejecución, lo que lo hace extremadamente versátil."
        p5  = "Gran parte de la programación en JavaScript se basa en eventos, lo que significa que el código se ejecuta en respuesta a acciones específicas del usuario o del sistema, como hacer clic en un botón o cargar una página web."
        p6  = "JavaScript es el lenguaje de programación más comúnmente utilizado para el desarrollo web front-end. Se utiliza para agregar interactividad a las páginas web mediante el manejo de eventos, la manipulación del DOM (Document Object Model) y la comunicación con el servidor a través de solicitudes HTTP."
        />

        <Doc text = "JavaScript Docs" bg = "#FFDF00" fbg="#181818" download = ".1" pdf = {documentation}/>

        <ResourcesPage language="JavaScript"
          videosArray = {[[miduJS,"Introduccion a JavaScript","Midudev","https://www.youtube.com/watch?v=Z34BF9PCfYg&pp=ygUKamF2YXNjcmlwdA%3D%3D"],
                    [daltoJS, "Curso de JavaScript desde 0","Soy Dalto","https://www.youtube.com/watch?v=z95mZVUcJ-E&pp=ygUKamF2YXNjcmlwdA%3D%3D"],
                    [todocodeJS, "Curso de JavaScript desde 0","TodoCode","https://www.youtube.com/watch?v=x5YUu0eUc8s&list=PLQxX2eiEaqbwnzKnmqHDl0rkRvp_T7Q_W"]
                  ]}
        />
        </div>
    </div>
  )
}

export default JSPage