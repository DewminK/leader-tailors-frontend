'use client';
import { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <Login onSwitchToSignUp={() => setShowLogin(false)} />
      ) : (
        <SignUp onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </>
  );
}
