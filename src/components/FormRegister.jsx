import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import useInput from '../hooks/HooksInput';
import PropTypes from 'prop-types';

const FormRegister = ({register}) => {

    const [fullname, onChangeFullname] = useInput('')
    const [email, onChangeEmail] = useInput('')
    const [password, onChangePassword] = useInput('')

    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="fullname" value="fullname input" />
                </div>
                <TextInput
                    id="fullname"
                    type="text"
                    sizing="md"
                    placeholder='your fullname'
                    required
                    name='fullname'
                    value={fullname}
                    onChange={onChangeFullname}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                    id="email"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                    name='email'
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                    id="password"
                    type="password"
                    required
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <div className="">
                <Link to="/login" className='text-blue-600 visited:text-purple-600 underline text-sm hover:text-blue-800'>Have an account? Login</Link>
            </div>
            <Button 
            color='dark' 
            pill type="submit"
            onClick={() => register({fullname, email, password})}
            >Register</Button>
        </form>
    )
}

export default FormRegister

FormRegister.PropTypes = {
    register: PropTypes.func.isRequired
}