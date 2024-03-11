'use client'
import { useSession } from "next-auth/react";
import Spinner from "../_components/Spinner";
import styled from "styled-components";

interface ProfileImageProps {
  src: string | null | undefined;
}

const Container = styled.div`
  text-align: center;
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  width: 100%;
`;

const ProfileImage = styled.img<ProfileImageProps>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 2rem;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserData = styled.p`
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 1rem;
`;

export default function MyAccount() {
  const { data: session, status } = useSession();

  if (status === "loading" || (!session?.user)) return <Spinner />;

  return (
    <Container>
      <ProfileImage src={session.user.image} alt="User Profile" />
      <UserInfo>
        <UserData>Name: {session.user.name}</UserData>
        <UserData>Email: {session.user.email}</UserData>
      </UserInfo>
    </Container>
  );
}