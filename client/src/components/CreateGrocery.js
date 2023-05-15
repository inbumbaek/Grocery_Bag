import React, {useState} from 'react';
import axios from 'axios'

const CreateGrocery = (props) => {
    const {allGroceries,setAllGroceries} = props;

    const [grocery, setGrocery] = useState({
        groceryItem:'',
        quantity:''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGrocery({...grocery, [e.target.name]: e.target.value})
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
        <div>
            <h2>Add to My Grocery Bag:</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Grocery Item:</label>
                    <input type="text" onChange={changeHandler} value={grocery.groceryItem} name='groceryItem'/>
                    {
                        errors.groceryItem?
                        <p className='text-danger'>{errors.groceryItem.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" onChange={changeHandler} value={grocery.quantity} name='quantity'/>
                    {
                        errors.quantity?
                        <p className='text-danger'>{errors.quantity.message}</p>:
                        null
                    }
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
)}

export default CreateGrocery;