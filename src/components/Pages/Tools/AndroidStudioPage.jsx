import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/androidstudio.png"
import aboutlogo from "../../../images/Ide.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';



function AndroidStudioPage() {
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
        <PageLanguage install="Instalar" style="Android Studio" title="Android Studio" subtitle="Integrated Development Environment" bd_color="#3DDC84" about="Android Studio" logo={logo}/>
        <Aboutpage
          des="Android Studio es el entorno de desarrollo integrado (IDE) oficial para el desarrollo de aplicaciones Android. Desarrollado por Google, Android Studio ofrece un conjunto completo de herramientas para escribir, compilar, depurar y desplegar aplicaciones para la plataforma Android. Es conocido por su integración con las herramientas de desarrollo de Android, su amplia gama de características y su soporte para el desarrollo de aplicaciones modernas."
          logo={aboutlogo}
          li1="Desarrollo de aplicaciones Android"
          li2="Integración con herramientas de Android"
          li3="Amplia gama de características"
          li4="Soporte para el desarrollo moderno de aplicaciones"
          li5="Facilidad de uso"
          li6="Comunidad activa"
          p1="Android Studio proporciona un conjunto completo de herramientas para el desarrollo de aplicaciones Android, incluyendo un editor de código, un emulador de dispositivos, herramientas de depuración, análisis de rendimiento y mucho más. Está diseñado para mejorar la productividad de los desarrolladores y facilitar el proceso de desarrollo de aplicaciones."
          p2="Con su integración con las herramientas de desarrollo de Android, Android Studio facilita el desarrollo de aplicaciones Android al proporcionar acceso a bibliotecas, SDKs, y herramientas adicionales desarrolladas por Google. Esto incluye soporte para Android SDK, Android NDK, herramientas de compilación como Gradle, y herramientas de diseño como Android XML Layout Editor."
          p3="Android Studio ofrece una amplia gama de características para el desarrollo de aplicaciones modernas, incluyendo soporte para arquitecturas de aplicaciones basadas en componentes, pruebas unitarias, pruebas de interfaz de usuario, y herramientas de análisis de código. Esto permite a los desarrolladores crear aplicaciones Android de alta calidad con las últimas tecnologías y prácticas de desarrollo."
          p4="Con su enfoque en el desarrollo moderno de aplicaciones, Android Studio proporciona soporte para características como Kotlin, Jetpack, AndroidX, Material Design, y mucho más. Esto permite a los desarrolladores aprovechar al máximo las últimas tecnologías y herramientas disponibles en el ecosistema de desarrollo de Android."
          p5="Android Studio está diseñado para ser fácil de usar, con una interfaz intuitiva y familiar que facilita la navegación y el uso de las herramientas del IDE. Los desarrolladores pueden personalizar su entorno de desarrollo según sus preferencias, lo que les permite adaptar Android Studio a su flujo de trabajo específico."
          p6="Android Studio cuenta con una comunidad activa de usuarios y desarrolladores que contribuyen con extensiones, plugins, y soporte en línea. La comunidad es un recurso valioso para los usuarios nuevos y experimentados que buscan ayuda, tutoriales, y recursos adicionales relacionados con el desarrollo de aplicaciones Android."
        />

        <Doc text="Instalar Android Studio" bg="#3DDC84" fbg="#000000" download=".1" url = "https://developer.android.com/studio"/>

        <ResourcesPage language="Android Studio"
          videosArray={[
            [null, "Android Studio Tutorial for Beginners", "Codecademy", "https://www.youtube.com/watch?v=GR6Z9pa5aN4"],
            [null, "Android Studio Tips and Tricks", "Traversy Media", "https://www.youtube.com/watch?v=gdk7d-xAK_s"],
            [null, "Android App Development Tutorial using Android Studio", "Smartherd", "https://www.youtube.com/watch?v=fis26HvvDII"]
          ]}
        />
      </div>
    </div>
  );
}

export default AndroidStudioPage
