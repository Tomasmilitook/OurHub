import React from 'react'
import "./pagesStyle.css"

// imagenes
import Midudev  from "./imagesresourses/AngularMidudev.jpg"
import pildoras  from "./imagesresourses/Angularpildoras.jpg"
import sergieC  from "./imagesresourses/AngularsergieCode.jpg"

// Logos
import logo from "../../../images_logos/csharp.png"
import aboutlogo from "../../../images/Csharpabout.png"

// Componentes
import PageLanguage from '../../PageLanguage/PageLanguage';
import Aboutpage from '../../AboutPage/Aboutpage';
import Doc from '../../Doc/Doc';
import ResourcesPage from '../../ResoursesPage/ResourcesPage';

// Doc
import documentation from "../../Doc/pdfs/CSSDoc.pdf"

function CSharpPage() {
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
        <PageLanguage style="C#" title="C#" subtitle="C Sharp Programming Language" bd_color="#68217A" about="C#" logo={logo}/>
        <Aboutpage
          des="C# es un lenguaje de programación desarrollado por Microsoft en 2000 como parte de su plataforma .NET. Combina la potencia y la eficiencia de C++ con la facilidad de uso de Visual Basic. C# se utiliza para crear una variedad de aplicaciones, desde aplicaciones de escritorio hasta aplicaciones web y juegos."
          logo={aboutlogo}
          li1="Potencia y eficiencia"
          li2="Facilidad de uso"
          li3="Plataforma .NET"
          li4="Amplia adopción en la industria"
          li5="Versatilidad"
          li6="Seguridad"
          p1="C# ofrece la potencia y la eficiencia de lenguajes como C++ pero con una sintaxis más simple y fácil de aprender, lo que lo convierte en una excelente opción para desarrolladores de todos los niveles de experiencia."
          p2="La facilidad de uso de C# se debe en parte a su integración con Visual Studio, un entorno de desarrollo integrado (IDE) altamente desarrollado que proporciona herramientas avanzadas de depuración, refactorización y creación de interfaces de usuario."
          p3="C# es parte de la plataforma .NET de Microsoft, que proporciona un marco de trabajo unificado para el desarrollo de una amplia gama de aplicaciones, incluidas aplicaciones de escritorio, aplicaciones web y servicios web."
          p4="C# se utiliza ampliamente en la industria, especialmente para el desarrollo de aplicaciones empresariales y de servidor, lo que garantiza una gran cantidad de oportunidades de trabajo y una amplia base de recursos de aprendizaje y soporte."
          p5="La versatilidad de C# se extiende a su capacidad para crear una variedad de aplicaciones, desde aplicaciones de escritorio hasta aplicaciones web, servicios web, juegos y más, lo que lo convierte en una herramienta poderosa para los desarrolladores."
          p6="La seguridad es una preocupación importante en C#, y el lenguaje está diseñado con características de seguridad integradas, como el control de acceso a tipos y miembros, para proteger las aplicaciones y los datos de los usuarios."
        />

        <Doc text="C# Docs" bg="#68217A" fbg="#181818" download=".1" pdf={documentation}/>

        <ResourcesPage language="C#"
          videosArray={[
            [null, "C# Tutorial for Beginners", "Programming with Mosh", "https://www.youtube.com/watch?v=123"],
            [null, "Learn C# Basics in 1 Hour", "freeCodeCamp.org", "https://www.youtube.com/watch?v=456"],
            [null, "C# Fundamentals for Absolute Beginners", "Microsoft Visual Studio", "https://www.youtube.com/watch?v=789"]
          ]}
        />
      </div>
    </div>
  );
}

export default CSharpPage;
