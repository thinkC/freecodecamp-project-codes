import React, { Component } from 'react';
import DrumItems from './components/DrumItems';
import './App.css';


export default class App extends Component {
  state = {
    text: '',
    powerBtn: false
  }
  playDrum = (id, e) => {
    if (this.state.powerBtn === false) {
      return
    }
    if (id === 'Q' || e.keyCode === 81) {
      console.log('played')
      document.getElementById('Q').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'tom'
      })
    } else if (id === 'W' || e.keyCode === 87) {
      console.log('played')
      document.getElementById('W').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'clap'
      })
    } else if (id === 'E' || e.keyCode === 69) {
      console.log('played')
      document.getElementById('E').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'boom'
      })
    } else if (id === 'A' || e.keyCode === 65) {
      console.log('played')
      document.getElementById('A').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'hihat'
      })
    } else if (id === 'S' || e.keyCode === 83) {
      console.log('played')
      document.getElementById('S').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'kick'
      })
    } else if (id === 'D' || e.keyCode === 68) {
      console.log('played')
      document.getElementById('D').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'openhat'
      })
    } else if (id === 'Z' || e.keyCode === 90) {
      console.log('played')
      document.getElementById('Z').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'ride'
      })
    } else if (id === 'X' || e.keyCode === 88) {
      console.log('played')
      document.getElementById('X').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'snare'
      })
    } else if (id === 'C' || e.keyCode === 67) {
      console.log('played')
      document.getElementById('C').play()
      //console.log(document.getElementById('W'))
      this.setState({
        text: 'tink'
      })
    }

  }

  displayDrumText = (id, e) => {
    if (id === 'W') {
      this.setState({
        text: 'tom'
      })
    }
  }

  togglePowerBtn = () => {
    console.log('ok1')
    this.setState(state => ({
      powerBtn: !state.powerBtn
    }))
    console.log(this.state.powerBtn)
  }

  volumeControlHalf = () => {
    let ab = document.getElementsByTagName('audio')[0];
    console.log(ab)
    ab.volume = 0
  }
  volumeControlFull = () => {
    let ab = document.getElementsByTagName('audio')[0];
    console.log(ab)
    ab.volume = 0.2
  }
  render() {
    console.log(this.state.powerBtn)
    return (
      <div className="container">
        <h1 className="title text-center mt-5">Drum Machine</h1>
        <DrumItems
          playDrum={this.playDrum}
          text={this.state.text}
          togglePowerBtn={this.togglePowerBtn}
          volumeControlHalf={this.volumeControlHalf}
          volumeControlFull={this.volumeControlFull}
        />
      </div>
    )
  }
}

