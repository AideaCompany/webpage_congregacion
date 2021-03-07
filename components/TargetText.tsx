import React from 'react'

const TargetText = (props: { title?: string; text?: string; children?: JSX.Element; classname?: string }) => {
  return (
    <div className={`text ${props.classname ? props.classname : ''}`}>
      <div className="div__text">
        {props.title && <h1 className="title">{props.title}</h1>}
        <p>{props.text}</p>
        {props.children && props.children}
      </div>
    </div>
  )
}

export default TargetText
