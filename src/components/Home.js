import React from 'react';
import { useState } from 'react';
import Wines from './Wines';

const Home = () => {
    const [selectedWine, setSelectedWine] = useState({});
    return (
        <div>
            <h1>Cloud Wine</h1>
            <h2>Let's make pour decisions together</h2>
            <Wines selectedWine={selectedWine} setSelectedWine={setSelectedWine}/>
        </div>
    );
};

export default Home;