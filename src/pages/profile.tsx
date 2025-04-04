import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfileContent from '@/features/profile/ProfileContent';
import { getRequest } from '@/utils/apiClient';
import { ProfileData } from '@/types/home';
import { API_ENDPOINTS } from '@/config/apiEndPoints';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { getAuthHeaders } from '@/utils/headerUtils';

export default function Profile({ profileData }: { profileData: ProfileData }) {
  return (
    <>
      <Navigation />
      <ProfileContent profileData={profileData} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const cookies = parseCookies(context);
    const token = cookies.jwt;

    if (!token) {
      return {
        redirect: {
          destination: '/signin?redirect=/profile',
          permanent: false,
        },
      };
    }

    const response = await getRequest<ProfileData>({
      url: API_ENDPOINTS.AUTH_ME,
      config: {
        headers: getAuthHeaders(context),
      },
    });
    const profileData = response.data;

    return {
      props: {
        profileData,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/signin?redirect=/profile',
        permanent: false,
      },
    };
  }
};
