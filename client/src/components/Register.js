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

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
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
            });
    };
    return (
        <div className="register-container">
            <form onSubmit={submitHandler} className="register-form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" onChange={changeHandler} value={user.firstName} name="firstName" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" onChange={changeHandler} value={user.lastName} name="lastName" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" onChange={changeHandler} value={user.email} name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" onChange={changeHandler} value={user.password} name="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" onChange={changeHandler} value={user.confirmPassword} name="confirmPassword" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Create an account</button>
            </form>
            <div className="text-center">
                <p>Already have an account? <Link to="/login">Log in here</Link></p>
            </div>
        </div>
    );
};
//     return (
//         <div>
//             <form onSubmit={SubmitHandler}>
//                 <div>
//                     <label>First Name: </label>
//                     <input type='text' onChange={changeHandler} value={user.firstName} name='firstName'/>
//                 </div>
//                 <div>
//                     <label>Last Name: </label>
//                     <input type='text' onChange={changeHandler} value={user.lastName} name='lastName'/>
//                 </div>
//                 <div>
//                     <label>Email: </label>
//                     <input type='text' onChange={changeHandler} value={user.email} name='email'/>
//                 </div>
//                 <div>
//                     <label>Password: </label>
//                     <input type='password' onChange={changeHandler} value={user.password} name='password'/>
//                 </div>
//                 <div>
//                     <label>Confirm Password: </label>
//                     <input type='password' onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
//                 </div>
//                 <button>Create an account</button>
//             </form>
//             <Link to={'/login'}>Already have an account?</Link>
//         </div>
// )}

export default Register;