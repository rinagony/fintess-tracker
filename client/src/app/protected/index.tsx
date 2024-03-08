import { useSession } from "next-auth/react";
import React from "react";
import Spinner from "../_components/Spinner";
import { redirect } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: session, status }: any = useSession();
  if (status === "loading") return <Spinner />;
  if (!session && !session?.user) {
    redirect("/api/auth/signin");
  }
  return children
};

export default ProtectedRoute;
