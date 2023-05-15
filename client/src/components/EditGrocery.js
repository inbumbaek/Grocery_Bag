import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditGrocery = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [grocery, setGrocery] = useState({
        groceryItem: '',
        quantity: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGrocery({...grocery, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneGrocery/${id}`)
            .then((res) => {
                setGrocery(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateGrocery/${id}`, grocery)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Item</label>
                    <input type="text" onChange={changeHandler} value={grocery.groceryItem} name='groceryItem'/>
                    {
                        errors.groceryItem?
                        <p className='text-danger'>{errors.groceryItem.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" onChange={changeHandler} value={grocery.quantity} name='quantity'/>
                    {
                        errors.quantity?
                        <p className='text-danger'>{errors.quantity.message}</p>:
                        null
                    }
                </div>
                <input type="submit" value="Update" />
            </form>
            <Link to={"/"}>My Grocery</Link>
        </div>
)}

export default EditGrocery;