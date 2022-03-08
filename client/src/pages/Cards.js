import React from 'react';
import AnimalList from '../components/AnimalList';
import { useQuery } from '@apollo/client';
import { QUERY_SONGSTRINGS } from '../utils/queries';
// import AnimalForm from '../components/AddAnimal';

export default function Cards() {
    const { loading, data } = useQuery(QUERY_SONGSTRINGS);
    const songStrings = data?.songStrings || [];

    return (
        <div className="col-12 col-md-10 my-3">
            {/* <AnimalForm/> */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <AnimalList
                    songStrings={songStrings}
                    title="Here's the current roster of animals..."
                />
            )}
        </div>
    )
}