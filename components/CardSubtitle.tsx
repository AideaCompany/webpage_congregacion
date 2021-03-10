import React from 'react'

const TargetText = (props: { title?: string; text?: string }) => {
  return (
    <div className="text">
      <div className="div__text">
        {props.title && <h1 className="title">{props.title}</h1>}
        {props.text && <div className="contact_subtitle" dangerouslySetInnerHTML={{ __html: props.text }}></div>}
      </div>
    </div>
  )
}

export default TargetText
