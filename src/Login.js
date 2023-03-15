import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (formdata) => {
        console.log(formdata);
        const username = localStorage.getItem("Name")
        const password = localStorage.getItem("Password")
        if ((username === formdata.name && password === formdata.pass)) {
            // setMsg(false)
            navigate('/');
        }
        else {
            // setMsg(true);
            alert("Invalid Credentials")
        }
    }
    return (
        <div className="container">
            <center>
                <h2>Enter the credentials</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label>Username: </label>
                        <input type="text" placeholder='Username' {...register('name', { required: true, minLength: 5, maxLength: 20, pattern: /^[A-Za-z]+$/i })} /><br />
                        <error style={{ color: 'red' }}>{errors.name?.type === 'required' && 'Name is required'}</error>
                        <error style={{ color: 'red' }}>{errors.name?.type === 'minLength' && 'Length of entered name is less than 5'}</error>
                        <error style={{ color: 'red' }}>{errors.name?.type === 'maxLength' && 'Length of entered name is greater than 20'}</error>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" placeholder='Password' {...register('pass', { required: true, minLength: 5, maxLength: 20, pattern: /^[A-Za-z]+$/i })} /><br />
                        <error style={{ color: 'red' }}>{errors.pass?.type === 'required' && 'Name is required'}</error>
                        <error style={{ color: 'red' }}>{errors.pass?.type === 'minLength' && 'Length of Password is less than 5'}</error>
                        <error style={{ color: 'red' }}>{errors.pass?.type === 'maxLength' && 'Length of Password is greater than 20'}</error>
                    </div>
                    <br />
                    <div><input type="submit" value="submit" /></div>
                </form>
            </center>
        </div>
    )
}

export default Login;
