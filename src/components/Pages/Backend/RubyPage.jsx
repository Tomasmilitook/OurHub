import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/ruby.png"
import aboutlogo from "../../../images/Rubyabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"


function RubyPage() {
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
        <PageLanguage style="Ruby" title="Ruby" subtitle="A programmer's best friend" bd_color="#CC342D" about="Ruby" logo={logo}/>
        <Aboutpage
          des="Ruby es un lenguaje de programación dinámico, interpretado y orientado a objetos. Fue creado por Yukihiro Matsumoto (Matz) en la década de 1990 y ha ganado popularidad por su sintaxis simple y elegante, así como por su enfoque en la productividad y la felicidad del programador."
          logo={aboutlogo}
          li1="Sintaxis simple y legible"
          li2="Orientado a la productividad y la felicidad del programador"
          li3="Potente sistema de orientación a objetos"
          li4="Gran ecosistema de gemas y bibliotecas"
          li5="Framework Ruby on Rails para el desarrollo web"
          li6="Comunidad activa y colaborativa"
          p1="La sintaxis simple y legible de Ruby se inspira en lenguajes como Perl y Python, lo que facilita la escritura y la lectura de código, así como la colaboración en proyectos entre varios desarrolladores."
          p2="Ruby se centra en la productividad y la felicidad del programador, proporcionando herramientas y características que permiten a los desarrolladores escribir código limpio y conciso de manera rápida y eficiente."
          p3="Ruby cuenta con un potente sistema de orientación a objetos que permite a los desarrolladores crear y manipular objetos de manera intuitiva, lo que facilita el diseño y la implementación de soluciones complejas."
          p4="El ecosistema de Ruby está respaldado por una amplia variedad de gemas (paquetes de código reutilizable) y bibliotecas que permiten a los desarrolladores ampliar la funcionalidad de sus aplicaciones de forma rápida y sencilla."
          p5="Ruby on Rails es un framework popular para el desarrollo web que se basa en Ruby. Proporciona una estructura para el desarrollo de aplicaciones web MVC (Modelo-Vista-Controlador) y ofrece herramientas para la creación rápida de aplicaciones web escalables y seguras."
          p6="La comunidad de Ruby es activa y colaborativa, con una gran cantidad de recursos educativos, conferencias, meetups y proyectos de código abierto que promueven el aprendizaje y la mejora continua de Ruby y sus aplicaciones."
        />

        <Doc text="Ruby Docs" bg="#CC342D" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="Ruby"
          videosArray={[
            [null, "Curso de Ruby", "Platzi", "https://www.youtube.com/watch?v=123"],
            [null, "Ruby para principiantes", "Keepcoding", "https://www.youtube.com/watch?v=456"],
            [null, "Introducción a Ruby", "The Odin Project", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default RubyPage;

