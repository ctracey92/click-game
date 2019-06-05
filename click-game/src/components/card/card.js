import React from "react";

function Card(props) {
    return(
        <div class="card" style={{width:"8rem"}}>
            <img src={props.image} alt={props.id} class="card-img-top" value={props.id} />
        </div>   
    )
}

export default Card;