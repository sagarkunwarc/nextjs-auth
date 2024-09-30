"use client";

import { signIn } from "next-auth/react";
import React from "react";

const GoogleButton = () => {
  function handleGoogleLogin() {
    signIn("google", {
      callbackUrl: "/admin",
    });
  }
  return (
    <>
    <button
      onClick={handleGoogleLogin}
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
      Login In with Google
    </button>
    </>
  );
};

export default GoogleButton;
