import React from 'react'
import TimeInterval from './TimeInterval'

function Card() {
    const myStyle = {
        width: "18rem",
        maxHeight: "360px"
    }
    return (
        <div>

            <div className="card text-center mt-3 mx-1" style={myStyle}>
                <div className="card-body margin-auto">
                    <span className="badge bg-secondary-subtle text-dark">3h 50m </span>
                    {/* <h5 class="card-title my-4">Card title</h5> */}
                    <div className="container my-4">
                        <TimeInterval start="10:00 AM" end="11:30 AM" />
                    </div>
                    <span className="badge rounded-pill bg-dark">mega-$75000 </span>
                </div>
            </div>
        </div>

    )
}

export default Card