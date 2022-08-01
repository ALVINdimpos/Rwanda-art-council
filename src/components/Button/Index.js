import React from 'react'
import ButtonStyle from "./Style.module.css";
function Index(props) {
  return (
    <div>
        <button className={ButtonStyle.btnStyle} onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default Index