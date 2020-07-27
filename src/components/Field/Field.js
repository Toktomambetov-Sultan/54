import React from 'react';
import Cell from '../Cell/Cell';
import "./Field.css";

export default function Field({ cells, onCellClick, endGame }) {

    return (
        <div className="container">
            <div className="Field cells">
                {
                    cells.map((cell, index) => (
                        <Cell key={index} cell={cell} onHeaderClick={
                            endGame ? null : () => onCellClick(index)
                        } />
                    ))
                }
            </div>
        </div>
    )
}
