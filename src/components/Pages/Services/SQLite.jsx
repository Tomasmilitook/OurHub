import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/sqlite.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function SQLitePage() {
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
        <PageLanguage install="Empezar" style="SQLite" title="SQLite" subtitle="Self-Contained SQL Database Engine" bd_color="#003B57" about="SQLite" logo={logo}/>
        <Aboutpage
          des="SQLite es una biblioteca de gestión de bases de datos SQL de código abierto, ligera, autónoma y sin servidor. Se integra directamente en la aplicación que la utiliza y no requiere configuración o administración de un servidor de base de datos independiente."
          logo={aboutlogo}
          li1="Motor de base de datos SQL autónomo"
          li2="Ligero y sin servidor"
          li3="Sin configuración necesaria"
          li4="Transacciones ACID"
          li5="Amplia compatibilidad y portabilidad"
          li6="Código fuente abierto y dominio público"
          p1="SQLite es un motor de base de datos SQL autónomo, lo que significa que está integrado directamente en la aplicación que lo utiliza. No requiere un servidor de base de datos independiente, lo que simplifica la arquitectura y reduce la complejidad de implementación."
          p2="Es ligero y sin servidor, con una pequeña huella de memoria y recursos. Esto lo hace ideal para aplicaciones de tamaño reducido o que necesitan una base de datos incorporada, como aplicaciones móviles, navegadores web y aplicaciones de escritorio."
          p3="No requiere configuración o administración. La base de datos se almacena en un solo archivo en el sistema de archivos del dispositivo o del servidor, lo que facilita su implementación y distribución con la aplicación."
          p4="Ofrece transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad), lo que garantiza que las operaciones de base de datos sean seguras y consistentes, incluso en condiciones de fallo."
          p5="Es compatible con SQL estándar y proporciona una amplia gama de funciones y tipos de datos. También es altamente portátil, con soporte para una variedad de plataformas, incluyendo Windows, macOS, Linux y sistemas integrados."
          p6="El código fuente de SQLite está disponible como dominio público y es de código abierto, lo que significa que puede ser utilizado libremente en aplicaciones comerciales y de código abierto sin restricciones de licencia."
        />

        <Doc flag="Empezar" text="Empezar con SQLite" bg="#003B57" fbg="#FFFFFF" download="1" url="https://www.sqlite.org/download.html"/>

        <ResourcesPage language="SQLite"
          videosArray={[
            [null, "SQLite Tutorial for Beginners", "Traversy Media", "https://www.youtube.com/watch?v=byHcYRpMgI4"],
            [null, "SQLite Overview", "The Net Ninja", "https://www.youtube.com/watch?v=3WZFkH4qYFk"],
            [null, "Mastering SQLite", "CodeWithChris", "https://www.youtube.com/watch?v=n0SBdICL2Oo"]
          ]}
        />
      </div>
    </div>
  );
}

export default SQLitePage;
