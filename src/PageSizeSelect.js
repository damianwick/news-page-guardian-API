import { useState, useRef } from "react";

export default function PageSizeSelect(props) {
    const selectRef = useRef(null); 
    
    return (
        <div className="w-100 bg-secondary d-flex justify-content-end">
            <p className="p-0 m-1 me-2 text-light">
                Select the number of headlines
                </p>
            <select 
            className="" 
            type="select" 
            ref={selectRef} 
            onChange={() => props.handlePageSize(selectRef.current.value)} 
            name="select-page-size">
                <option ref={selectRef} value="page-size=5&">5</option>
                <option ref={selectRef} value="page-size=10&">10</option>
                <option ref={selectRef} value="page-size=15&">15</option>
                <option ref={selectRef} value="page-size=20&">20</option>
            </select>
        </div>
    )
}