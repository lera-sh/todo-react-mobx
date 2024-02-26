import React, { useCallback } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Button from '../components/Button';

function SignoutButton() {
  const handleSignout = useCallback(() => signOut(auth), []);

  return (
    <div className="flex flex-col items-end">
      <Button onClick={handleSignout} text="Sign out" />
    </div>
  );
}

export default SignoutButton;
