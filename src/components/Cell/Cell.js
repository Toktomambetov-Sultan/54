import React from 'react'
import "./Cell.css"

export default function Cell({onHeaderClick,cell}) {
    const cellClass=["inner"];
    if(cell.isOpen){
        cellClass.push("open");
    }
    return (
        <div className="Cell" onClick={onHeaderClick}>
            <div className={cellClass.join(" ")}>
                {cell.hasItem && cell.isOpen?
                (<><i className="fas fa-life-ring"></i></>):
                (<></>)}
            </div>
        </div>
    )
}
