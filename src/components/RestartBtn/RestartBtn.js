import React from 'react';
import './RestartBtn.css';

export default function RestartBtn({Restart}) {
    return (
        <div className="RestartBtn">
            <button onClick={Restart}>Restart</button>
        </div>
    )
}
