import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(previous => {
      let countArray
      if (previous.count < 200) {
        countArray = {count: previous.count + 10}
      } else if (previous.count === 200) {
        countArray = {count: 200}
      }
      return countArray
    })
  }

  onBrake = () => {
    this.setState(previousState => {
      let countArray
      if (previousState.count <= 0) {
        countArray = {count: 0}
      } else if (previousState.count > 0) {
        countArray = {count: previousState.count - 10}
      }
      return countArray
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image-styling"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="speed-indicater">Speed is {count}mph</h1>
        <p className="warning">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button1 btn-styling"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button2 btn-styling"
            onClick={this.onBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
