import React, { Component } from 'react'
import Button from './components/Button'
import './css/style.css'
import BirdOne from "./birds/HouseSparrow.jpg"
import BirdTwo from "./birds/AmericanRobin.jpg"
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      BirdOnecount: 0,
      BirdTwoCount: 0
    }
  }

  //BirdOne Information
  incrementCountOne = () => {
    this.setState({
      BirdOnecount: this.state.BirdOnecount + 1
    })
  }

  decrementCountOne = () => {
    if (this.state.BirdOnecount > 0) {
      this.setState({
        BirdOnecount: this.state.BirdOnecount - 1
      })
    }
  }

  resetCountOne = () => {
    this.setState({
      BirdOnecount: 0
    })
  }

  // Bird Two Information 
  incrementCountTwo = () => {
    this.setState({
      BirdTwoCount: this.state.BirdTwoCount + 1
    })
  }
  decrementCountTwo = () => {
    if (this.state.BirdTwoCount > 0) {
      this.setState({
        BirdTwoCount: this.state.BirdTwoCount - 1
      })
    }
  }

  resetCountTwo = () => {
    this.setState({
      BirdTwoCount: 0
    })
  }



  render() {
    return (
      <div class="Main">
        <div class="birdOne">
          <img src={BirdOne} alt="House Sparrow" class="Image1" />
          <div class="count1">
            <h3>Count: {this.state.BirdOnecount}</h3>
          </div>
          <div class="Buttons1">
            <Button title={"-"} action={this.decrementCountOne} />
            <Button title={"Reset"} action={this.resetCountOne} />
            <Button title={"+"} action={this.incrementCountOne} />
          </div>
        </div>

        <div class="space"></div>

        <div class="birdTwo">
          <img src={BirdTwo} alt="American Robin" class="Image2" />
          <div class="count2">
            <h3>Count: {this.state.BirdTwoCount}</h3>
          </div>
          <div class="Butttons2">
            <Button title={"-"} action={this.decrementCountTwo} />
            <Button title={"Reset"} action={this.resetCountTwo} />
            <Button title={"+"} action={this.incrementCountTwo} />
          </div>
        </div>
      </div>
    );
  }
} 