// import React, {useEffect} from 'react';
// import axios from 'axios'
// import {useNavigate, Link} from 'react-router-dom';

// const Display = (props) => {

//     const {allGroceries, setAllGroceries} = props
//     const navigate = useNavigate()

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/allGroceries')
//             .then((res) => {
//                 console.log(res);
//                 setAllGroceries(res.data)
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }, [])

//     const deleteHandler = (id) => {
//         axios.delete(`http://localhost:8000/api/deleteGrocery/${id}`)
//             .then((res) => {
//                 console.log(res)
//                 setAllGroceries(allGroceries.filter(grocery => grocery._id !== id))
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     return (
//         <div>
//             <header>
//                 <h2>My Grocery Bag:</h2>
//             </header>
//                 <table class="table table-bordered table-striped">
//                     <thead>
//                         <tr className="table-secondary">
//                             <th scope='col'>Item</th>
//                             <th scope='col'>Quantity</th>
//                             <th scope='col'>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allGroceries.map((grocery) => {
//                             return(
//                                 <tr key={grocery._id}>
//                                     <td>{grocery.groceryItem}</td>
//                                     <td>{grocery.quantity}</td>
//                                     <td>
//                                     <Link to={`/updateGrocery/${grocery._id}`}>Edit</Link>
//                                     <button onClick={() => deleteHandler(grocery._id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//         </div>
// )}

// export default Display;


import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Display = (props) => {
    const { allGroceries, setAllGroceries } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allGroceries')
            .then((res) => {
                console.log(res);
                setAllGroceries(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/deleteGrocery/${id}`)
            .then((res) => {
                console.log(res);
                setAllGroceries(allGroceries.filter((grocery) => grocery._id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>
                <h2>My Grocery Bag:</h2>
            </header>
            <table className="table table-bordered table-striped">
                <thead className="table-secondary">
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allGroceries.map((grocery) => {
                        return (
                            <tr key={grocery._id}>
                                <td>{grocery.groceryItem}</td>
                                <td>{grocery.quantity}</td>
                                <td>
                                    <Link to={`/updateGrocery/${grocery._id}`} className="btn btn-primary me-2">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteHandler(grocery._id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Display;