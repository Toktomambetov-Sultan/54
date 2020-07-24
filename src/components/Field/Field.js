import React from 'react';
import Cell from '../Cell/Cell';
import "./Field.css";

export default function Field({cells}) {
    return (
        <div className="Field cells container">
            {
                cells.map(({hasItem,isOpen},index)=>(
                    <Cell key={index} hasItem={hasItem} isOpen={isOpen}/>
                ))
            }
        </div>
    )
}
