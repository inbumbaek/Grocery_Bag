import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditGrocery = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [grocery, setGrocery] = useState({
        groceryItem: '',
        quantity: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGrocery({ ...grocery, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneGrocery/${id}`)
            .then((res) => {
                setGrocery(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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

    return (
        <div class="container py-4">
            <form class="needs-validation" onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="groceryItem" class="text-dark font-weight-bold">Grocery Item</label>
                    <input type="text" class="form-control custom-input" onChange={changeHandler} value={grocery.groceryItem} name='groceryItem' required />
                    {
                        errors.groceryItem ?
                            <p class='text-danger'>{errors.groceryItem.message}</p> :
                            null
                    }
                </div>
                <div class="form-group">
                    <label for="quantity" class="text-dark font-weight-bold">Quantity</label>
                    <input type="number" class="form-control custom-input" onChange={changeHandler} value={grocery.quantity} name='quantity' required />
                    {
                        errors.quantity ?
                            <p class='text-danger'>{errors.quantity.message}</p> :
                            null
                    }
                </div>
                <div class="custom-button-container">
                    <button type="submit" class="btn btn-primary btn-lg custom-button btn-block">Update</button>
                </div>
            </form>
            <a href="/" class="btn btn-green-custom btn-lg mt-3">Back to My Grocery Bag</a>
        </div>
    )
}

export default EditGrocery;