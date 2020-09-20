import React, { Component } from 'react'
import './App.css';
import PomoItems from './components/PomoItems';


export default class App extends Component {
  state = {
    mainCount: 25,
    breakCount: 5,
    sessionCount: 25,
    sessionTurn: false,
    breakTurn: false,
    aaTurn: true

  }

  incrementBreak = () => {
    this.setState(state => ({
      breakCount: state.breakCount + 1,
      breakTurn: true
    }))
    console.log(this.state.breakCount)
  }

  decrementBreak = () => {
    this.setState(state => ({
      breakCount: state.breakCount - 1,
      breakTurn: true
    }))
  }

  //   decrementBreak = () => {
  //     this.setState(state => ({
  //       breakCount: this.checkBreakCount(),
  //       breakTurn: true
  //     }))
  // }

  checkSessionCount = () => {
    if (this.state.sessionCount < 0) {
      this.state.sessionCount = 0;

    }
    return this.state.sessionCount - 1
  }

  incrementSession = () => {
    this.setState(state => ({
      sessionCount: state.sessionCount + 1,
      sessionTurn: true
    }))
  }

  // decrementSession = () => {
  //   this.setState(state => ({
  //     sessionCount: state.sessionCount - 1,
  //     sessionTurn: true
  //   }))
  // }

  decrementSession = () => {
    this.setState(state => ({
      sessionCount: this.checkSessionCount(),
      sessionTurn: true
    }))
  }


  //
  timer = (secs) => {
    const now = Date.now();
    const then = now + secs * 1000;
    console.log(now, then)

    let countDown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000)
      console.log(secondsLeft)
      this.displayTimeLeft(secondsLeft);
    }, 1000)

    console.log(secs)
    console.log(countDown)
    //return countDown
  }

  displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    //console.log(display)
    console.log('minutes ' + minutes)
    console.log('seconds ' + remainderSeconds)
    return display;
  }



  render() {
    return (
      <div className=" container text-center title">
        <h1 className="mb-5">25 + 5 Clock</h1>
        <PomoItems
          incrementBreak={this.incrementBreak}
          mainCount={this.state.mainCount}
          breakCount={this.state.breakCount}
          sessionCount={this.state.sessionCount}
          decrementBreak={this.decrementBreak}
          incrementSession={this.incrementSession}
          decrementSession={this.decrementSession}
          sessionTurn={this.state.sessionTurn}
          breakTurn={this.state.breakTurn}
          timer={this.timer}
          displayTimeLeft={this.displayTimeLeft}
          aaTurn={this.state.aaTurn}

        />
      </div>
    )
  }
}

