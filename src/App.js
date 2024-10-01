import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import './App.css';
import NavBar from './components/NavBar/NavBar';


// Pages
import Inicio from './components/inicio/Inicio';

// Front
import HTMLPage from './components/Pages/FrontEnd/HTMLPage';
import CSSPage from './components/Pages/FrontEnd/CSSPage';
import JSPage from './components/Pages/FrontEnd/JSPage';
import TSPage from './components/Pages/FrontEnd/TSPage';
import ReactPage from './components/Pages/FrontEnd/ReactPage';
import AngularPage from './components/Pages/FrontEnd/AngularPage';
import VuePage from './components/Pages/FrontEnd/VuePage';

//Back
import PythonPage from './components/Pages/Backend/PYPage';
import NodeJSPage from './components/Pages/Backend/NodeJSPage';
import CSharpPage from './components/Pages/Backend/CSharpPage';
import RubyPage from './components/Pages/Backend/RubyPage';
import JavaPage from './components/Pages/Backend/JavaPage';
import PHPPage from './components/Pages/Backend/PhpPage';

//Mobile
import KotlinPage from './components/Pages/Mobile/KotlixPage';
import SwiftPage from './components/Pages/Mobile/SwitfPage';
import XamarinPage from './components/Pages/Mobile/XamarinPage';
import ReactNPage from './components/Pages/Mobile/ReactNPage';

//          Tools
//Editores

import VSCodePage from './components/Pages/Tools/VscodePage';
import SublimeTextPage from './components/Pages/Tools/SublimePage';
import AtomPage from './components/Pages/Tools/AtomPage';
import VimPage from './components/Pages/Tools/VimPage';
import GitPage from './components/Pages/Tools/GitPage';
import GitHubPage from './components/Pages/Tools/GitHubPage';
import GitLabPage from './components/Pages/Tools/GitLabPage';
import BitbucketPage from './components/Pages/Tools/BitbucketPage';
import NpmPage from './components/Pages/Tools/NpmPage';
import PipPage from './components/Pages/Tools/PipPage';
import MavenPage from './components/Pages/Tools/MavenPage';
import ComposerPage from './components/Pages/Tools/ComposerPage';

import IntelliJIDEAPage from './components/Pages/Tools/IntelliJIDEAPage';
import EclipsePage from './components/Pages/Tools/EclipsePage';
import PyCharmPage from './components/Pages/Tools/PyCharmPage';
import NetBeansPage from './components/Pages/Tools/NetBeansPage';
import AndroidStudioPage from './components/Pages/Tools/AndroidStudioPage';


import AdobeAfterEffectsPage from './components/Pages/Design/AdobeAfterEffectsPage';
import AdobeIllustratorPage from './components/Pages/Design/AdobeIllustratorPage';
import AdobePhotoshopPage from './components/Pages/Design/AdobePhotoshopPage';
import AdobeXDPage from './components/Pages/Design/AdobeXDPage';
import AutodeskMayaPage from './components/Pages/Design/AutodeskMayaPage';
import BlenderPage from './components/Pages/Design/BlenderPage';
import Cinema4DPage from './components/Pages/Design/Cinema4DPage';
import FigmaPage from './components/Pages/Design/FigmaPage';
import InVisionPage from './components/Pages/Design/InVisionPage';
import InkscapePage from './components/Pages/Design/InkscapePage';
import SketchPage from './components/Pages/Design/SketchPage';
import SynfigStudioPage from './components/Pages/Design/SynfigStudioPage';



import MySQLPage from "./components/Pages/Services/MySql"
import PostgreSQLPage from "./components/Pages/Services/PostgreSQL"
import SQLitePage from "./components/Pages/Services/SQLite"
import OracleDBPage from "./components/Pages/Services/OracleDB"
import MicrosoftSQLServerPage from "./components/Pages/Services/MicrosoftSQLServer"
import MongoDBPage from "./components/Pages/Services/MongoDB"
import RedisPage from "./components/Pages/Services/Redis"
import CassandraPage from "./components/Pages/Services/Cassandra"
import CouchbasePage from "./components/Pages/Services/Couchbase"
import DynamoDBPage from "./components/Pages/Services/DynamoDB"
import DropboxPage from "./components/Pages/Services/Dropbox"
import AmazonS3Page from "./components/Pages/Services/AmazonS3"
import GoogleCloudSPage from "./components/Pages/Services/GoogleCloudS"
import MicrosoftAzureStoragePage from "./components/Pages/Services/MicrosoftAzureStorage"



