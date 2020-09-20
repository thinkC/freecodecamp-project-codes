import React from 'react'

export default function DrumItems(props) {
    const { playDrum, text, togglePowerBtn, volumeControlHalf, volumeControlFull } = props
    //console.log(playDrum)
    return (
        <div className="container">
            <div className="col-10 col-md-6 mx-auto box">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col md-4" id="btn-container">
                                {/* <button onClick={() => { playDrum('W') }} className="btn btn-key drum-pad">W <audio id="W" className="clip" src="sound/tom.wav"></audio></button> */}
                                <button data-key="81" onKeyDown={(e) => { playDrum('Q', e) }} className="btn btn-key drum-pad text-white">Q <audio id="Q" className="clip" src="sound/tom.wav"></audio></button>
                                <button data-key="87" onKeyDown={(e) => { playDrum('W', e) }} className="btn btn-key drum-pad text-white">W <audio id="W" className="clip" src="sound/clap.wav"></audio></button>
                                <button data-key="69" onKeyDown={(e) => { playDrum('E', e) }} className="btn btn-key drum-pad text-white">E <audio id="E" className="clip" src="sound/boom.wav"></audio></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col md-4">
                                <button data-key="65" onKeyDown={(e) => { playDrum('A', e) }} className="btn btn-key drum-pad text-white">A <audio id="A" className="clip" src="sound/hihat.wav"></audio></button>
                                <button data-key="83" onKeyDown={(e) => { playDrum('S', e) }} className="btn btn-key drum-pad text-white">S <audio id="S" className="clip" src="sound/kick.wav"></audio></button>
                                <button data-key="87" onKeyDown={(e) => { playDrum('W', e) }} className="btn btn-key drum-pad text-white">D <audio id="D" className="clip" src="sound/openhat.wav"></audio></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col md-4">
                                <button data-key="90" onKeyDown={(e) => { playDrum('Z', e) }} className="btn btn-key drum-pad text-white"> <audio id="Z" className="clip" src="sound/ride.wav"></audio> Z</button>
                                <button data-key="88" onKeyDown={(e) => { playDrum('X', e) }} className="btn btn-key drum-pad text-white"> <audio id="X" className="clip" src="sound/snare.wav"></audio> X</button>
                                <button data-key="67" onKeyDown={(e) => { playDrum('C', e) }} className="btn btn-key drum-pad text-white"> <audio id="C" className="clip" src="sound/tink.wav"></audio> C</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 show-text  text-white" >
                        <div className="row">
                            <div className="btn-power">
                                <button type="button" onClick={() => { togglePowerBtn() }} className="btn btn-secondary">
                                    Power
                            </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn-text">
                                <h4 className="text-center">
                                    {text}
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-secondary" onClick={() => { volumeControlHalf() }}>Set Vol half</button>
                            <button type="button" className="btn btn-secondary" onClick={() => { volumeControlFull() }}>set vol to full</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
