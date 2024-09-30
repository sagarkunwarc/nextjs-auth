import { authOptions } from '@/options';
import { getServerSession } from 'next-auth';
import React from 'react';
import SignOut from '../signout-button';

const Admin = async() => {
    const session = await getServerSession(authOptions);

    console.log({session})

  return (
    <div>
      <h1>You are logged in. This is an Admin Page- Hello {session?.user?.name}</h1>
      <br />
      <SignOut />
    </div>
  );
};

export default Admin;