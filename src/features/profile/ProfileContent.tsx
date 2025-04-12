import { useAuthStore } from '@/features/auth/model/store/authStore';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { postRequest } from '@/shared/lib/apiClient';
import { removeAuthCookie } from '@/shared/lib/cookieUtils';
import { ProfileData } from '@/shared/types/home';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
const Container = styled.div`
  background-color: #f5f7f8;
  padding-bottom: 50px;
`;

const InnerContainer = styled.div`
  background-color: #f5f7f8;
  width: 1240px;
  margin: 0 auto;
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
      removeAuthCookie();
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
