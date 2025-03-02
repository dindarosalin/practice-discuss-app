import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import useInput from '../hooks/HooksInput';
import PropTypes from 'prop-types';

const FormLogin = ({ login }) => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                    name='email'
                    id="email"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                    name='password'
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <div className="">
                    <Link to="/register" className='text-blue-600 visited:text-purple-600 underline text-sm hover:text-blue-800'>Don&apos;t have an account? Register</Link>
                </div>
            </div>
            <Button
                color='dark'
                pill
                type="submit"
                onClick={() => login({ email, password })}
            >Login</Button>
        </form>
    )
}

export default FormLogin

FormLogin.propTypes = {
    login: PropTypes.func.isRequired,
};
