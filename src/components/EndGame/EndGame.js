import React from 'react';
import './EndGame.css'

export default function endGame({tries}) {
    return (
        <div className="EndGame container">
            <h4>Конец игры</h4>
            <p>Попыток было: {tries}</p>
        </div>
    )
}
