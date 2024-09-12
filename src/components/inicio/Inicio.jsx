import React from "react";
import logo from "../../images/OurHub.png"
import "./inicio.css"
import Codelines from "../Codelines";
import Seccion from "../Secciones/Seccion";

//FrontEnd
import logoHtml from "../../images_logos/html-5.png"
import logoCss from "../../images_logos/css-3.png"
import logoJs from "../../images_logos/js_logo.png"
import logoTs from "../../images_logos/typescript.png"
import logoReact from "../../images_logos/react.png"
import logoAngular from "../../images_logos/angular.png"
import logoVue from "../../images_logos/vue.png"

//FrontEnd

import logoPython from "../../images_logos/python.png"
import logoNodejs from "../../images_logos/nodejs.png"
import logoRuby from "../../images_logos/ruby.png"
import logoPhp from "../../images_logos/php.png"
import logoJava from "../../images_logos/java.png"
import logoCsharp from "../../images_logos/csharp.png"

//Mobile
import logoKotlin from "../../images_logos/kotlin.png"
import logoSwift from "../../images_logos/swift.png"
import logoXamarin from "../../images_logos/xamarin.png"
import logoReactN from "../../images_logos/react.png"

//        Tools
// Editores

import logoVScode from "../../images_logos/vscode.png"
import logoAtom from "../../images_logos/atom.png"
import logoSublime from "../../images_logos/sublimetext.png"
import logoVim from "../../images_logos/vim.png"

// Versionado

import logogit from "../../images_logos/git.png"
import logogithub from "../../images_logos/github.png"
import logogitlab from "../../images_logos/gitlab.png"
import logobitbucket from "../../images_logos/bitbucket.png"

// gestores de dependencias

import logonpm from "../../images_logos/npm.png"
import logopip from "../../images_logos/pip.png"
import logoMaven from "../../images_logos/maven.png"
import logoComposer from "../../images_logos/composer.png"


// gestores de dependencias

import logoeclipse from "../../images_logos/eclipse.png"
import logoandroidstudio from "../../images_logos/androidstudio.png"
import logointellijidea from "../../images_logos/intellijidea.png"
import logopycharm from "../../images_logos/pycharm.png"
import logonetbeans from "../../images_logos/netbeans.png"


// diseño


import logoAdobePhotoshop from "../../images_logos/AdobePhotoshop.png";
import logoAdobeIllustrator from "../../images_logos/AdobeIllustrator.png";
import logoSketch from "../../images_logos/Sketch.png";
import logoFigma from "../../images_logos/Figma.png";
import logoInkscape from "../../images_logos/Inkscape.png";
import logoAdobeXD from "../../images_logos/AdobeXD.png";
import logoInVision from "../../images_logos/InVision.png";
import logoAdobeAfterEffects from "../../images_logos/AdobeAfterEffects.png";
import logoBlender from "../../images_logos/Blender.png";
import logoAutodeskMaya from "../../images_logos/AutodeskMaya.png";
import logoCinema4D from "../../images_logos/Cinema4D.png";
import logoSynfigStudio from "../../images_logos/SynfigStudio.webp";



import logoMySQL from "../../images_logos/MySql.png"
import logoPostgreSQL from "../../images_logos/postgresql.png"
import logoSQLite from "../../images_logos/sqlite.png"
import logoOracleDB from "../../images_logos/oracle.png"
import logoMicrosoftSQLServer from "../../images_logos/MicrosoftSql.png"
import logoMongoDB from "../../images_logos/mongodb.png"
import logoRedis from "../../images_logos/redis.webp"
import logoCassandra from "../../images_logos/Cassandra.webp"
import logoCouchbase from "../../images_logos/couchbase.png"
import logoDynamoDB from "../../images_logos/DynamoDB.png"
import logoDropbox from "../../images_logos/dropbox.png"
import logoAmazonS3 from "../../images_logos/amazon-s3.png"
import logoGoogleCloudS from "../../images_logos/google-cloud-logo.png"
import logoMicrosoftAzureStorage from "../../images_logos/azure-storage.png"


// Enlaces Externos

import logoflaticon from "./images/flaticon.png"






