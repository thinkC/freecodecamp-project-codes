import React from 'react'

export default function PomoItems(props) {
    //console.log(props)
    const {
        incrementBreak,
        mainCount,
        decrementBreak,
        incrementSession,
        decrementSession,
        sessionCount,
        breakCount,
        sessionTurn,
        breakTurn,
        timer,
        displayTimeLeft,
        aaTurn

    } = props;
    //console.log(timer)
    console.log(sessionTurn)
    return (
        <div className="container">
            <div className="col-10  col-md-6  mx-auto">

                <div className="row" id="break-label">
                    <h2 className="text-capitalize mr-5">break length</h2>
                    <h2 id="session-label" className=" text-capitalize">session length</h2>
                </div>
                <div className="row incre-decre-div">
                    <a onClick={decrementBreak} href="#" id="break-decrement">
                        <i className="fas fa-arrow-down btn-icon"></i>
                    </a>
                    <h2 className="pl-3 pr-3">{breakCount}</h2>
                    <a href="#" onClick={incrementBreak} >
                        <i className="fas fa-arrow-up btn-icon"></i>
                    </a>
                    {/* session decrement */}
                    <a onClick={decrementSession} href="#" id="session-decrement">
                        <i className="fas fa-arrow-down btn-icon btn-icon-decrement"></i>
                    </a>
                    <h2 className="pl-3 pr-3 session-number">{sessionCount}</h2>
                    {/* session increment*/}
                    <a onClick={incrementSession} href="#" id="session-increment">
                        <i className="fas fa-arrow-up btn-icon btn-icon-increment"></i>
                    </a>
                </div> {/* end of break and session div */}

                {/* Break and Session Timer */}
                <div className="row session-timer">
                    <h2 className="text-capitalize mt-5  ">session</h2>
                    {/* <h2 className="session-timer-num ">{sessionTurn ? sessionCount : sessionCount <= 0 ? breakCount : mainCount}</h2> */}
                    {/* <h2 className="session-timer-num ">{sessionTurn ? sessionCount : sessionCount === 0 ? 0 : breakCount}</h2> */}
                    {/* <h2 className="session-timer-num ">{sessionTurn ? timer(sessionCount) : sessionCount === 0 ? 0 : breakCount}</h2> */}
                    <h2 className="session-timer-num">{sessionCount}</h2>
                    {/* <h3>{displayTimeLeft}</h3> */}
                </div> {/* end of session Timer */}

                <div className="row">
                    <a onClick={() => { timer(sessionCount) }} href="#" className="mt-3">
                        <i className="fas fa-play btn-icon"></i>
                        {/* <i className="fas fa-play btn-icon"></i> */}
                    </a>
                    <a href="#" className="mt-3">
                        {/* <i onClick={handlePause} class="far fa-pause-circle btn-icon"></i> */}
                        <i className="far fa-pause-circle btn-icon"></i>
                    </a>
                    <a href="#" className="mt-3">
                        {/* <i onClick={handleReset} class="fas fa-sync-alt btn-icon"></i> */}
                        <i className="fas fa-sync-alt btn-icon"></i>
                    </a>
                </div>

            </div>
        </div>
    )
}



