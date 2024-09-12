import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/php.png"
import aboutlogo from "../../../images/phpabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"



function PHPPage() {
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
        <PageLanguage style="PHP" title="PHP" subtitle="Hypertext Preprocessor" bd_color="#777BB4" about="PHP" logo={logo}/>
        <Aboutpage
          des="PHP es un lenguaje de programación de código abierto ampliamente utilizado en el desarrollo web. Fue creado originalmente por Rasmus Lerdorf en 1994 y desde entonces ha evolucionado para convertirse en uno de los lenguajes más populares para el desarrollo de sitios web dinámicos y aplicaciones web."
          logo={aboutlogo}
          li1="Lenguaje de programación del lado del servidor"
          li2="Facilita la creación de sitios web dinámicos"
          li3="Amplia compatibilidad con bases de datos"
          li4="Gran cantidad de frameworks y librerías disponibles"
          li5="Facilidad de integración con HTML y CSS"
          li6="Comunidad activa y abundante documentación"
          p1="PHP se utiliza principalmente para el desarrollo del lado del servidor, lo que permite crear aplicaciones web dinámicas que generan contenido personalizado para cada usuario en función de sus interacciones con el sitio."
          p2="Con PHP, los desarrolladores pueden interactuar con bases de datos, enviar y recibir cookies, gestionar sesiones de usuario y realizar una variedad de tareas del lado del servidor para crear aplicaciones web interactivas y personalizadas."
          p3="PHP es compatible con una amplia gama de bases de datos, incluidas MySQL, PostgreSQL, SQLite, MongoDB y más, lo que permite a los desarrolladores elegir la opción que mejor se adapte a las necesidades de su aplicación."
          p4="La comunidad de PHP ha desarrollado una gran cantidad de frameworks y librerías que facilitan el desarrollo de aplicaciones web, como Laravel, Symfony, CodeIgniter y más, que proporcionan herramientas y estructuras para acelerar el proceso de desarrollo."
          p5="PHP se integra fácilmente con HTML y CSS, lo que permite a los desarrolladores crear plantillas de páginas web que combinan contenido dinámico generado por PHP con diseño y estilo proporcionado por HTML y CSS."
          p6="La comunidad de PHP es activa y ofrece una abundante documentación, tutoriales, foros de ayuda y recursos educativos para ayudar a los desarrolladores a aprender y mejorar sus habilidades en PHP."
        />

        <Doc text="PHP Docs" bg="#777BB4" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="PHP"
          videosArray={[
            [null, "Curso de PHP", "Curso Web", "https://www.youtube.com/watch?v=123"],
            [null, "PHP para principiantes", "Fazt", "https://www.youtube.com/watch?v=456"],
            [null, "Introducción a PHP", "CódigoFacilito", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default PHPPage;
