import React from 'react'
import FormLogin from '../components/FormLogin'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/auth/action';

const PageLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogin = ({ email, password }) => {
        dispatch(asyncSetAuthUser({ email, password }));
        navigate('/');
    };

    return (
        <>
            <section className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                    <FormLogin login={onLogin}/>
                </div>
            </section>
        </>
    )
}

export default PageLogin