import React, { useState } from 'react'
import propTypes from 'prop-types'
// CSS
import classes from './HoverCardHook.css'

const HoverCardHook = (props) => {
  console.log(props)
  if (!props.front || !props.back) {
    return null
  }
  const [isHover, setHover] = useState(false)

  const backClass = [classes.Content]
  const frontClass = [classes.Content]

  if (isHover) {
    backClass.push(classes.Visible)
    frontClass.push(classes.NotVisible)
  } else {
    backClass.push(classes.NotVisible)
    frontClass.push(classes.Visible)
  }

  return (
    <div
      className={[classes.Card, props.className].join(' ')}
      style={{
        ...props.style,
        maxWidth: props.maxWidth,
        borderRadius: props.borderRadius,
        height: props.height,
        margin: props.margin
      }}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onFocus={() => {
        setHover(true)
      }}
      onBlur={() => {
        setHover(false)
      }}
    >
      {/* Front */}
      <div
        className={frontClass.join(' ')}
        style={{ transition: `all ${props.animationSpeed || 250}ms` }}
      >
        {props.front}
      </div>
      {/* Back */}
      <div
        className={backClass.join(' ')}
        style={{ transition: `all ${props.animationSpeed || 250}ms` }}
      >
        {props.back}
      </div>
    </div>
  )
}

HoverCardHook.propTypes = {
  front: propTypes.any,
  back: propTypes.any,
  style: propTypes.any,
  className: propTypes.any,
  maxWidth: propTypes.string,
  animationSpeed: propTypes.number,
  borderRadius: propTypes.number,
  height: propTypes.number,
  margin: propTypes.number
}

export default HoverCardHook
