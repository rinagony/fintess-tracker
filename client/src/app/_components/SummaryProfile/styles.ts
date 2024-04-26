import styled from "styled-components";

interface ProfileImageProps {
  src: string | null | undefined;
}

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-right: 2rem;
  align-items: center;
  width: 100%;
`;

const ProfileImage = styled.img<ProfileImageProps>`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserData = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;

export { Container, ProfileImage, UserInfo, UserData}