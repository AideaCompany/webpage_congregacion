import React from 'react'

const TargetText = (props: { title?: string; text: any[] }) => {
  return (
    <div className="text">
      <div className="div__text">
        {props.title && <h1 className="title">{props.title}</h1>}
        {props.text.map(({title, text}, i) => <div className="subtitle" key={i}> 
          <h4>{title}</h4>
          <p>{text}</p>
        </div>)}
      </div>
    </div>
  )
}

export default TargetText
