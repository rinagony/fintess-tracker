import {
  Container,
  ProfileImage,
  UserInfo,
  UserData,
} from "../SummaryProfile/styles";

interface SummaryProfileProps {
  user: any;
}

export default function SummaryProfile({ user }: SummaryProfileProps) {
  return (
    <Container>
      <ProfileImage src={user.image} alt="User Profile" />
      <UserInfo>
        <UserData>{user.name}</UserData>
      </UserInfo>
    </Container>
  );
}