function App() {
  const ScrollToTop = () =>{
      window.scrollTo(0,0)
  }

  
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Analytics/>
        <Routes>
            {/*Home*/}

            <Route path="/" element = { <div><Inicio/></div> } />

            {/*FrontEnd*/}

            <Route path="/Lenguajes/HTML" element = { <div><ScrollToTop/><HTMLPage/></div> } />
            <Route path="/Lenguajes/CSS" element = { <div><ScrollToTop/><CSSPage /></div> } />
            <Route path="/Lenguajes/JavaScript" element = { <div><ScrollToTop/><JSPage /></div> } />
            <Route path="/Lenguajes/TypeScript" element = { <div><ScrollToTop/><TSPage/></div> } />
            <Route path="/Lenguajes/React" element = { <div><ScrollToTop/><ReactPage/></div> } />
            <Route path="/Lenguajes/Angular" element = { <div><ScrollToTop/><AngularPage/></div> } />
            <Route path="/Lenguajes/Vue" element = { <div><ScrollToTop/><VuePage/></div> } />

            {/*BackEnd*/}

            <Route path="/Lenguajes/Python" element = { <div><ScrollToTop/><PythonPage/></div> } />
            <Route path="/Lenguajes/Nodejs" element = { <div><ScrollToTop/><NodeJSPage/></div> } />
            <Route path="/Lenguajes/Csharp" element = { <div><ScrollToTop/><CSharpPage/></div> } />
            <Route path="/Lenguajes/Ruby"   element = { <div><ScrollToTop/><RubyPage/></div> } />
            <Route path="/Lenguajes/Java"   element = { <div><ScrollToTop/><JavaPage/></div> } />
            <Route path="/Lenguajes/Php"    element = { <div><ScrollToTop/><PHPPage/></div> } />

            {/*Mobile*/}

            <Route path="/Lenguajes/Kotlin" element = { <div><ScrollToTop/><KotlinPage/></div> } />
            <Route path="/Lenguajes/Swift" element = { <div><ScrollToTop/><SwiftPage/></div> } />
            <Route path="/Lenguajes/ReactN" element = { <div><ScrollToTop/><ReactNPage/></div> } />
            <Route path="/Lenguajes/Xamarin"   element = { <div><ScrollToTop/><XamarinPage/></div> } />

                                {/* Tools */}
            {/*Editores*/}

            <Route path="/Herramientas/Desarrollo/VSCode" element = { <div><ScrollToTop/><VSCodePage/></div> } />
            <Route path="/Herramientas/Desarrollo/Sublime" element = { <div><ScrollToTop/><SublimeTextPage/></div> } />
            <Route path="/Herramientas/Desarrollo/Atom" element = { <div><ScrollToTop/><AtomPage/></div> } />
            <Route path="/Herramientas/Desarrollo/Vim"   element = { <div><ScrollToTop/><VimPage/></div> } />

            {/*Versiones*/}

            <Route path="/Herramientas/Desarrollo/Git" element = { <div><ScrollToTop/><GitPage/></div> } />
            <Route path="/Herramientas/Desarrollo/GitHub" element = { <div><ScrollToTop/><GitHubPage/></div> } />
            <Route path="/Herramientas/Desarrollo/GitLab" element = { <div><ScrollToTop/><GitLabPage/></div> } />
            <Route path="/Herramientas/Desarrollo/BitBucket"   element = { <div><ScrollToTop/><BitbucketPage/></div> } />

            {/*Gestor de Dependencias*/}

            <Route path="/Herramientas/Desarrollo/npm" element = { <div><ScrollToTop/><NpmPage/></div> } />
            <Route path="/Herramientas/Desarrollo/pip" element = { <div><ScrollToTop/><PipPage/></div> } />
            <Route path="/Herramientas/Desarrollo/Maven" element = { <div><ScrollToTop/><MavenPage/></div> } />
            <Route path="/Herramientas/Desarrollo/Composer"   element = { <div><ScrollToTop/><ComposerPage/></div> } />

            {/*IDEs*/}

            <Route path="/Herramientas/Desarrollo/IntelliJIDEA" element = { <div><ScrollToTop/><IntelliJIDEAPage/></div> } />
            <Route path="/Herramientas/Desarrollo/Eclipse" element = { <div><ScrollToTop/><EclipsePage/></div> } />
            <Route path="/Herramientas/Desarrollo/PyCharm" element = { <div><ScrollToTop/><PyCharmPage/></div> } />
            <Route path="/Herramientas/Desarrollo/NetBeans" element = { <div><ScrollToTop/><NetBeansPage/></div> } />
            <Route path="/Herramientas/Desarrollo/AndroidStudio"   element = { <div><ScrollToTop/><AndroidStudioPage/></div> } />

                          {/* Diseño */} 

            <Route path="/Herramientas/Diseño/AdobeAfterEffects"    element = { <div><ScrollToTop/><AdobeAfterEffectsPage/></div> } />
            <Route path="/Herramientas/Diseño/AdobeIllustrator"  element = { <div><ScrollToTop/><AdobeIllustratorPage/></div> } />
            <Route path="/Herramientas/Diseño/AdobePhotoshop"            element = { <div><ScrollToTop/><AdobePhotoshopPage/></div> } />
            <Route path="/Herramientas/Diseño/AdobeXD"             element = { <div><ScrollToTop/><AdobeXDPage/></div> } />
            <Route path="/Herramientas/Diseño/AutodeskMaya"          element = { <div><ScrollToTop/><AutodeskMayaPage/></div> } />
            <Route path="/Herramientas/Diseño/Blender"           element = { <div><ScrollToTop/><BlenderPage/></div> } />
            <Route path="/Herramientas/Diseño/Cinema4D"          element = { <div><ScrollToTop/><Cinema4DPage/></div> } />
            <Route path="/Herramientas/Diseño/Figma" element = { <div><ScrollToTop/><FigmaPage/></div> } />
            <Route path="/Herramientas/Diseño/InVision"           element = { <div><ScrollToTop/><InVisionPage/></div> } />
            <Route path="/Herramientas/Diseño/Inkscape"      element = { <div><ScrollToTop/><InkscapePage/></div> } />
            <Route path="/Herramientas/Diseño/Sketch"          element = { <div><ScrollToTop/><SketchPage/></div> } />
            <Route path="/Herramientas/Diseño/SynfigStudio"      element = { <div><ScrollToTop/><SynfigStudioPage/></div> } />

            {/* DB y Almacenamiento */} 

            <Route path="/DB/Relacionales/MySQL"                   element = { <div><ScrollToTop/><MySQLPage/></div> } />
            <Route path="/DB/Relacionales/PostgreSQL"              element = { <div><ScrollToTop/><PostgreSQLPage/></div> } />
            <Route path="/DB/Relacionales/OracleDB"                element = { <div><ScrollToTop/><OracleDBPage/></div> } />
            <Route path="/DB/Relacionales/MicrosoftSQLServer"      element = { <div><ScrollToTop/><MicrosoftSQLServerPage/></div> } />
            <Route path="/DB/Relacionales/SQLite"                  element = { <div><ScrollToTop/><SQLitePage/></div> } />
            
            <Route path="/DB/NoRelacionales/MongoDB"               element = { <div><ScrollToTop/><MongoDBPage/></div> } />
            <Route path="/DB/NoRelacionales/Redis"                 element = { <div><ScrollToTop/><RedisPage/></div> } />
            <Route path="/DB/NoRelacionales/Cassandra"             element = { <div><ScrollToTop/><CassandraPage/></div> } />
            <Route path="/DB/NoRelacionales/Couchbase"             element = { <div><ScrollToTop/><CouchbasePage/></div> } />
            <Route path="/DB/NoRelacionales/DynamoDB"              element = { <div><ScrollToTop/><DynamoDBPage/></div> } />
            
            <Route path="/Almacenamiento/AmazonS3"                 element = { <div><ScrollToTop/><AmazonS3Page/></div> } />
            <Route path="/Almacenamiento/GoogleCloudS"             element = { <div><ScrollToTop/><GoogleCloudSPage/></div> } />
            <Route path="/Almacenamiento/MicrosoftAzureStorage"    element = { <div><ScrollToTop/><MicrosoftAzureStoragePage/></div> } />
            <Route path="/Almacenamiento/Dropbox"                  element = { <div><ScrollToTop/><DropboxPage/></div> } />
            




            {/*Error404*/}

            <Route path="*" element = { <div><ScrollToTop/><Inicio/></div> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


