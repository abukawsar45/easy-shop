'use client'


import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { createUser, profileUpdate, googleLogin } = useAuth();
  console.log({ createUser });
  const search = useSearchParams();
  const from = search.get('redirectUrl') || '/';
  const { replace, refresh } = useRouter();

 
  const uploadImage = async (e) => {
    console.log(e)
    const formData = new FormData();
    console.log({formData})
    if(!e.target.files[0]) return;
    formData.append("image", e.target.files[0]);
    console.log({formData})
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        // `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        `https://api.imgbb.com/1/upload?key=d587fe35facb984ebe5250193519c219`,
        {
          method: 'POST',
          body: formData
        },
      );
         if (!res.ok) throw new Error("Failed to updload image");
      const data = await res.json();
      toast.dismiss(toastId);
      toast.success('image uploaded succeessFully');
      setValue('photo', data.data.url);
    } catch (error) {
      toast.error(error.message || 'Image not uplodaed')
      toast.dismiss(toastId)
    }
  }

  const onSubmit = async (data, event) => {
    console.log({data})
    const { name, email, password, photo } = data;
    const toastId = toast.loading('Loading...');
    try {
      await createUser(email, password);
      createJWT({email});
      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
      toast.dismiss(toastId)
      toast.success('User sign up successfully')

    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || 'User not signed up');
    }
  };

  
   const handleGoogleLogin = async () => {
     const toastId = toast.loading('Loading...');
     try {
       const user = await googleLogin();
       createJWT({ email: user.email });
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
        <label htmlFor='name' className='label label-text'>
          Name
        </label>
        <input
          type='text'
          placeholder='name'
          id='name'
          name='name'
          className='input input-bordered'
          {...register('name', { required: true })}
        />
        {errors.name && (
          <span className='text-red-500 text-base mt-1'>
            Please enter your name.
          </span>
        )}
      </div>
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
          autoComplete='new-password'
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className='text-red-500 text-base mt-1'>
            Please enter a password.
          </span>
        )}
      </div>
      <div className='form-control'>
        <label htmlFor='confirmPassword' className='label label-text'>
          Confirm Password
        </label>
        <input
          type='password'
          placeholder='Confirm Password'
          id='confirmPassword'
          name='confirmPassword'
          className='input input-bordered'
          autoComplete='new-password'
          {...register('confirmPassword', {
            required: true,
            minLength: 6,
            validate: (value) =>
              value === getValues('password') || 'The passwords do not match.',
          })}
        />
        {errors.confirmPassword && (
          <span className='text-red-500 text-base mt-1'>
            {errors.confirmPassword.message || 'Please confirm your password.'}
          </span>
        )}
      </div>
      <div className='form-control'>
        <label htmlFor='photo' className='label label-text'>
          Photo
        </label>
        <input
          type='file'
          id='photo'
          onChange={uploadImage}
          className='file-input file-input-bordered file-input-primary w-full'
        />
      </div>
      <div className='form-control mt-6'>
        <button className='btn btn-primary' type='submit'>
          Sign Up
        </button>
      </div>
      <p className='mt-3'>
        Already have an account?{' '}
        <Link className='text-blue-500 underline ml-1' href='/login'>
          Login
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
export default RegisterForm;