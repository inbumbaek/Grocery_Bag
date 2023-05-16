import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({})
    const changeHandler = (e) => {
        // setUser({ ...user, [e.target.name]: e.target.value })
        setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }))

    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response?.data?.errors || {})
            });
    };
    return (
        <div className="register-container">
            <form onSubmit={submitHandler} className="col-4 mx-auto user-form">
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>First Name:</label>
                    <input type="text" onChange={changeHandler} value={user.firstName} name="firstName" className='form-control' />
                </div>
                <div className="invalid-feedback">
                        {errors.firstName ? errors.firstName.message : null}
                </div>
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>Last Name:</label>
                    <input type="text" onChange={changeHandler} value={user.lastName} name="lastName" className='form-control' />
                </div>
                <div className="invalid-feedback">
                        {errors.lastName ? errors.lastName.message : null}
                </div>
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>Email:</label>
                    <input type="email" onChange={changeHandler} value={user.email} name="email" className='form-control' />
                </div>
                <div className="invalid-feedback">
                        {errors.email ? errors.email.message : null}
                </div>
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>Password:</label>
                    <input type="password" onChange={changeHandler} value={user.password} name="password" className='form-control' />
                </div>
                <div className="invalid-feedback">
                        {errors.password ? errors.password.message : null}
                </div>
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>Confirm Password:</label>
                    <input type="password" onChange={changeHandler} value={user.confirmPassword} name="confirmPassword" className='form-control' />
                </div>
                <div className="invalid-feedback">
                        {errors.confirmPassword ? errors.confirmPassword.message : null}
                </div>
                <button type="submit" className="btn btn-primary">Create an account</button>
            </form>
            <div className="text-center">
                <p>Already have an account? <Link to="/">Log in here</Link></p>
            </div>
        </div>
    );
};

export default Register;