function Inicio() {


    function carga() {


        setTimeout(() => {
            const inicio = document.querySelector("#titleInita")
            if (inicio!=null){inicio.classList.add("show") } else { return; };
        }, 500);
        setTimeout(() => {
            const inicio = document.querySelector("#logoinit")
            if (inicio!=null){inicio.classList.add("show") } else { return; };
        }, 2000);
        setTimeout(() => {
            const inicio = document.querySelector("#slogan1")
            if (inicio!=null){inicio.classList.add("show") } else { return; };
        }, 3500);
        setTimeout(() => {
            const inicio = document.querySelector("#slogan2")
            if (inicio!=null){inicio.classList.add("show") } else { return; };
        }, 4500);
        
    }

    carga()

    return (
        <div id="inicio">
            <h2  id="titleInita"  className = "hideinit"  style={{ userSelect:"none", position : "absolute",fontFamily : "Blanka", fontSize : "60px", marginLeft : "75px", marginTop : "115px", color : "#e2e2e2"}} >Bienvenido a</h2>
            <img id="logoinit"  className = "hideinit"  src={logo} alt="" style={{marginTop : "-50px"}}/>
            <h5  id="slogan1"  className = "hideinit"  style={{ userSelect:"none", fontSize : "50px", marginLeft : "75px", color : "#ffffff", position : "absolute", transform : "translate(25px,-130px)"}} >Nuestro lugar.</h5>
            <h5  id="slogan2"  className = "hideinit"  style={{ userSelect:"none", fontSize : "50px", marginLeft : "75px", color : "#ff4345", position : "absolute", transform : "translate(25px,-80px)"}} >Tú lugar.</h5>
            
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column", alignItems:"center"}}>
                <h2 style={{ fontFamily:"Nexa",fontSize : "60px", color : "#e2e2e2", marginTop:"100px", textDecoration:"2px solid #e2e2e2 overline" ,paddingTop:"200px"}} >Lenguajes y Frameworks</h2>
                
                <h3 id="Front-End"></h3>
                <Seccion Tecnologias = "Front-End" Array = {
                    [
                        [logoHtml,"HTML","/Lenguajes/HTML"],
                        [logoCss,"CSS","/Lenguajes/CSS"],
                        [logoJs,"JavaScript","/Lenguajes/JavaScript"],
                        [logoTs,"TypeScript","/Lenguajes/TypeScript"],
                        [logoReact,"React JS","/Lenguajes/React"],
                        [logoAngular,"Angular","/Lenguajes/Angular"],
                        [logoVue,"Vue JS","/Lenguajes/Vue"]
                    ]} />

                <h3 id="Back-End"></h3>
                <Seccion Tecnologias = "Back-End" Array = {
                    [
                        [logoPython,"Python","/Lenguajes/Python"],
                        [logoNodejs,"Node JS","/Lenguajes/Nodejs"],
                        [logoCsharp,"C#","/Lenguajes/Csharp"],
                        [logoRuby,"Ruby","/Lenguajes/Ruby"],
                        [logoJava,"Java","/Lenguajes/Java"],
                        [logoPhp,"PHP","/Lenguajes/Php"]
                    ]} />
                
                <h3 id="Móvil"></h3>
                <Seccion Tecnologias = "Desarrollo Movil" Array = {
                    [
                        [logoKotlin,"Kotlin","/Lenguajes/Kotlin"],
                        [logoSwift,"Swift","/Lenguajes/Swift"],
                        [logoXamarin,"Xamarin","/Lenguajes/Xamarin"],
                        [logoReactN,"React Native","/Lenguajes/ReactN"]
                    ]} />


                <h2 style={{ fontFamily:"Nexa",fontSize : "60px", color : "#e2e2e2", textDecoration:"2px solid #e2e2e2 overline",paddingTop:"200px"}} >Herramientas de Desarrollo</h2>
                
                <h3 id="Versiones"></h3>
                <Seccion Tecnologias = "Control de Versiones" Array = {
                    [
                        [logogit,"Git","/Herramientas/Desarrollo/Git"],
                        [logogithub,"GitHub","/Herramientas/Desarrollo/GitHub"],
                        [logogitlab,"GitLab","/Herramientas/Desarrollo/GitLab"],
                        [logobitbucket,"Bitbucket","/Herramientas/Desarrollo/BitBucket"]
                    ]} />
                
                <h3 id="Editores"></h3>
                <Seccion Tecnologias = "Editores de código" Array = {
                    [
                        [logoVScode,"VS Code","/Herramientas/Desarrollo/VSCode"],
                        [logoSublime,"Sublime","/Herramientas/Desarrollo/Sublime"],
                        [logoAtom,"Atom","/Herramientas/Desarrollo/Atom"],
                        [logoVim,"Vim","/Herramientas/Desarrollo/Vim"]
                    ]} />

                <h3 id="dependencias"></h3>
                <Seccion Tecnologias = "Gestión de dependencias" Array = {
                    [
                        [logonpm,"npm","/Herramientas/Desarrollo/npm"],
                        [logopip,"pip","/Herramientas/Desarrollo/pip"],
                        [logoMaven,"Maven","/Herramientas/Desarrollo/Maven"],
                        [logoComposer,"Composer","/Herramientas/Desarrollo/Composer"]
                    ]} />
                
                <h3 id="IDE"></h3>
                <Seccion Tecnologias = "Entornos de Desarrollo Integrado (IDE)" Array = {
                    [
                        [logoeclipse,"Eclipse","/Herramientas/Desarrollo/Eclipse"],
                        [logoandroidstudio,"Android Studio","/Herramientas/Desarrollo/AndroidStudio"],
                        [logointellijidea,"IntelliJ IDEA","/Herramientas/Desarrollo/IntelliJIDEA"],
                        [logopycharm,"PyCharm","/Herramientas/Desarrollo/PyCharm"],
                        [logonetbeans,"NetBeans","/Herramientas/Desarrollo/NetBeans"]
                    ]} />

                <h2 style={{ fontFamily:"Nexa",fontSize : "60px", color : "#e2e2e2", textDecoration:"2px solid #e2e2e2 overline",paddingTop:"200px"}} >Herramientas de Diseño</h2>
                
                <h3 id="Diseño"></h3>
                <Seccion Tecnologias = "Diseño UX/UI, Animación y Prototipado  " Array = {
                    [
                        [logoAdobeAfterEffects,"Adobe After Effects","/Herramientas/Diseño/AdobeAfterEffects"],
                        [logoAdobeIllustrator,"Adobe Illustrator","/Herramientas/Diseño/AdobeIllustrator"],
                        [logoAdobePhotoshop,"Adobe Photoshop","/Herramientas/Diseño/AdobePhotoshop"],
                        [logoAdobeXD,"Adobe XD","/Herramientas/Diseño/AdobeXD"],
                        [logoAutodeskMaya,"Autodesk Maya","/Herramientas/Diseño/AutodeskMaya"],
                        [logoBlender,"Blender","/Herramientas/Diseño/Blender"],
                        [logoCinema4D,"Cinema 4D","/Herramientas/Diseño/Cinema4D"],
                        [logoFigma,"Figma","/Herramientas/Diseño/Figma"],
                        [logoInkscape,"Inkscape","/Herramientas/Diseño/Inkscape"],
                        [logoInVision,"InVision","/Herramientas/Diseño/InVision"],
                        [logoSketch,"Sketch","/Herramientas/Diseño/Sketch"],
                        [logoSynfigStudio,"Synfig Studio","/Herramientas/Diseño/SynfigStudio"]
                    ]} />

                <h2 style={{ fontFamily:"Nexa",fontSize : "60px", color : "#e2e2e2", textDecoration:"2px solid #e2e2e2 overline",paddingTop:"200px"}} >Bases de datos y almacenamiento</h2>
                
                <h3 id="DBsql"></h3>
                <Seccion Tecnologias = "Bases de datos Relacionales" Array = {
                    [
                        [logoMySQL,"MySQL","/DB/Relacionales/MySQL"],
                        [logoPostgreSQL,"PostgreSQL","/DB/Relacionales/PostgreSQL"],
                        [logoSQLite,"SQLite","/DB/Relacionales/SQLite"],
                        [logoOracleDB,"OracleDB","/DB/Relacionales/OracleDB"],
                        [logoMicrosoftSQLServer,"Microsoft SQL Server","/DB/Relacionales/MicrosoftSQLServer"],
                        
                    ]} />

                <h3 id="DBnosql"></h3>
                
                <Seccion Tecnologias = "Bases de datos No Relacionales" Array = {
                    [
                        [logoMongoDB,"MongoDB","/DB/NoRelacionales/MongoDB"],
                        [logoRedis,"Redis","/DB/NoRelacionales/Redis"],
                        [logoCassandra,"Cassandra","/DB/NoRelacionales/Cassandra"],
                        [logoCouchbase,"Couchbase","/DB/NoRelacionales/Couchbase"],
                        [logoDynamoDB,"DynamoDB","/DB/NoRelacionales/DynamoDB"],
                        
                    ]} />
                
                <h3 id="Almacenamiento"></h3>
                <Seccion Tecnologias = "Almacenamiento en la nube" Array = {
                    [
                        [logoDropbox,"Dropbox","/Almacenamiento/Dropbox"],
                        [logoAmazonS3,"AmazonS3","/Almacenamiento/AmazonS3"],
                        [logoGoogleCloudS,"Google Cloud Service","/Almacenamiento/GoogleCloudS"],
                        [logoMicrosoftAzureStorage,"Microsoft Azure Storage","/Almacenamiento/MicrosoftAzureStorage"],
                        
                    ]} />

                <h2 style={{ fontFamily:"Nexa",fontSize : "60px", color : "#e2e2e2", textDecoration:"2px solid #e2e2e2 overline",paddingTop:"200px"}} >Recursos</h2>
                
                <h3 id="Iconos"></h3>
                <Seccion Tecnologias = "Iconos" Array = {
                    [
                        [0,"flaticon","https://www.flaticon.es/",true],
                        [0,"thenounproject","https://thenounproject.com/",true],
                        [0,"iconstore","https://iconstore.co/",true],
                        [0,"iconos8","https://iconos8.es/",true],
                        [0,"streamlineicons","https://streamlineicons.com/",true],
                        [0,"iconmonstr","https://iconmonstr.com/",true],
                        [0,"dryicons","https://dryicons.com/",true],
                        [0,"iconfinder","https://www.iconfinder.com/",true],
                        [0,"iconscout","https://iconscout.com/",true],
                        [0,"uxwing","https://uxwing.com/",true],
                        [0,"feathericons","https://feathericons.com/",true],
                        [0,"google icons","https://fonts.google.com/icons",true],
                        [0,"tablericons","https://tablericons.com/",true],
                        [0,"css.gg","https://css.gg/",true],
                        [0,"ionicons","https://ionic.io/ionicons",true]
                    ]} />

                <h3 id="Imagenes"></h3>
                <Seccion Tecnologias = "Imagenes" Array = {
                    [
                        [0,"unsplash","https://unsplash.com/",true],
                        [0,"pexels","https://www.pexels.com/es-es/",true],
                        [0,"pixabay","https://pixabay.com/es/",true],
                        [0,"coverr","https://coverr.co/",true],
                        [0,"undraw","https://undraw.co/",true],
                        [0,"freepik","https://www.freepik.es/",true],
                        [0,"svgporn","https://svgporn.com/",true],
                        [0,"videvo","https://www.videvo.net/",true],
                        [0,"burst.shopify","https://burst.shopify.com/",true],
                        [0,"freeimages","https://www.freeimages.com/es",true],
                        [0,"kaboompics","https://kaboompics.com/",true],
                        [0,"placeholder","https://placeholder.com/",true],
                    ]} />


                <h3 id="Plantillas"></h3>
                <Seccion Tecnologias = "Plantillas" Array = {
                    [
                        [0,"colorlib","https://colorlib.com/",true],
                        [0,"startbootstrap","https://startbootstrap.com/templates",true],
                        [0,"graphberry","https://www.graphberry.com/",true],
                        [0,"templatemo","https://templatemo.com/",true],
                        [0,"html5up","https://html5up.net/",true],
                        [0,"templated","https://templated.co/",true],
                        [0,"freehtml5","https://freehtml5.co/",true],
                        [0,"bootstraptaste","https://bootstraptaste.com/",true],
                        [0,"bootstrapmade","https://bootstrapmade.com/",true],
                        [0,"plantillashtmlgratis","https://plantillashtmlgratis.com/",true],
                        [0,"inovatik","https://inovatik.com/",true],
                        [0,"creative-tim","https://www.creative-tim.com/templates",true],
                        [0,"html5boilerplate","https://html5boilerplate.com/",true],
                        [0,"elements.envato","https://elements.envato.com/es-419/web-templates",true]
                    ]} />

                <h3 id="Colores"></h3>
                <Seccion Tecnologias = "Colores" Array = {
                    [
                        [0,"colorhunt","https://colorhunt.co/palette/253094",true],
                        [0,"gradienta","https://gradienta.io/shattered-feelings",true],
                        [0,"uigradients","https://uigradients.com/#Shore",true],
                        [0,"material","https://material.colorion.co/",true],
                        [0,"grabient","https://www.grabient.com/",true],
                        [0,"gradientbuttons","https://gradientbuttons.colorion.co/",true],
                        [0,"coolors","https://coolors.co/",true],
                        [0,"flatuicolors","https://flatuicolors.com/",true]
                        
                    ]} />
                    

                <h3 id="APIs"></h3>
                <Seccion Tecnologias = "APIs Públicas" Array = {
                    [
                        [0,"public-apis","https://github.com/public-apis/public-apis",true],
                        [0,"apihouse","https://apihouse.vercel.app/",true],
                        [0,"apilist","https://apilist.fun/",true],
                        [0,"public-apis.io","https://public-apis.io/",true]
                    ]} />
                
                <h3 id="Desafios"></h3>
                <Seccion Tecnologias = "Desafios" Array = {
                    [
                        [0,"frontendmentor","https://www.frontendmentor.io/",true],
                        [0,"acefrontend","https://www.acefrontend.com/",true],
                        [0,"100dayscss","https://100dayscss.com/",true],
                        [0,"codewars","https://www.codewars.com/",true],
                        [0,"codingame","https://www.codingame.com/start",true],
                        [0,"topcoder","https://www.topcoder.com/",true],
                        [0,"coderbyte","https://coderbyte.com/",true],
                        [0,"hackerrank","https://www.hackerrank.com/",true],
                        [0,"codechef","https://www.codechef.com/",true],
                        [0,"leetcode","https://leetcode.com/",true],
                        [0,"css-tricks","https://css-tricks.com/",true]
                    ]} />
                
                <h3 id="Animaciones"></h3>
                <Seccion Tecnologias = "Animaciones CSS" Array = {
                    [
                        [0,"Hover.css	","https://ianlunn.github.io/Hover/",true],
                        [0,"Magic Animations	","https://www.minimamente.com/project/magic/",true],
                        [0,"Animista	","https://animista.net/",true],
                        [0,"Animate.css	","https://animate.style/",true],
                        [0,"CSSHAKE	","https://elrumordelaluz.github.io/csshake/",true],
                        [0,"Wicked CSS	","https://kristofferandreasen.github.io/wickedCSS/",true]
                    ]} />

                <h3 id="Otros"></h3>
                <Seccion Tecnologias = "Otros Recursos" Array = {
                    [
                        [0,"devurls","	https://devurls.com/",true],
                        [0,"devresourc	","https://devresourc.es/",true],
                        [0,"freecodetools","	https://freecodetools.org/",true],
                        [0,"devsamples","	https://www.devsamples.com/",true],
                        [0,"shortcode	","https://shortcode.dev/",true],
                        [0,"overapi	","https://overapi.com/",true],
                        [0,"calltoidea.com	","https://www.calltoidea.com/",true],
                        [0,"lordicon.com	","https://lordicon.com/",true],
                        [0,"markodenic.com","	https://markodenic.com/tools/",true],
                        [0,"uiverse.io	","https://uiverse.io/",true],
                        [0,"metatags.io","	https://metatags.io/",true],
                        [0,"gitignore	","https://www.toptal.com/developers/gitignore",true],
                        [0,"Whirl","	https://whirl.netlify.app/",true],
                        [0,"1loc.dev","https://1loc.dev/",true],
                        [0,"10015","	https://10015.io/",true]
                    ]} />



            </div>
        </div>
    )
}

export default Inicio

/*

<Seccion Tecnologias = "Imagenes" Array = {
                    [
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true],
                        [0,"",true]
                    ]} />


*/