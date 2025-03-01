import React from 'react'
import FormRegister from '../components/FormRegister'

const PageRegister = () => {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <FormRegister />
        </div>
      </section>
    </>
  )
}

export default PageRegister