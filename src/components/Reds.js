import React from 'react';

const Reds = ({wines}) => {

    const filteredWines = wines.filter(wine => wine.type.toLowerCase().includes("cabernet sauvignon"));

    return (
        <div>
        <h1>Red-y for your wines?</h1>
         {filteredWines.map((wine) => (
            <div key={wine.id}>
                <img src={wine.url} alt="Wine Bottle" />
                <h1>{wine.name}</h1>
                <p>Type: {wine.type}</p>
                <p>Description: {wine.description}</p>
                <p>Price: {wine.price}</p>
                {/* <button onClick={() => handleClick(wine.id)}>View Wine</button> */}
                <br></br>
            </div>
        ))}
    </div>
    );
};

export default Reds;