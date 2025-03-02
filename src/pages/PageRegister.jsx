import React from 'react'
import FormRegister from '../components/FormRegister'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../states/users/action';

const PageRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegist = ({fullname, email, password}) => {
    dispatch(asyncRegisterUser({fullname, email, password}))
    navigate('/login')
  }
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <FormRegister register={onRegist} />
        </div>
      </section>
    </>
  )
}

export default PageRegister