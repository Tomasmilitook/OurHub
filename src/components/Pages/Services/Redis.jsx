import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/redis.webp"
import aboutlogo from "../../../images/db.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function RedisPage() {
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
        <PageLanguage install="Empezar" style="Redis" title="Redis" subtitle="In-Memory Data Store" bd_color="#DC382D" about="Redis" logo={logo}/>
        <Aboutpage
          des="Redis es una base de datos en memoria de código abierto, de estructura de datos clave-valor, utilizada como almacén de caché, base de datos y cola de mensajes. Conocido por su rendimiento rápido, escalabilidad y versatilidad, Redis es utilizado por empresas de todo el mundo."
          logo={aboutlogo}
          li1="Base de datos en memoria"
          li2="Estructura de datos clave-valor"
          li3="Almacenamiento de caché y cola de mensajes"
          li4="Rendimiento rápido y escalabilidad"
          li5="Versatilidad y flexibilidad"
          li6="Comunidad activa y soporte"
          p1="Redis es una base de datos en memoria, lo que significa que almacena datos en la memoria principal del servidor para lograr un acceso ultrarrápido. Esto lo hace ideal para casos de uso donde el rendimiento es crítico, como almacenamiento en caché y almacenamiento de sesiones de usuario."
          p2="Utiliza una estructura de datos clave-valor para almacenar datos, lo que le permite manejar una amplia variedad de tipos de datos, como cadenas, listas, conjuntos, mapas ordenados y más. Esto lo hace extremadamente flexible y adecuado para una variedad de aplicaciones."
          p3="Es ampliamente utilizado como almacenamiento de caché y cola de mensajes, permitiendo a los desarrolladores mejorar el rendimiento de sus aplicaciones al almacenar datos en la memoria en lugar de acceder a una base de datos tradicional. También puede funcionar como un almacén de sesiones de usuario y datos temporales."
          p4="Ofrece un rendimiento rápido y escalabilidad horizontal, lo que significa que puede manejar grandes volúmenes de datos y un alto número de solicitudes simultáneas sin degradación del rendimiento. Esto lo hace adecuado para aplicaciones de alto tráfico y escenarios de Big Data."
          p5="Es altamente versátil y flexible, con soporte para una variedad de operaciones avanzadas, como transacciones atómicas, operaciones de lista y conjuntos, pub/sub y más. Esto permite a los desarrolladores crear aplicaciones complejas y escalables con facilidad."
          p6="Cuenta con una comunidad activa de desarrolladores y usuarios que proporcionan soporte, contribuyen al desarrollo del software y mantienen una amplia documentación y recursos en línea."
        />

        <Doc flag="Empezar" text="Empezar con Redis" bg="#DC382D" fbg="#FFFFFF" download="1" url="https://redis.io/download"/>

        <ResourcesPage language="Redis"
          videosArray={[
            [null, "Redis Tutorial for Beginners", "edureka!", "https://www.youtube.com/watch?v=-IkvpgZ6KvE"],
            [null, "Redis Overview", "Academind", "https://www.youtube.com/watch?v=Hbt56gFj998"],
            [null, "Mastering Redis", "TechWorld with Nana", "https://www.youtube.com/watch?v=Pa6vwV1a8_c"]
          ]}
        />
      </div>
    </div>
  );
}

export default RedisPage;
