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
      console.log('played');

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
    const q = document.getElementById('Q');
    const w = document.getElementById('W');
    const e = document.getElementById('E');
    const a = document.getElementById('A');
    const s = document.getElementById('S');
    const d = document.getElementById('D');
    const z = document.getElementById('Z');
    const x = document.getElementById('X');
    const c = document.getElementById('C');

    q.volume = 0.2;
    w.volume = 0.2;
    e.volume = 0.2;
    a.volume = 0.2;
    s.volume = 0.2;
    d.volume = 0.2;
    z.volume = 0.2;
    x.volume = 0.2;
    c.volume = 0.2;

  }
  volumeControlFull = () => {
    const q = document.getElementById('Q');
    const w = document.getElementById('W');
    const e = document.getElementById('E');
    const a = document.getElementById('A');
    const s = document.getElementById('S');
    const d = document.getElementById('D');
    const z = document.getElementById('Z');
    const x = document.getElementById('X');
    const c = document.getElementById('C');

    q.volume = 1.0;
    w.volume = 1.0;
    e.volume = 1.0;
    a.volume = 1.0;
    s.volume = 1.0;
    d.volume = 1.0;
    z.volume = 1.0;
    x.volume = 1.0;
    c.volume = 1.0;
  }


  render() {
    console.log(this.state.powerBtn)
    return (
      <div className="container" id="drum-machine">
        <h1 className="title text-center mt-5">Drum Machine</h1>
        <DrumItems
          playDrum={this.playDrum}
          text={this.state.text}
          togglePowerBtn={this.togglePowerBtn}
          volumeControlHalf={this.volumeControlHalf}
          volumeControlFull={this.volumeControlFull}
          volumeControl={this.volumeControl}
        />
      </div>
    )
  }
}

