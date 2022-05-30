import React from 'react';
import './Card.css';


const remark = 'Объем включенного трафика не ограничен';


export default function Card({title, price, speed, isSelected, onClick, ...props}) {

    const handleClick = () => {
        onClick(props.index);
    }    

    return (
    // <div className={"Card " + (props.isSelected ? "selected" : "")}> 
    <div className={`Card ${isSelected ? "selected" : ""}`} onClick={handleClick}>
        {/* <div className="Card"> */}
        <div className="cardTitle">
           <h2 className="cardTitle-overlay">{title}</h2>
        </div>
        <p className="price">грн <br/><br/><br/>
        <span className="price-value">{price}</span> <br/><br/>/мес 
        </p>
        <p className="speed">до {speed} Мбит/сек</p>
        <p className="remark">{remark}</p> 
    </div>
    );
}

// () => onClick(props.index)