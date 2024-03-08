import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Authentication() {
  const { data: session, status } = useSession();

  if(status === "loading") return null
  return (
    <div>
      {session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn("google")}>Sign in with google</button>
      )}
    </div>
  );
}
