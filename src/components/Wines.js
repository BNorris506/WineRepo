import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllWines } from '../api/auth';

const Wines = ({setSelectedWine}) => {
    const [wines, setWines] = useState([]);

useEffect(()=> {
    const winesArr = async () => {
        const allWines = await getAllWines();
        console.log("heres all the wines", allWines)
        setWines(allWines);
    }
        winesArr();
        console.log("here's the wines after set", wines)
    }, [])

// const handleClick = async (wineId) => {
//         const singleWine = await getWineById(wineId)
//         // const singleReview = await getReviewsByWineId(wineId)
//         setSelectedWine(singleWine[0])
//         // setReviews(singleReview)
//       }

    return (
        <div>
            <h1>Here are all the wines</h1>
            <h2>Are you listening to me???</h2>
             {wines.map((wine) => (
                <div key={wine.id}>
                    <img src={wine.url} alt="Wine Bottle" />
                    <h1>{wine.name}</h1>
                    <p>Type: {wine.type}</p>
                    <p>Description: {wine.description}</p>
                    <p>Price: {wine.price}</p>
                    {/* <button onClick={() => handleClick(wine.id)}>View Wine</button> */}
                </div>
            ))}
        </div>
    );
};

export default Wines;