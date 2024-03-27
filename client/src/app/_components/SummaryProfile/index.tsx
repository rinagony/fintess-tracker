import styled from "styled-components";
import {
  Container,
  ProfileImage,
  UserInfo,
  UserData,
} from "../SummaryProfile/styles";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface SummaryProfileProps {
  user: any;
}

const AccountCircle = styled(AccountCircleOutlinedIcon)`
  margin-right: 0.5rem;
`;

export default function SummaryProfile({ user }: SummaryProfileProps) {
  return (
    <Container>
      {user.image ? <ProfileImage src={user.image} alt="User Profile" /> : <AccountCircle fontSize="large"/>}
      <UserInfo>
        <UserData>{user.name}</UserData>
      </UserInfo>
    </Container>
  );
}
