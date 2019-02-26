import React, { Component } from 'react'
import propTypes from 'prop-types'
// CSS
import classes from './HoverCardClass.css'

class HoverCardClass extends Component {
  state = { isHover: false }

  render() {
    if (!this.props.front || !this.props.back) {
      return null
    }

    const backClass = [classes.Content]
    const frontClass = [classes.Content]

    if (this.state.isHover) {
      backClass.push(classes.Visible)
      frontClass.push(classes.NotVisible)
    } else {
      backClass.push(classes.NotVisible)
      frontClass.push(classes.Visible)
    }

    return (
      <div
        className={[classes.Card, this.props.className].join(' ')}
        style={{
          ...this.props.style,
          maxWidth: this.props.maxWidth,
          borderRadius: this.props.borderRadius,
          height: this.props.height,
          margin: this.props.margin
        }}
        onMouseEnter={() => {
          this.setState({ isHover: true })
        }}
        onMouseLeave={() => {
          this.setState({ isHover: false })
        }}
        onFocus={() => {
          this.setState({ isHover: true })
        }}
        onBlur={() => {
          this.setState({ isHover: false })
        }}
      >
        {/* Front */}
        <div
          className={frontClass.join(' ')}
          style={{ transition: `all ${this.props.animationSpeed || 250}ms` }}
        >
          {this.props.front}
        </div>
        {/* Back */}
        <div
          className={backClass.join(' ')}
          style={{ transition: `all ${this.props.animationSpeed || 250}ms` }}
        >
          {this.props.back}
        </div>
      </div>
    )
  }
}

HoverCardClass.propTypes = {
  front: propTypes.any,
  back: propTypes.any,
  style: propTypes.obj,
  className: propTypes.any,
  maxWidth: propTypes.string,
  animationSpeed: propTypes.number,
  borderRadius: propTypes.number,
  height: propTypes.number,
  margin: propTypes.number
}

export default HoverCardClass
