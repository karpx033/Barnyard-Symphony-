import React from 'react';
import placeholder from '../images/placeholder.PNG';

export default function Cards() {
    const cardDiv = {
        width: "18rem",
        margin: "10px",

    }
    return (
        <div>
            <div className="card" style={cardDiv}>
                <img className="card-img-top" src={placeholder} alt="test"></img>
                <div className="card-body">
                    <h5 className="card-title">Cow</h5>
                    <p className="card-text">A cow is white with black spots. You will usually find a cow on a farm. They produce milk.</p>
                    <a href="#test" class="btn btn-primary">Play Sound</a> <a href="#test" class="btn btn-primary">Add to Song</a>
                </div>
            </div>
            <div className="card" style={cardDiv}>
                <img className="card-img-top" src={placeholder} alt="test"></img>
                <div className="card-body">
                    <h5 className="card-title">Chicken</h5>
                    <p className="card-text">A chicken is a small white bird. They typically live on farms in large groups. They produce eggs.</p>
                    <a href="#test" class="btn btn-primary">Play Sound</a> <a href="#test" class="btn btn-primary">Add to Song</a>
                </div>
            </div>
        </div>
    )
}