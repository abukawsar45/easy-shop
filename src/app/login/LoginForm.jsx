'use client'

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();

  const { signIn } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || '/';
  const { replace, refresh } = useRouter();

  const onSubmit =async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading...")
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='card-body' >      
      <div className="form-control">
        <label htmlFor="email" className='label label-text'>
          Email
        </label>
        <input
        type='email'
        placeholder='email'
        id='email'
        name='email'
          className='input input-bordered'
          autoComplete='email'
          { ...register("email", {
           required: true,
           pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/
          })}
        />
        { errors.email && (
          <span className='text-red-500 text-base mt-3' >Please enter a valid email address.</span>
        ) }
      </div>
      <div className="form-control">
        <label htmlFor="password" className='label label-text'>
          Password
        </label>
        <input
        type='password'
        placeholder='password'
        id='password'
        name='password'
          className='input input-bordered'
          autoComplete='password'
          { ...register("password",  {
            required: true,
            minLength: 8
          })}
        />
        { errors.password && (
          <span className='text-red-500 text-base mt-3' >Please enter a password.</span>
        ) }
        <label>
          <a href="#" className='label-text-alt link link-hover' >Forget password?</a>
        </label>
      </div>
      <p className='mt-3' >
        Don&apos; t have an accoutn? 
        <Link href='/signup'
          className='text-blue-500 under
           underline ml-1'
        >Signup</Link>

      </p>
    </form>
  );
};

export default LoginForm;