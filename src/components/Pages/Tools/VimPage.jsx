import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/vim.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function VimPage() {
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
        <PageLanguage install={true} style="Vim" title="Vim" subtitle="Text Editor" bd_color="#019733" about="Vim" logo={logo}/>
        <Aboutpage
          des="Vim es un editor de texto altamente configurable construido para crear eficiencia y rapidez en el proceso de escritura y edición de texto. Es una versión mejorada del venerable editor vi, que ha existido desde la década de 1970."
          logo={aboutlogo}
          li1="Modo de edición y comando"
          li2="Eficiencia y rapidez"
          li3="Amplia gama de características"
          li4="Configurable y extensible"
          li5="Edición de texto sin distracciones"
          li6="Curva de aprendizaje empinada"
          p1="Vim se basa en la idea de tener diferentes modos de operación. Esto significa que puede alternar entre modos de edición y comando, lo que permite una rápida navegación y manipulación de texto una vez que se domina."
          p2="Es conocido por su eficiencia y rapidez una vez que el usuario se familiariza con su sistema de comandos. Vim está diseñado para mantener las manos en el teclado y minimizar la necesidad de usar el ratón, lo que puede acelerar el flujo de trabajo."
          p3="Vim ofrece una amplia gama de características, incluida la edición de texto en columnas, búsqueda y reemplazo de patrones, autocompletado, soporte para complementos y una poderosa capacidad de personalización a través de archivos de configuración."
          p4="Es altamente configurable y extensible, lo que permite a los usuarios adaptar el editor a sus necesidades específicas. Esto incluye la capacidad de asignar comandos personalizados, crear combinaciones de teclas personalizadas y habilitar o deshabilitar características según sea necesario."
          p5="Vim está diseñado para permitir una edición de texto sin distracciones. La interfaz es simple y minimalista, lo que permite al usuario concentrarse en el contenido sin distracciones visuales."
          p6="Sin embargo, Vim tiene una curva de aprendizaje empinada y puede llevar tiempo dominarlo completamente. Requiere dedicación y práctica para aprovechar al máximo todas sus características y comandos."
        />

        <Doc text="Instalar Vim" bg="#019733" fbg="#181818" download=".1" url="https://www.vim.org/download.php"/>

        <ResourcesPage language="Vim"
          videosArray={[
            [null, "Vim Tutorial for Beginners", "ThePrimeagen", "https://www.youtube.com/watch?v=IiwGbcd8S7I"],
            [null, "Vim Crash Course", "DistroTube", "https://www.youtube.com/watch?v=ER5JYFKkYDg"],
            [null, "Mastering Vim in 2024", "ThoughtBot", "https://www.youtube.com/watch?v=wlR5gYd6um0"]
          ]}
        />
      </div>
    </div>
  );
}

export default VimPage;
