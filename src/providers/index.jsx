'use client'

import React from 'react';
import ThemeProvider from './ThemeProvider';
import AuthProviders from './AuthProviders';

const Providers = ({children}) => {
  
  return (
    <ThemeProvider>
      <AuthProviders>
      {children}
      </AuthProviders>
    </ThemeProvider>
  );
};


export default Providers;