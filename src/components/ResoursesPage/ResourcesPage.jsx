import React from 'react'
import "./styles.css"

import imagearrow from "../../images/flecha-correcta.png"


function ResourcesPage(props) {
    const language = props.language;
    const videosArray = props.videosArray;
    const pagesArray = props.pagesArray;

    function Videocontent() {
      const HtmlVideoArray = []
      for (let index = 0; index < videosArray.length; index++) {
          const element = videosArray[index];

          var img = element[0]
          let desc = element[1]
          let autor = element[2]
          let link  = element[3]

          var html = (
                <div className='InnerHtmlResouces'>
                    <div className='ResoucesDesc'>
                        <b>{desc}</b>
                        <i style={{margin:"10px"}}>{autor}</i>
                        <a href={link} target="_blank">Ver <img src={imagearrow} alt=""/></a>
                    </div>
                    <img src={img} alt="img" style={{width:"300px"}}/>
                </div>
          )
          HtmlVideoArray.push(html)
            
      }
    
    return HtmlVideoArray
  }
      
    function Pagescontent() {
      const HtmlPagesArray = []
      for (let index = 0; index < pagesArray.length; index++) {
          const element = pagesArray[index];

          var img = element[0]
          let desc = element[1]
          let autor = element[2]
          let link  = element[3]

          var html = (
                <div className='InnerHtmlResouces'>
                    <div className='ResoucesDesc'>
                        <b>{desc}</b>
                        <i style={{margin:"10px"}}>{autor}</i>
                        <a href={link} target="_blank">Ver <img src={imagearrow} alt=""/></a>
                    </div>
                    <img src={img} alt="img" style={{width:"350px"}}/>
                </div>
          )
          HtmlPagesArray.push(html)
            
      }
    
    return HtmlPagesArray

  }
  
        
    



  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:"center"}} id='Recursos'>
      <h2 style={{fontSize:"50px"}}>Recursos Gratuitos para aprender {language}</h2>
      <h2 style={{fontSize:"30px"}}>Videos</h2>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {Videocontent()}
      </div>
    </div>
  )
}

export default ResourcesPage