import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

export default function Cards() {
    const cardDiv = {
        maxwidth: "50rem",
        maxheight: "30rem",
        margin: "10px",

    };
    
    const animalDiv = {
        maxwidth: "5rem",
    };

    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { profileId: Auth.getProfile().data._id}
    });
    const profile = data?.profile || [];
    
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
                        <div>
                            {profile.songString && profile.songString.map((animal) => (
                                <div className="card" style={animalDiv} key={animal._id}>
                                <img className="card-img-top" src={animal.img} alt={"Animal"} style={animalDiv}></img>
                                <div className="card-body">
                                  <h5 className="card-title">{animal.name}</h5>
                                  <p className="card-text">{animal.description}</p>
                                  <a href="#test" className="btn btn-primary">Play Sound</a>
                                </div>
                              </div>
                            ))}
                        </div>
                    )}
                </div>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#test" role="button">Learn more</a>
                </p>
            </div>
        </div>
    )
}