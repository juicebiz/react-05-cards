import React from 'react'

function Card(props) {
    
    const image = props.image ? <img src={props.image} className="card-img-top" alt="..." /> : '';

    return (
        <div className="card">
            {image}
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card
