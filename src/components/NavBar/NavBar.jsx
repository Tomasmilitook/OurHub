import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import logo from "../../images/logo2.png"


function NavBar() {
  const [homeState,     sethomeState]      = useState(true)
  const [toolsState, settoolsState]  = useState(false)
  const [resousesState,  setresousesState]   = useState(false)
  const [languagesState,    setlanguagesState]     = useState(false)

  var navStates = [sethomeState,settoolsState,setresousesState,setlanguagesState]



  function changeSection(key) {
    for (let index = 0; index < navStates.length; index++) { 
      navStates[index](false) 
    }

    switch (key) {
      case 1:
        sethomeState(true)
        break;
      case 2:
        settoolsState(true)
        break;
      case 3:
        setresousesState(true)
        break;
      case 4:
        setlanguagesState(true)
        break;
    }
    
  }

  

  return (
    <div id='NavBar' >
      <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark" style={{background : "#e2e2e207",backdropFilter:"blur(12px)"}} >
        <div className="container-fluid " >
          <Link to={"/"}><img src={logo} alt="" width="50" style={{cursor:"pointer", background : "#e2e2e2", borderRadius:"90px "}} /></Link>
          
          <button className="navbar custombutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{justifyContent:"center"}}>

            <ul className="navbar-nav">

              <li>
              <a onClick={() => changeSection(1)} className= {homeState ? "nav-link active ": "nav-link "}    href="/#inicio" aria-expanded="false">Inicio</a>
              </li>

              <li className="nav-item dropdown">
                <a  className= {languagesState ? "nav-link active dropdown-toggle": "nav-link dropdown-toggle"} data-bs-auto-close="true"     href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Lenguajes</a>
                <ul className="dropdown-menu" style={{background : "#101010"}}>
                  <li onClick={() => changeSection(4)}><a className="dropdown-item" href="/#Front-End">Front-End</a></li>
                  <li onClick={() => changeSection(4)}><a className="dropdown-item" href={"/#Back-End"}>Back-End</a></li>
                  <li onClick={() => changeSection(4)}><a className="dropdown-item" to={"/#Móvil"}>Móvil</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a  className= {toolsState ? "nav-link active dropdown-toggle": "nav-link dropdown-toggle"} data-bs-auto-close="true"     href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Herramientas</a>
                <ul className="dropdown-menu" style={{background : "#101010"}}>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#Versiones"}>Control de Versiones</a></li>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#Editores"}>Editores de codigo</a></li>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#dependencias"}>Gestión de dependencias</a></li>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#IDE"}>IDEs</a></li>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#Diseño"}>Diseño UX/UI, Animación y Prototipado</a></li>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#DBsql"}>Bases de Datos SQL</a></li>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#DBnosql"}>Bases de Datos NoSQL</a></li>
                  <li onClick={() => changeSection(2)}><a className="dropdown-item" href={"/#Almacenamiento"}>Almacenamiento</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a  className= {resousesState ? "nav-link active dropdown-toggle": "nav-link dropdown-toggle"} data-bs-auto-close="true"   href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Recursos</a>
                <ul className="dropdown-menu" style={{background : "#101010"}}>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#Iconos"}>Iconos</a></li>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#Imagenes"}>Imagenes</a></li>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#Plantillas"}>Plantillas</a></li>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#Colores"}>Colores</a></li>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#APIs"}>APIs Públicas</a></li>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#Desafios"}>Desafios</a></li>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#Animaciones"}>Animaciones CSS</a></li>
                  <li onClick={() => changeSection(3)}><a className="dropdown-item" href={"/#Otros"}>Otros</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  )


}
export default NavBar

