import Navigation from '@/shared/ui/Navigation';
import Footer from '@/shared/ui/Footer';
import ProfileContent from '@/features/profile/ProfileContent';
import { getRequest } from '@/shared/lib/apiClient';
import { ProfileData } from '@/shared/types/home';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { getAuthHeaders } from '@/shared/lib/headerUtils';

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
