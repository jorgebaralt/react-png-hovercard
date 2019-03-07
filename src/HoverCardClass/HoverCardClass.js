import React, { Component } from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './HoverCardClass.css'

class HoverCardClass extends Component {
  static propTypes = {
    front: PropTypes.any,
    back: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.any,
    maxWidth: PropTypes.number,
    animationSpeed: PropTypes.number,
    borderRadius: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.number
  }

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

export default HoverCardClass
