import React from 'react'
import "./PageLanguage.css"
import Codelines from '../Codelines'

import About from "../../images/about.png"
import documentacion from "../../images/documentation.png"
import resources from "../../images/resources.png"
import courses from "../../images/courses.png"
import exercises from "../../images/exercises.png"
import Descargar from "../../images/flecha-hacia-abajo.png"
import indicator from "../../images/indicator.png"


function PageLanguage(props) {
    const style = props.style;
    const title = props.title;
    const subtitle = props.subtitle;
    const borderColor = props.bd_color;
    const about = props.about;
    const logo = props.logo;
    const install = props.install;
    var doc = documentacion

    if (install===true){
        var DownButton = "Instalar"
        doc = Descargar
        var seccion2 = "#Instalar"
    } else if (install === "Empezar"){
        var DownButton = "Empezar" 
        doc = exercises
        var seccion2 = "#Empezar"
    } else{
        var DownButton = "Documentación"
        var seccion2 = "#Documentación"
        doc = documentacion

    }


  return (
    <div >
        <div className='container'>
            <div className={style==="CSS" ? "hide" : style==="HTML" ? "hide":"show"}>
                <Codelines top = "20%" left = "5%" width = "160px" bg = "#5DCAEC"  />
                <Codelines top = "23%" left = "5%" width = "130px" bg = "#50FB80"  />
                <Codelines top = "23%" left = "15%" width = "120px" bg = "#EBA031"  />
                <Codelines top = "26%" left = "9%" width = "140px" bg = "#EA6363"  />
                <Codelines top = "29%" left = "5%" width = "88px" bg = "#EBA031"  />
                <Codelines top = "29%" left = "12%" width = "60px" bg = "#5DCAEC"  />
            </div>

            <div className={style==="CSS" ? "show" : "hide"}>
                <Codelines top = "20%" left = "5%" width = "85px" bg = "#EBA031"  />
                <Codelines top = "20%" left = "12%" width = "30px" bg = "#50FB80"  />
                <Codelines top = "23%" left = "9%" width = "40px" bg = "#B941E3"  />
                <Codelines top = "23%" left = "13%" width = "60px" bg = "#5DCAEC"  />
                <Codelines top = "26%" left = "9%" width = "40px" bg = "#B941E3"  />
                <Codelines top = "26%" left = "13%" width = "60px" bg = "#EA6363"  />
                <Codelines top = "29%" left = "5%" width = "30px" bg = "#50FB80"  />
            </div>

            <img src={logo} alt="" className='Logo'/>


            

            <div className={style==="CSS" ? "hide" : style==="HTML" ? "hide":"show"}>
                <Codelines top = "61%" left = "5%" width = "110px" bg = "#EBA031"  />
                <Codelines top = "64%" left = "9%" width = "60px" bg = "#5DCAEC"  />
                <Codelines top = "64%" left = "14%" width = "120px" bg = "#50FB80"  />
                <Codelines top = "67%" left = "5%" width = "60px" bg = "#50FB80"  />
                <Codelines top = "67%" left = "10%" width = "140px" bg = "#EA6363"  />
                <Codelines top = "70%" left = "5%" width = "160px" bg = "#EBA031"  />
                <Codelines top = "73%" left = "9%" width = "70px" bg = "#5DCAEC"  />
                <Codelines top = "76%" left = "9%" width = "90px" bg = "#EA6363"  />
            </div>

            <div className={style==="CSS" ? "show" : "hide"}>
                <Codelines top = "61%" left = "5%" width = "60px" bg = "#EBA031"  />
                <Codelines top = "61%" left = "10%" width = "30px" bg = "#50FB80"  />

                <Codelines top = "64%" left = "9%" width = "90px" bg = "#B941E3"  />
                <Codelines top = "64%" left = "16%" width = "40px" bg = "#5DCAEC"  />

                <Codelines top = "67%" left = "9%" width = "30px" bg = "#B941E3"  />
                <Codelines top = "67%" left = "12%" width = "90px" bg = "#EA6363"  />
                
                <Codelines top = "70%" left = "9%" width = "70px" bg = "#B941E3"  />
                <Codelines top = "70%" left = "15%" width = "50px" bg = "#EA6363"  />

                <Codelines top = "73%" left = "9%" width = "40px" bg = "#B941E3"  />
                <Codelines top = "73%" left = "13%" width = "70px" bg = "#5DCAEC"  />

                <Codelines top = "76%" left = "5%" width = "30px" bg = "#50FB80"  />
            </div>

            <div className='title'>
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
            </div>
            <div className='Buttons'>
                <a className='Button' style={{border: "4px groove"+borderColor}} href="#Sobre">
                    <img src={About} alt="" />
                    <h6>Sobre {about}</h6></a>
                <a className='Button' style={{border: "4px groove"+borderColor}} href={seccion2}>
                    <img src={doc} alt="" />
                    <h6>{DownButton}</h6></a>
                <a className='Button' style={{border: "4px groove"+borderColor}} href='#Recursos'>
                    <img src={resources} alt=""/>
                    <h6 >Recursos</h6></a>
                
            </div>
            <div className='indicator'>
                <img src={indicator} alt="" className='indicatorImg'/>
            </div>
        </div>
    </div>
  )
}

export default PageLanguage

/*
#EA6363 rojo
#5DCAEC celeste
#50FB80 verde
#EBA031 amarillo
#B941E3 violeta
*/