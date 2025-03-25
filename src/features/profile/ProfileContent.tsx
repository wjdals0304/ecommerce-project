import styled from 'styled-components';
import { ProfileData } from '@/types/home';
import ProfileInfo from './ProfileInfo';
import { postRequest } from '@/utils/apiClient';
import { API_ENDPOINTS } from '@/config/apiEndPoints';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useAuthStore } from '@/store/authStore';
const Container = styled.div`
  background-color: #f5f7f8;
  padding-bottom: 50px;
`;

const InnerContainer = styled.div`
  background-color: #f5f7f8;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
  height: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  padding-top: 50px;
`;

const LogoutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoutButton = styled.button`
  background-color: #f5f7f8;
  border: 1px solid #000;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

export default function ProfileContent({
  profileData,
}: {
  profileData: ProfileData;
}) {
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await postRequest({
        url: API_ENDPOINTS.AUTH_LOGOUT,
      });
      Cookies.remove('jwt');
      logout();
      toast.success('로그아웃 성공');
      window.location.href = '/';
    } catch (error) {
      toast.error('로그아웃 실패');
      console.error(error);
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Title>프로필</Title>
        <ProfileInfo profileData={profileData} />
        <LogoutButtonContainer>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </LogoutButtonContainer>
      </InnerContainer>
    </Container>
  );
}
