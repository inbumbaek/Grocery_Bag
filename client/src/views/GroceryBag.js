import React, { useState, useEffect } from 'react';
import CreateGrocery from '../components/CreateGrocery';
import Display from '../components/Display';

const Main = (props) => {

    const [allGroceries, setAllGroceries] = useState([]);
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-4">
                    <CreateGrocery allGroceries={allGroceries} setAllGroceries={setAllGroceries} />
                </div>
                <div class="col-md-6 mt-4">
                    <Display allGroceries={allGroceries} setAllGroceries={setAllGroceries} />
                </div>
            </div>
        </div>
    )
}

export default Main;