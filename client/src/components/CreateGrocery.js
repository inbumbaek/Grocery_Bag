import React, { useState } from 'react';
import axios from 'axios'

const CreateGrocery = (props) => {
    const { allGroceries, setAllGroceries } = props;

    const [grocery, setGrocery] = useState({
        groceryItem: '',
        quantity: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGrocery({ ...grocery, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newGrocery', grocery)
            .then((res) => {
                console.log(res);
                setAllGroceries([...allGroceries, res.data]);
                setGrocery({
                    groceryItem: '',
                    quantity: ''
                });
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div class="container py-4">
            <h2 class="text-green-custom">Add to My Grocery Bag</h2>
            <form class="needs-validation text-center" onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="groceryItem" class="text-dark font-weight-bold">Grocery Item</label>
                    <div class="d-flex justify-content-center">
                        <input type="text" class="form-control custom-form-control" onChange={changeHandler} value={grocery.groceryItem} name="groceryItem" required />
                    </div>
                    <div class="invalid-feedback">
                        {errors.groceryItem ? errors.groceryItem.message : null}
                    </div>
                </div>
                <div class="form-group">
                    <label for="quantity" class="text-dark font-weight-bold">Quantity</label>
                    <div class="d-flex justify-content-center">
                        <input type="number" class="form-control custom-form-control" onChange={changeHandler} value={grocery.quantity} name="quantity" required />
                    </div>
                    <div class="invalid-feedback">
                        {errors.quantity ? errors.quantity.message : null}
                    </div>
                </div>
                <button type="submit" class="btn btn-green-custom btn-lg">Add</button>
            </form>
        </div>
    )
}

export default CreateGrocery;