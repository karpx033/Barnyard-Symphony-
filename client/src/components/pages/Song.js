import React from 'react';

export default function Cards() {
    const cardDiv = {
        maxwidth: "50rem",
        maxheight: "30rem",
        margin: "10px",

    }
    return (
        <div>
            <div className="jumbotron card" style={cardDiv}>
                <h1 className="display-4">Create a Song!</h1>
                <p className="lead">Make a song from all the animal sounds you added. It can be played like a piano!</p>
                <hr className="my-4"></hr>
                    <p>If you did not add any animals, go back to the card tab and add some sounds. You can choose up to 5 animal sounds!</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#test" role="button">Learn more</a>
                    </p>
            </div>
        </div>
    )
}