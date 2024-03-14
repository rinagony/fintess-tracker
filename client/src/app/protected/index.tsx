import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Spinner from "../_components/Spinner";
import { redirect } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: session, status }: any = useSession();
  

  useEffect(() => {
    if (status === "authenticated" && !session?.user) {
      redirect("/");
    }
  }, [session, status]);

  if (status === "loading") return <Spinner />;
  
  return <>{children}</>;
};

export default ProtectedRoute;