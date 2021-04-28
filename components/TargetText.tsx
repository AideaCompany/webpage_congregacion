import { hexToRgb } from '@/utils/utils'
import React from 'react'

const TargetText = (props: { title?: string; text?: string; children?: JSX.Element; classname?: string; background?: string }) => {
  const hexBack = hexToRgb(props.background as string)

  const styles: React.CSSProperties = {
    backgroundColor: hexBack ? `rgba(${hexBack.r},${hexBack.g},${hexBack.b},0.8)` : 'rgba(255,255,255,0.8)'
  }

  return (
    <div className={`text ${props.classname ? props.classname : ''}`}>
      <div style={styles} className="div__text">
        {props.title && <div className="title" dangerouslySetInnerHTML={{ __html: props.title }}></div>}
        <div className="text_template" dangerouslySetInnerHTML={{ __html: props.text as string }}></div>
        {props.children && props.children}
      </div>
    </div>
  )
}

export default React.memo(TargetText)
