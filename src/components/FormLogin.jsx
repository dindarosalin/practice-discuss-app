import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';

const FormLogin = () => {
    return (
        <form className="flex max-w-md flex-col gap-4">
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
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <div className="">
                    <Link to="/register" className='text-blue-600 visited:text-purple-600 underline text-sm hover:text-blue-800'>Don&apos;t have an account? Register</Link>
                </div>
            </div>
            <Button color='dark' pill type="submit">Login</Button>
        </form>
    )
}

export default FormLogin