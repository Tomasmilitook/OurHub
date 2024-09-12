import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/couchbase.png"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function CouchbasePage() {
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
        <PageLanguage install="Empezar" style="Couchbase" title="Couchbase" subtitle="NoSQL Database Management System" bd_color="#FF5733" about="Couchbase" logo={logo}/>
        <Aboutpage
          des="Couchbase es un sistema de gestión de bases de datos NoSQL altamente escalable y de alto rendimiento. Es utilizado por empresas de todo el mundo para almacenar y recuperar datos de manera eficiente y escalable en aplicaciones web y móviles."
          logo={aboutlogo}
          li1="Base de datos NoSQL escalable"
          li2="Alto rendimiento y baja latencia"
          li3="Modelo de datos flexible"
          li4="Alta disponibilidad y tolerancia a fallos"
          li5="Búsqueda y análisis integrados"
          li6="Facilidad de uso y administración"
          p1="Couchbase ofrece una solución de base de datos NoSQL altamente escalable, que permite a los usuarios almacenar y recuperar grandes volúmenes de datos de manera eficiente y escalable en aplicaciones web y móviles."
          p2="Proporciona un rendimiento excepcional y baja latencia, lo que garantiza tiempos de respuesta rápidos incluso con grandes volúmenes de datos y cargas de trabajo intensivas. Esto lo hace adecuado para aplicaciones donde el rendimiento es crítico, como aplicaciones web de alta velocidad y análisis en tiempo real."
          p3="Utiliza un modelo de datos flexible basado en documentos JSON, que permite a los usuarios almacenar y consultar datos de manera flexible según sus necesidades. Esto es especialmente útil para aplicaciones con esquemas de datos dinámicos o cambiantes."
          p4="Ofrece alta disponibilidad y tolerancia a fallos, con redundancia de datos a través de múltiples nodos y opciones de replicación configurables. Esto garantiza que los datos estén siempre disponibles incluso en caso de fallo de hardware o de red."
          p5="Couchbase proporciona capacidades integradas de búsqueda y análisis, que permiten a los usuarios realizar consultas complejas y análisis en tiempo real sobre sus datos sin necesidad de herramientas adicionales."
          p6="Es fácil de usar y administrar, con una interfaz de usuario intuitiva y herramientas de administración que permiten a los usuarios configurar, supervisar y gestionar su clúster de Couchbase de manera eficiente."
        />

        <Doc flag="Empezar" text="Empezar con Couchbase" bg="#FF5733" fbg="#FFFFFF" download="1" url="https://www.couchbase.com/get-started"/>

        <ResourcesPage language="Couchbase"
          videosArray={[
            [null, "Couchbase Tutorial for Beginners", "Tech with Tim", "https://www.youtube.com/watch?v=IhffpcgvmB0"],
            [null, "Couchbase Overview", "edureka!", "https://www.youtube.com/watch?v=YQmS3O7Gbjs"],
            [null, "Mastering Couchbase", "Simplilearn", "https://www.youtube.com/watch?v=AtcOGUwvKW4"]
          ]}
        />
      </div>
    </div>
  );
}

export default CouchbasePage;
