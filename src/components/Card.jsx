import './Card.css';


const remark = 'Объем включенного трафика не ограничен';


function Card(props) {

    return (
    <div className={"Card " + (props.isSelected ? "selected" : "")}> 
    
        <div className="cardTitle">
           <h2 className="cardTitle-overlay">{props.title}</h2>
        </div>
        <p className="price">грн <br/><br/><br/>
        <span className="price-value">{props.price}</span> <br/><br/>/мес 
        </p>
        <p className="speed">до {props.speed} Мбит/сек</p>
        <p className="remark">{remark}</p> 
    </div>
    );
}

export default Card;


{/* <div className={"Card card-" + props.color + ' ' + (props.isSelected ? "selected" : "")}> */}
    {/* вариает записи, если использую цвет карточки как класс через сss внутри самого компонента*/}