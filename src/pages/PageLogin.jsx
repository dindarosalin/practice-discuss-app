import React from 'react'
import FormLogin from '../components/FormLogin'

const PageLogin = () => {
    return (
        <>
            <section className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                    <FormLogin />
                </div>
            </section>
        </>
    )
}

export default PageLogin