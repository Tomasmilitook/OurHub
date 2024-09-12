import React from "react";
import Codelines from "../Codelines";
import "./Seccion.css"
import { Link } from "react-router-dom";
import opend from "../../images/expandir-flechas.png"

function Seccion(props) {
    const Tecnologias = props.Tecnologias;
    const Array = props.Array;
    var clase = "Sectionlogo"
    function content() {
      const HtmlArray = []
      for (let index = 0; index < Array.length; index++) {
          const element = Array[index];

          var img = element[0]
          let leng = element[1]
          let link  = element[2]
          if (element[3]){
            var html = (
              <div>
                  <a href={link} className="Links" target="_blank">
                      <div className="Text" style={{display:"flex", justifyContent :"center", alignItems : "center"}}>
                          <img src={opend} className = "image" alt="" />
                          <b style={{margin:"30px"}} >{leng.toUpperCase()}</b>
                      </div>
                  </a>
              </div>
            )
          }
          else {

            var html = (
              <div>
                  <Link to={link} className="Linked" target="_self">
                      <div style={{display:"flex", justifyContent :"center", alignItems : "center"}}>
                          <img className={clase} src={img} alt="" />
                          <b className = "lenguajetitle">{leng.toUpperCase()}</b>
                      </div>
                  </Link>
              </div>
          )
        }
          HtmlArray.push(html)
            
      }
    
    return HtmlArray
  }
    return (
        <div >
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:"center", marginTop : "150px"}}>
                
                <h2 style={{fontSize:"50px", margin:"30px", }}>{Tecnologias}</h2>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"50vw"}}>
                    {content()}
                </div>
            </div>
        </div>
    )
}

export default Seccion