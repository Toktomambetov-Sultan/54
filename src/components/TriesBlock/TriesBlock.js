import React from 'react';
import './TriesBlock.css';

export default function TriesBlock({ tries }) {
    return (
        <div className="container TriesBlock">
            Tries: <span>{tries}</span>
        </div>
    )
}
