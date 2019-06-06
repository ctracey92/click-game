import React from "react";

function Card(props) {
    return(
        <div className="card" style={{width:"150px"}}>
            <img src={props.image} alt={props.id} className="card-img-top"id={props.cardId} onMouseDown={props.function} onMouseUp={props.function2}></img>
            
        </div>   
    )
}
export default Card;