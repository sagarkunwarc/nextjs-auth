"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  function handleSignOut() {
    signOut({
        callbackUrl: "/"
    });
  }

  return (
    <>
    <button
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Sign out
    </button>
    </>
  );
};

export default SignOut;
