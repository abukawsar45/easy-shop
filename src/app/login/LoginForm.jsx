'use client'

import GoogleLogin from '@/components/GoogleLogin';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();

  const { signIn, googleLogin } = useAuth();
  // console.log({ signIn, googleLogin });
  const search = useSearchParams();
  const from = search.get("redirectUrl") || '/';
  const { replace, refresh } = useRouter();

  const onSubmit =async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading...");
    try {
      const user = await signIn(email, password);
      toast.dismiss(toastId);
      toast.success("User logged in successfully");
    } catch (error)
    {
      toast.dismiss(toastId)
      toast.error(error.message || "User not logged in")
    }
  }

   const handleGoogleLogin = async () => {
      const toastId = toast.loading('Loading...');
      try {
        const user = await googleLogin();
        toast.dismiss(toastId);
        toast.success('User logged in successfully');
      } catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message || 'User not logged in');
      }
    };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
    
      <div className='form-control'>
        <label htmlFor='email' className='label label-text'>
          Email
        </label>
        <input
          type='email'
          placeholder='email'
          id='email'
          name='email'
          className='input input-bordered'
          autoComplete='email'
          {...register('email', {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className='text-red-500 text-base mt-1'>
            Please enter a valid email address.
          </span>
        )}
      </div>
      <div className='form-control'>
        <label htmlFor='password' className='label label-text'>
          Password
        </label>
        <input
          type='password'
          placeholder='password'
          id='password'
          name='password'
          className='input input-bordered'
          autoComplete='password'
          {...register('password', {
            required: true,
            minLength: 8,
          })}
        />
        {errors.password && (
          <span className='text-red-500 text-base mt-3'>
            Please enter a password.
          </span>
        )}
        <label>
          <Link href='#' className='label-text-alt link link-hover'>
            Forget password?
          </Link>
        </label>
      </div>

      <div className='form-control mt-6'>
        <button className='btn btn-primary' type='submit'>
          Sign In
        </button>
      </div>
      <p className='mt-3'>
        Don&apos; t have an accoutn?
        <Link
          href='/register'
          className='text-blue-500 under
           underline ml-1'
        >
          Signup
        </Link>
      </p>
      <div className='divider mt-5'>OR</div>
      {/* <GoogleLogin from={from} /> */}
      <button
        onClick={handleGoogleLogin}
        type='button'
        className='btn btn-primary mt-5 mx-auto'
      >
        <FcGoogle className='text-3xl mr-3' /> Continue with google
      </button>
    </form>
  );
};

export default LoginForm;