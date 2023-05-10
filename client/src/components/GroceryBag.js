import React, {useState} from 'react';
import axios from 'axios'
import GroceryForm from './GroceryForm';
import { useNavigate, useParams } from 'react-router-dom';

const CreateGrocery = (props) => {
    const {grocery, setGrocery, errors, setErrors} = props
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newGrocery', grocery, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                // setErrors(err.response.data.errors)
            })
    }

    return (
        <>
            <GroceryForm 
            submitHandler={submitHandler}
            grocery={grocery}
            setGrocery={setGrocery}
            errors={errors}
            setErrors={setErrors}
            />
        </>
)}

export default CreateGrocery;