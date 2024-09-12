import React from 'react'

function Aboutpage(props) {
  const descripcion = props.des;
  const logo = props.logo;

  const li_1 = props.li1;
  const li_2 = props.li2;
  const li_3 = props.li3;
  const li_4 = props.li4;
  const li_5 = props.li5;
  const li_6 = props.li6;

  const p_1 = props.p1;
  const p_2 = props.p2;
  const p_3 = props.p3;
  const p_4 = props.p4;
  const p_5 = props.p5;
  const p_6 = props.p6;

  return (
    <div style={{marginBottom:"45%"}} >
      <section id='Sobre' style={{height:"80px"}}></section>
      <h2 style={{marginLeft:"42vw",fontSize:"50px"}}>Acerca de</h2>
      <div className='container' style={{display:'flex', justifyContent:"center"}}>
        <img src={logo} alt="" style={{width:"400px", height:"400px"}}/>
        <p style={{width:"500px", marginTop:"80px"}}>{descripcion}</p>
        <ul style={{position:'absolute', marginTop:"78vh", listStyle:'none', width:"80vw"}}>
          <li style={{fontFamily:"Nexa"}}>{li_1}<p style={{fontFamily:"Nexa-light"}}>{p_1}</p> </li>
          <li style={{fontFamily:"Nexa"}}>{li_2}<p style={{fontFamily:"Nexa-light"}}>{p_2}</p> </li>
          <li style={{fontFamily:"Nexa"}}>{li_3}<p style={{fontFamily:"Nexa-light"}}>{p_3}</p> </li>
          <li style={{fontFamily:"Nexa"}}>{li_4}<p style={{fontFamily:"Nexa-light"}}>{p_4}</p> </li>
          <li style={{fontFamily:"Nexa"}}>{li_5}<p style={{fontFamily:"Nexa-light"}}>{p_5}</p> </li>
          <li style={{fontFamily:"Nexa"}}>{li_6}<p style={{fontFamily:"Nexa-light"}}>{p_6}</p> </li>
        </ul>
      </div>
    </div>
  )
}

export default Aboutpage
