import React from 'react'

const TargetText = (props: { title?: string; text?: string; children?: JSX.Element }) => {
  return (
    <div className="text">
      <div className="div__text">
        {props.title && <h1 className="title">{props.title}</h1>}
        <p>{props.text}</p>
        {props.children && props.children}
      </div>
    </div>
  )
}

export default TargetText
