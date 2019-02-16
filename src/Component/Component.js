import React, { useState } from 'react'
import propTypes from 'prop-types'
// CSS
import classes from './Component.css'

const component = (props) => {
  const [hookState] = useState('Hooks are working!')

  return (
    <div className={classes.Wrapper}>
      {props.children}
      <div>
        {hookState}
      </div>
    </div>
  )
}

component.propTypes = {
  children: propTypes.any
}

export default component
