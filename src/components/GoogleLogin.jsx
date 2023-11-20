import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoogleLogin = () => {
  const {googleLogin } = useAuth();
  const { replace, refresh } = useRouter();
  
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
    <div>
      g
    </div>
  );
};

export default GoogleLogin;