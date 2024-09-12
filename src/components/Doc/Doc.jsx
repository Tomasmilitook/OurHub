import React from 'react'
import "./Doc.css"
import down from "../../images/flecha-hacia-abajo.png"


function Doc(props) {
    const text = props.text
    const bg = props.bg
    const fbg = props.fbg
    const downloadcolor = props.download
    const pdf = props.pdf
    const url = props.url
    var flag = props.flag
    
    if (flag===undefined){
      if (url !== undefined){ flag = false } else {flag = true}
    }

    

  if (flag===true){
  return (
    <div>
      <section id='Documentacion' style={{height:"80px"}}></section>

        <div style={{display:'flex', marginBottom:"300px",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h2 style={{fontSize:"50px"}} >Documentación</h2>
            <a className='downloadbutton' href={pdf} download style={{backgroundColor:bg, color:fbg}}> {text} <img src={down} style={{marginLeft:"20px", filter:"brightness("+downloadcolor+")"}}/></a>
            <a className='downloadbutton' href={pdf}  target="_blank" style={{backgroundColor:bg, color:fbg}}>Ver Online</a>
        </div>
    </div>
  )}
  else if (flag==="Empezar"){ 
    return (
      <div>
        <section id='Empezar' style={{height:"80px"}}></section>
  
          <div style={{display:'flex', marginBottom:"300px",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
              <h2 style={{fontSize:"50px"}} >Empezar</h2>
              <a className='downloadbutton' target="_blank" href={url} style={{backgroundColor:bg, color:fbg}}> {text}</a>
          </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <section id='Instalar' style={{height:"80px"}}></section>
  
          <div style={{display:'flex', marginBottom:"300px",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
              <h2 style={{fontSize:"50px"}} >Descarga</h2>
              <a className='downloadbutton' target="_blank" href={url} style={{backgroundColor:bg, color:fbg}}> {text} <img src={down} style={{marginLeft:"20px", filter:"brightness("+downloadcolor+")"}}/></a>
          </div>
      </div>
    )
  }
}

export default Doc

