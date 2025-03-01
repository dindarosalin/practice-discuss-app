import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';

const FormRegister = () => {
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="base" value="Base input" />
                </div>
                <TextInput id="base" type="text" sizing="md" placeholder='your fullname' required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
            </div>
            <div className="">
                <Link to="/login" className='text-blue-600 visited:text-purple-600 underline text-sm hover:text-blue-800'>Have an account? Login</Link>
            </div>
            <Button color='dark' pill type="submit">Register</Button>
        </form>
    )
}

export default FormRegister