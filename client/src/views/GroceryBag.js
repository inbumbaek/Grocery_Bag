import React, {useState, useEffect} from 'react';
import CreateGrocery from '../components/CreateGrocery';
import Display from '../components/Display';

const Main = (props) => {

    const [allGroceries, setAllGroceries] = useState([]);
    return(
        <div>
            <CreateGrocery allGroceries={allGroceries} setAllGroceries={setAllGroceries}/>
            <br />
            <Display allGroceries={allGroceries} setAllGroceries={setAllGroceries}/>
        </div>
)}

export default Main;