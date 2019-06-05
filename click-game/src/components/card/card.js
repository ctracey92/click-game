import React from "react";

function Card(props) {
    return(
        <div className="card" style={{width:"8rem"}}>
            <img src={props.image} alt={props.id} className="card-img-top" value={props.value}id={props.cardId} onMouseDown={props.function} onMouseUp={props.function2}></img>
            
        </div>   
    )
}

export default Card;