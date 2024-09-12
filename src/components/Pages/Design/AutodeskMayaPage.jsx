import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/AutodeskMaya.png"
import aboutlogo from "../../../images/Desing.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';


function AutodeskPage() {
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
        <PageLanguage install={true} style="Autodesk" title="Autodesk" subtitle="Design and Engineering Software" bd_color="#0696D7" about="Autodesk" logo={logo}/>
        <Aboutpage
          des="Autodesk es una empresa líder en software de diseño y ingeniería, conocida por su amplia gama de productos utilizados en industrias como arquitectura, ingeniería civil, manufactura, medios y entretenimiento. Sus herramientas permiten a los profesionales crear, visualizar y simular ideas y proyectos en 2D y 3D."
          logo={aboutlogo}
          li1="Diseño en 2D y 3D"
          li2="Ingeniería y manufactura"
          li3="Arquitectura y construcción"
          li4="Medios y entretenimiento"
          li5="Visualización y simulación"
          li6="Licencias comerciales"
          p1="Autodesk ofrece una amplia gama de software para el diseño en 2D y 3D, incluyendo herramientas como AutoCAD, Revit, Fusion 360, Maya y 3ds Max. Estas aplicaciones son utilizadas por profesionales en diversas industrias para crear y desarrollar proyectos de diseño y ingeniería."
          p2="En el campo de la ingeniería y manufactura, Autodesk proporciona soluciones como AutoCAD Mechanical, Inventor y CAM para ayudar a los usuarios a diseñar, simular y fabricar productos de manera eficiente. Estas herramientas son utilizadas por ingenieros y diseñadores para llevar a cabo procesos de diseño y fabricación."
          p3="Para profesionales en arquitectura y construcción, Autodesk ofrece software como AutoCAD Architecture, Revit y BIM 360 para ayudar en el diseño, la documentación y la colaboración en proyectos de construcción. Estas herramientas permiten a los arquitectos, ingenieros y contratistas trabajar juntos de manera eficiente en proyectos de cualquier escala."
          p4="En el campo de los medios y el entretenimiento, Autodesk ofrece soluciones como Maya, 3ds Max y Arnold para la creación de efectos visuales, animaciones y juegos. Estas herramientas son utilizadas por artistas y diseñadores para crear contenido visualmente impresionante en películas, televisión, videojuegos y más."
          p5="Autodesk proporciona herramientas de visualización y simulación que permiten a los usuarios crear representaciones realistas y realizar análisis detallados de sus diseños y proyectos. Estas herramientas son utilizadas en industrias como la arquitectura, la ingeniería civil, la manufactura y la construcción para visualizar y validar diseños antes de la implementación."
          p6="Autodesk ofrece licencias comerciales de sus productos, que permiten a las empresas y profesionales utilizar las herramientas de Autodesk en sus proyectos comerciales. Estas licencias suelen incluir soporte técnico, actualizaciones y acceso a recursos de formación y aprendizaje."
        />

        <Doc text="Obtener Software de Autodesk" bg="#0696D7" fbg="#FFFFFF" download="1" url = "https://www.autodesk.com/products"/>

        <ResourcesPage language="Autodesk"
          videosArray={[
            [null, "Autodesk Overview", "Autodesk", "https://www.youtube.com/watch?v=IDQFirF3qYk"],
            [null, "Autodesk Tutorial Series", "Autodesk", "https://www.youtube.com/watch?v=ffyhRn2QoVU"],
            [null, "Autodesk Customer Testimonials", "Autodesk", "https://www.youtube.com/watch?v=DaL5gCbQkpo"]
          ]}
        />
      </div>
    </div>
  );
}

export default AutodeskPage;
