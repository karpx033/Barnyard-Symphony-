import React from 'react';
import placeholder from '../images/placeholder';

export default function Cards() {
    const cardDiv = {
        width: "18rem",

    }
    return (
        <div class="card" style={cardDiv}>
            <img class="card-img-top" src={placeholder}></img>
                <div class="card-body">
                    <h5 class="card-title">Cow</h5>
                    <p class="card-text">A cow is white with black spots. You will usually find a cow on a farm. They produce milk.</p>
                    <a href="#" class="btn btn-primary">Play Sound</a>
                </div>
        </div>
    )
}