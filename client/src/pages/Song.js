import React from 'react';
import AnimalList from '../components/AnimalList';
import { useQuery } from '@apollo/client';
import { QUERY_SONGSTRINGS } from '../utils/queries';
import Demo from '../components/Demo';

export default function Cards() {
    const cardDiv = {
        maxwidth: "50rem",
        maxheight: "30rem",
        margin: "10px",

    }
    const { loading, data } = useQuery(QUERY_SONGSTRINGS);
    const songStrings = data?.songStrings || [];
    
    return (
        <div>
            <div className="jumbotron card" style={cardDiv}>
                <h1 className="display-4">Create a Song!</h1>
                <p className="lead">Make a song from all the animal sounds you added. It can be played like a piano!</p>
                <Demo></Demo>
                <hr className="my-4"></hr>
                <h3>Your Favorite Animals</h3>
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <AnimalList
                            songStrings={songStrings}
                            title="Here's the current roster of animals..."
                        />
                    )}
                </div>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#test" role="button">Learn more</a>
                </p>
            </div>
        </div>
    )
}