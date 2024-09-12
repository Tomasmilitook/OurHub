import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/xamarin.png"
import aboutlogo from "../../../images/Xamarinabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"
function XamarinPage() {
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
        <PageLanguage style="C#" title="Xamarin" subtitle="Xamarin Framework" bd_color="#3498DB" about="Xamarin" logo={logo}/>
        <Aboutpage
          des="Xamarin es un conjunto de herramientas de desarrollo multiplataforma para la creación de aplicaciones móviles nativas utilizando el lenguaje de programación C# y la plataforma .NET. Fue adquirido por Microsoft en 2016 y se ha convertido en la opción preferida para muchos desarrolladores que desean crear aplicaciones móviles para iOS, Android y Windows utilizando un único código base compartido."
          logo={aboutlogo}
          li1="Desarrollo multiplataforma"
          li2="Lenguaje C# y plataforma .NET"
          li3="Acceso completo a las API nativas"
          li4="UI nativa y rendimiento"
          li5="Herramientas integradas y soporte de Microsoft"
          li6="Comunidad activa y recursos adicionales"
          p1="Xamarin permite a los desarrolladores crear aplicaciones móviles nativas para múltiples plataformas utilizando un único código base compartido. Esto reduce significativamente el tiempo y los costos de desarrollo al eliminar la necesidad de mantener múltiples bases de código separadas."
          p2="Xamarin utiliza el lenguaje de programación C# y la plataforma .NET, lo que permite a los desarrolladores aprovechar sus habilidades existentes y el rico ecosistema de bibliotecas y herramientas de .NET. Esto facilita el desarrollo de aplicaciones móviles robustas y escalables."
          p3="Xamarin ofrece acceso completo a las API nativas de cada plataforma, lo que permite a los desarrolladores aprovechar todas las características y funcionalidades de iOS, Android y Windows en sus aplicaciones. Esto garantiza una experiencia de usuario nativa y un rendimiento óptimo."
          p4="Xamarin proporciona herramientas y bibliotecas para crear interfaces de usuario nativas y de alto rendimiento que se ven y se comportan como aplicaciones nativas en cada plataforma. Esto incluye soporte completo para la creación de interfaces de usuario utilizando XAML y la creación de vistas personalizadas en código C#."
          p5="Xamarin está respaldado por Microsoft, lo que garantiza un soporte continuo y actualizaciones regulares del framework y las herramientas. Microsoft ofrece herramientas integradas, como Visual Studio y Visual Studio for Mac, así como soporte técnico y recursos adicionales para los desarrolladores de Xamarin."
          p6="Xamarin cuenta con una comunidad activa de desarrolladores y una amplia gama de recursos adicionales, como bibliotecas de código abierto, complementos y tutoriales. Esto proporciona a los desarrolladores de Xamarin acceso a recursos adicionales y soporte de la comunidad."
        />

        <Doc text="Xamarin Docs" bg="#3498DB" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="Xamarin"
          videosArray={[
            [null, "Xamarin Tutorial for Beginners", "Programming with Mosh", "https://www.youtube.com/watch?v=123"],
            [null, "Xamarin Forms Tutorial", "DevCrux Technologies", "https://www.youtube.com/watch?v=456"],
            [null, "Xamarin Android Tutorial", "Awais Mirza", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default XamarinPage;
